// @ts-nocheck
import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener } from "antlr4ts";

import { Python3Lexer } from './Python3Lexer';
import { Python3Parser } from './Python3Parser';
import { ParseTreeWalker } from "antlr4ts/tree";
import{ Python3Listener } from './Python3Listener';
import { Python3CustomVisitor } from './Python3CustomVisitor';
       
export function verify_syntax(program: string): any[] {
    let input = new ANTLRInputStream(program);
    var lexer = new Python3Lexer(input);
    var tokens  = new CommonTokenStream(lexer);
    var parser = new Python3Parser(tokens);
    parser.removeErrorListeners();
    var result = []
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
        //   console.error(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
        result.push(`line ${line}, col ${column}: ${msg}`);
        }
    });
    var tree = parser.single_input();   

    console.log("=== SYNTAX VERIFIER ===");
    console.log(result);
    return result;
}