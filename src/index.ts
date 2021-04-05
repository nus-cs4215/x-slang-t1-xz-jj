import { findNodeAt } from './utils/walkers'
import { Program, SourceLocation } from 'estree'
import { SourceMapConsumer } from 'source-map'
import createContext from './createContext'
import { findDeclarationNode, findIdentifierNode } from './finder'
// import { evaluate } from './interpreter/interpreter'
import { parse } from './parser/parser'
import { parse_python } from './parser/parser_python'
import { verify_syntax } from './sicpy/syntax_verifier'
import {
  Error as ResultError,
  ExecutionMethod,
  Finished,
  // Scheduler,
  SourceError,
  Context,
  Result,
  Variant,
  TypeAnnotatedNode,
  TypeAnnotatedFuncDecl
} from './types'

export { Variant } from './types'
import { validateAndAnnotate } from './validator/validator'
export { SourceDocumentation } from './editors/ace/docTooltip'
import * as es from 'estree'
import { typeCheck } from './typeChecker/typeChecker'
import { typeToString } from './utils/stringify'
// import { PreemptiveScheduler } from './schedulers'
// import { reject } from 'lodash'

export interface IOptions {
  scheduler: 'preemptive' | 'async'
  steps: number
  stepLimit: number
  executionMethod: ExecutionMethod
  variant: Variant
  originalMaxExecTime: number
  isPrelude: boolean
}

// const DEFAULT_OPTIONS: IOptions = {
//   scheduler: 'async',
//   steps: 1000,
//   stepLimit: 1000,
//   executionMethod: 'auto',
//   variant: 'calc',
//   originalMaxExecTime: 1000,
//   isPrelude: false
// }

// needed to work on browsers
if (typeof window !== 'undefined') {
  // @ts-ignore
  SourceMapConsumer.initialize({
    'lib/mappings.wasm': 'https://unpkg.com/source-map@0.7.3/lib/mappings.wasm'
  })
}

// deals with parsing error objects and converting them to strings (for repl at least)

const verboseErrors = false
// const resolvedErrorPromise = Promise.resolve({ status: 'error' } as Result)

export function parseError(errors: SourceError[], verbose: boolean = verboseErrors): string {
  const errorMessagesArr = errors.map(error => {
    const line = error.location ? error.location.start.line : '<unknown>'
    const column = error.location ? error.location.start.column : '<unknown>'
    const explanation = error.explain()

    if (verbose) {
      // TODO currently elaboration is just tagged on to a new line after the error message itself. find a better
      // way to display it.
      const elaboration = error.elaborate()
      return `Line ${line}, Column ${column}: ${explanation}\n${elaboration}\n`
    } else {
      return `Line ${line}: ${explanation}`
    }
  })
  return errorMessagesArr.join('\n')
}

export function findDeclaration(
  code: string,
  context: Context,
  loc: { line: number; column: number }
): SourceLocation | null | undefined {
  const program = parse(code, context)
  if (!program) {
    return null
  }
  const identifierNode = findIdentifierNode(program, context, loc)
  if (!identifierNode) {
    return null
  }
  const declarationNode = findDeclarationNode(program, identifierNode)
  if (!declarationNode || identifierNode === declarationNode) {
    return null
  }
  return declarationNode.loc
}

export function hasDeclaration(
  code: string,
  context: Context,
  loc: { line: number; column: number }
): boolean {
  const program = parse(code, context)
  if (!program) {
    return false
  }
  const identifierNode = findIdentifierNode(program, context, loc)
  if (!identifierNode) {
    return false
  }
  const declarationNode = findDeclarationNode(program, identifierNode)
  if (declarationNode == null || declarationNode.loc == null) {
    return false
  }

  return true
}

function typedParse(code: any, context: Context) {
  const program: Program | undefined = parse(code, context)
  if (program === undefined) {
    return null
  }
  return validateAndAnnotate(program, context)
}

export function getTypeInformation(
  code: string,
  context: Context,
  loc: { line: number; column: number },
  name: string
): string {
  try {
    // parse the program into typed nodes and parse error
    const program = typedParse(code, context)
    if (program === null) {
      return ''
    }
    if (context.prelude !== null) {
      typeCheck(typedParse(context.prelude, context)!, context)
    }
    const [typedProgram, error] = typeCheck(program, context)
    const parsedError = parseError(error)
    if (context.prelude !== null) {
      // the env of the prelude was added, we now need to remove it
      context.typeEnvironment.pop()
    }

    // initialize the ans string
    let ans = ''
    if (parsedError) {
      ans += parsedError + '\n'
    }
    if (!typedProgram) {
      return ans
    }

    // get name of the node
    const getName = (typedNode: TypeAnnotatedNode<es.Node>) => {
      let nodeId = ''
      if (typedNode.type) {
        if (typedNode.type === 'FunctionDeclaration') {
          nodeId = typedNode.id?.name!
        } else if (typedNode.type === 'VariableDeclaration') {
          nodeId = (typedNode.declarations[0].id as es.Identifier).name
        } else if (typedNode.type === 'Identifier') {
          nodeId = typedNode.name
        }
      }
      return nodeId
    }

    // callback function for findNodeAt function
    function findByLocationPredicate(t: string, nd: TypeAnnotatedNode<es.Node>) {
      if (!nd.inferredType) {
        return false
      }

      const isInLoc = (nodeLoc: SourceLocation): boolean => {
        return !(
          nodeLoc.start.line > loc.line ||
          nodeLoc.end.line < loc.line ||
          (nodeLoc.start.line === loc.line && nodeLoc.start.column > loc.column) ||
          (nodeLoc.end.line === loc.line && nodeLoc.end.column < loc.column)
        )
      }

      const location = nd.loc
      if (nd.type && location) {
        return getName(nd) === name && isInLoc(location)
      }
      return false
    }

    // report both as the type inference

    const res = findNodeAt(typedProgram, undefined, undefined, findByLocationPredicate)

    if (res === undefined) {
      return ans
    }

    const node: TypeAnnotatedNode<es.Node> = res.node

    if (node === undefined) {
      return ans
    }

    const actualNode =
      node.type === 'VariableDeclaration'
        ? (node.declarations[0].init! as TypeAnnotatedNode<es.Node>)
        : node
    const type = typeToString(
      actualNode.type === 'FunctionDeclaration'
        ? (actualNode as TypeAnnotatedFuncDecl).functionInferredType!
        : actualNode.inferredType!
    )
    return ans + `At Line ${loc.line} => ${getName(node)}: ${type}`
  } catch (error) {
    return ''
  }
}

// link to frontend external lib
declare const pyodide: any
declare const languagePluginLoader: any

// use this to replace print
languagePluginLoader.then(() => {
  // Pyodide is now ready to use...
  initPyodide();
  console.log("python3 loaded");
})

async function initPyodide() {
  await pyodide.loadPackage('micropip');
  await pyodide.runPythonAsync(`
    import micropip
    await micropip.install('ast2json')
    
    from ast2json import ast2json
  `);
}

export async function runInContext(
  code: string,
  context: Context,
  options: Partial<IOptions> = {}
): Promise<Result> {
  // const theOptions: IOptions = { ...DEFAULT_OPTIONS, ...options }
  context.variant = determineVariant(context, options)
  context.errors = []

  // TODO: add multiple variant support

  try {
    console.log('code passed to backend: ');
    console.log(code);

    // verify the syntax with Antlr4
    const syntaxErrors = verify_syntax(code.replace(/\r\n/g,'\n').replace(/\"/g, `\'`));
    if(syntaxErrors.length >0) {
      // there are errors
      console.log("there are syntax errors!")
      const result = "";
      // for(var index in syntaxErrors) {
      //   result = result.concat(syntaxErrors[index] + "\n");
      // }

      return new Promise((resolve, reject) => {
        resolve({ status: 'finished', context, value: syntaxErrors[0] });
      })
    }
  
    // get the ast
    console.log("=== AST ===");
    const astOut = pyodide.runPython(`import ast\nimport sys\nimport io\nimport json\nsys.stdout = io.StringIO()\nprint(json.dumps(ast2json(ast.parse("` + code.replace(/\r\n/g,'\n').replace(/\n/g, '\\n').replace(/\"/g, `\'`) + `"))))\nsys.stdout.getvalue()`);
    console.log(astOut);

    // verify the ast
    console.log("=== AST VERIFY ===");
    console.log("variant: " + String(context.variant));
    
    const verifyOut = parse_python(astOut, {'source_chapter': String(context.variant)});
    console.log(verifyOut);
    console.log(typeof(verifyOut));
    
    if(Object.keys(verifyOut).length >0){
      for(const index in verifyOut) {
        var currItem = verifyOut[index];

        if(currItem === undefined) {
          continue;
        }

        if(currItem['status'] == 'no') {
          return new Promise((resolve, reject) => {
            resolve({ status: 'finished', context, value: currItem['msg'] });
          })
        } 
      }
    }
    
    const resOut0 = pyodide.runPython(`import sys\nimport io\nsys.stdout = io.StringIO()\n` + code + `\n`);
    const resOut1 = pyodide.runPython(`sys.stdout.getvalue()\n`);
  
    // format output here
    console.log("=== OUTPUT ===");
    let resOut = "";
    if (resOut0 === undefined) {
      console.log(resOut1);
      resOut = resOut1;
    } else {
      console.log(resOut0 + resOut1);
      resOut = resOut1 + resOut0;
    }
  
    if(resOut === "" ) {
      resOut = "undefined";
    }
    
    console.log('result is: ')
    console.log(resOut);
  
    return new Promise((resolve, reject) => {
      resolve({ status: 'finished', context, value: unescape(resOut) })
    })

  } catch (err) {
    console.log(err);

    // temporarily treat error as "finished"
    return new Promise((resolve, reject) => {
      resolve({ status: 'finished', context, value: err.toString() })
    })
  }

 
  // const program = parse(code, context)
  // if (!program) {
  //   return resolvedErrorPromise
  // }

  // validateAndAnnotate(program as Program, context)
  // typeCheck(program, context)
  // if (context.errors.length > 0) {
  //   return resolvedErrorPromise
  // }

  // if (context.prelude !== null) {
  //   const prelude = context.prelude
  //   context.prelude = null
  //   await runInContext(prelude, context, { ...options, isPrelude: true })
  //   return runInContext(code, context, options)
  // }

  // const scheduler: Scheduler = new PreemptiveScheduler(theOptions.steps)
  // const result = scheduler.run(it, context)

  // return result
  // return new Promise((resolve, reject) => {
  //   resolve({ status: 'finished', context, value: pyodide.runPython(code) })
  // })
}

/**
 * Small function to determine the variant to be used
 * by a program, as both context and options can have
 * a variant. The variant provided in options will
 * have precedence over the variant provided in context.
 *
 * @param context The context of the program.
 * @param options Options to be used when
 *                running the program.
 *
 * @returns The variant that the program is to be run in
 */
function determineVariant(context: Context, options: Partial<IOptions>): Variant {
  if (options.variant) {
    return options.variant
  } else {
    return context.variant
  }
}

export function resume(result: Result): Finished | ResultError | Promise<Result> {
  if (result.status === 'finished' || result.status === 'error') {
    return result
  } else {
    return result.scheduler.run(result.it, result.context)
  }
}

export { createContext, Context, Result }
