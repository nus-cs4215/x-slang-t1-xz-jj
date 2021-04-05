// @ts-nocheck
//globals
const geval = eval
global.check_rules = check_rules
const verbose :Number = 1;
function csl(msg:any){  if(verbose>0){console.log(msg)}}

// Python official ast: https://docs.python.org/3/library/ast.html
const rules = { '0' : 
                    {'Module':true,         'Interactive':false,  'Expression':false,
                    'FunctionType':false, 'FunctionDef':true,  'AsyncFunctionDef':false,
                    'ClassDef':false,       'Return':true,       'Delete':false,       'Assign':true,
                    'AugAssign':false,      'AnnAssign':false,    'For':false,          'AsyncFor':false,
                    'While':false,          'If':true,           'With':false,         'AsyncWith':false,
                    'Raise':false,          'Try':false,          'Assert':false,       'Import':false,
                    'ImportFrom':false,     'Global':false,       'Nonlocal':false,     'Expr':true,
                    'Pass':true,           'Break':true,        'Continue':true,     'BoolOp':true,
                    'NamedExpr':false,      'BinOp':true,        'UnaryOp':true,      'Lambda':false,
                    'IfExp':true,          'Dict':false,         'Set':false,          'ListComp':false,
                    'SetComp':false,        'DictComp':false,     'GeneratorExp':false, 'Await':false,
                    'Yield':false,          'YieldFrom':false,    'Compare':true,      'Call':true,
                    'FormattedValue':false, 'JoinedStr':false,    'Constant':true,     'Attribute':false,
                    'Subscript':false,      'Starred':false,      'Name':true,         'List':false,
                    'Tuple':false,          'Slice':false,        'attributes':false,   'Load':false,
                    'Store':false,          'Del':false,          'And':true,          'Or':false,
                    'Add':true,            'Sub':true,          'Mult':true,         'MatMult':false,
                    'Div':false,            'Mod':false,          'Pow':false,          'LShift':false,
                    'RShift':false,         'BitOr':false,        'BitXor':false,       'BitAnd':false,
                    'FloorDiv':false,       'Invert':false,       'Not':true,          'UAdd':false,
                    'USub':false,           'Eq':true,           'NotEq':true,        'Lt':true,
                    'LtE':true,             'Gt':true,           'GtE':true,          'Is':false,
                    'IsNot':false,          'In':false,           'NotIn':false}, 
                '1' : 
                    {'Module':true,         'Interactive':false,  'Expression':false,
                    'FunctionType':false, 'FunctionDef':true,  'AsyncFunctionDef':false,
                    'ClassDef':false,       'Return':true,       'Delete':false,       'Assign':true,
                    'AugAssign':false,      'AnnAssign':false,    'For':false,          'AsyncFor':false,
                    'While':false,          'If':true,           'With':false,         'AsyncWith':false,
                    'Raise':false,          'Try':false,          'Assert':false,       'Import':false,
                    'ImportFrom':false,     'Global':false,       'Nonlocal':false,     'Expr':true,
                    'Pass':true,           'Break':true,        'Continue':true,     'BoolOp':true,
                    'NamedExpr':false,      'BinOp':true,        'UnaryOp':true,      'Lambda':false,
                    'IfExp':true,          'Dict':false,         'Set':false,          'ListComp':false,
                    'SetComp':false,        'DictComp':false,     'GeneratorExp':false, 'Await':false,
                    'Yield':false,          'YieldFrom':false,    'Compare':true,      'Call':true,
                    'FormattedValue':false, 'JoinedStr':false,    'Constant':true,     'Attribute':false,
                    'Subscript':false,      'Starred':false,      'Name':true,         'List':false,
                    'Tuple':false,          'Slice':false,        'attributes':false,   'Load':false,
                    'Store':false,          'Del':false,          'And':true,          'Or':false,
                    'Add':true,            'Sub':true,          'Mult':true,         'MatMult':false,
                    'Div':true,            'Mod':false,          'Pow':false,          'LShift':false,
                    'RShift':false,         'BitOr':false,        'BitXor':false,       'BitAnd':false,
                    'FloorDiv':false,       'Invert':false,       'Not':true,          'UAdd':false,
                    'USub':false,           'Eq':true,           'NotEq':true,        'Lt':true,
                    'LtE':true,            'Gt':true,           'GtE':true,          'Is':false,
                    'IsNot':false,          'In':false,           'NotIn':false},  
                '2' : 
                    {'Module':true,         'Interactive':false,  'Expression':false,
                    'FunctionType':false, 'FunctionDef':true,  'AsyncFunctionDef':false,
                    'ClassDef':false,       'Return':true,       'Delete':false,       'Assign':true,
                    'AugAssign':false,      'AnnAssign':false,    'For':false,          'AsyncFor':false,
                    'While':false,          'If':true,           'With':false,         'AsyncWith':false,
                    'Raise':false,          'Try':false,          'Assert':false,       'Import':false,
                    'ImportFrom':false,     'Global':false,       'Nonlocal':false,     'Expr':true,
                    'Pass':true,           'Break':true,        'Continue':true,     'BoolOp':true,
                    'NamedExpr':false,      'BinOp':true,        'UnaryOp':true,      'Lambda':false,
                    'IfExp':true,          'Dict':false,         'Set':false,          'ListComp':false,
                    'SetComp':false,        'DictComp':false,     'GeneratorExp':false, 'Await':false,
                    'Yield':false,          'YieldFrom':false,    'Compare':true,      'Call':true,
                    'FormattedValue':false, 'JoinedStr':false,    'Constant':true,     'Attribute':false,
                    'Subscript':false,      'Starred':false,      'Name':true,         'List':false,
                    'Tuple':false,          'Slice':false,        'attributes':false,   'Load':false,
                    'Store':false,          'Del':false,          'And':true,          'Or':false,
                    'Add':true,            'Sub':true,          'Mult':true,         'MatMult':false,
                    'Div':false,            'Mod':false,          'Pow':false,          'LShift':false,
                    'RShift':false,         'BitOr':false,        'BitXor':false,       'BitAnd':false,
                    'FloorDiv':false,       'Invert':false,       'Not':true,          'UAdd':false,
                    'USub':false,           'Eq':true,           'NotEq':true,        'Lt':true,
                    'LtE':true,            'Gt':true,           'GtE':true,          'Is':false,
                    'IsNot':false,          'In':false,           'NotIn':false}, 
                '3' : 
                    {'Module':true,         'Interactive':false,  'Expression':false,
                    'FunctionType':false, 'FunctionDef':true,  'AsyncFunctionDef':false,
                    'ClassDef':false,       'Return':true,       'Delete':false,       'Assign':true,
                    'AugAssign':false,      'AnnAssign':false,    'For':true,          'AsyncFor':false,
                    'While':true,          'If':true,           'With':false,         'AsyncWith':false,
                    'Raise':false,          'Try':false,          'Assert':false,       'Import':false,
                    'ImportFrom':false,     'Global':false,       'Nonlocal':false,     'Expr':true,
                    'Pass':true,           'Break':true,        'Continue':true,     'BoolOp':true,
                    'NamedExpr':false,      'BinOp':true,        'UnaryOp':true,      'Lambda':false,
                    'IfExp':true,          'Dict':false,         'Set':false,          'ListComp':false,
                    'SetComp':false,        'DictComp':false,     'GeneratorExp':false, 'Await':false,
                    'Yield':false,          'YieldFrom':false,    'Compare':true,      'Call':true,
                    'FormattedValue':false, 'JoinedStr':false,    'Constant':true,     'Attribute':false,
                    'Subscript':false,      'Starred':false,      'Name':true,         'List':false,
                    'Tuple':false,          'Slice':false,        'attributes':false,   'Load':false,
                    'Store':false,          'Del':false,          'And':true,          'Or':false,
                    'Add':true,            'Sub':true,          'Mult':true,         'MatMult':false,
                    'Div':false,            'Mod':false,          'Pow':false,          'LShift':false,
                    'RShift':false,         'BitOr':false,        'BitXor':false,       'BitAnd':false,
                    'FloorDiv':false,       'Invert':false,       'Not':true,          'UAdd':false,
                    'USub':false,           'Eq':true,           'NotEq':true,        'Lt':true,
                    'LtE':true,            'Gt':true,           'GtE':true,          'Is':false,
                    'IsNot':false,          'In':false,           'NotIn':false} }

                    
         
// templating..
const mods = ['Module', 'Interactive', 'Expression', 'Interactive', 'Expression','FunctionType']
const stmts = ['FunctionDef', 'AsyncFunctionDef', 'ClassDef', 'Return', 'Delete', 'Assign', 'AugAssign',
             'AnnAssign', 'For', 'AsyncFor', 'While', 'If', 'With', 'AsyncWith', 'Raise', 'Try', 'Assert', 'Import', 'ImportFrom',
             'Global', 'Nonlocal', 'Expr', 'Pass', 'Break', 'Continue' ]
const exprs = ['BoolOp', 'NamedExpr', 'BinOp', 'UnaryOp', 'Lambda', 'IfExp', 'Dict', 'Set', 'ListComp', 'SetComp', 'DictComp', 'GeneratorExp',
             'Await', 'Yield', 'YieldFrom', 'Compare', 'Call', 'FormattedValue', 'JoinedStr', 'Constant', 'Attribute', 'Subscript',
             'Starred', 'Name', 'List', 'Tuple', 'Slice', 'attributes']
const expr_contexts = ['Load', 'Store', 'Del']
const boolop = ['And','Or']
const operators = ['Add' , 'Sub' , 'Mult' , 'MatMult' , 'Div' , 'Mod' , 'Pow' , 'LShift', 
                 'RShift' , 'BitOr' , 'BitXor' , 'BitAnd' , 'FloorDiv']
const unaryops = ['Invert' , 'Not' , 'UAdd' , 'USub']
const cmpop = ['Eq' , 'NotEq' , 'Lt' , 'LtE' , 'Gt' , 'GtE' , 'Is' , 'IsNot' , 'In' , 'NotIn']
const primitives = ['Num', 'String', 'Constant', 'arguments', 'arg', 'comprehension', 'excepthandler', 'keyword', 'alias', 'withitem', 'type_ignore']


const amalgate = mods.concat(stmts).concat(exprs).concat(expr_contexts).concat(boolop).concat(operators).concat(unaryops).concat(cmpop).concat(primitives)

for (var idx in amalgate) {
    // have to do declare geval so the functions are in global scope
    geval(`var is_${amalgate[idx]} = function(component){return component._type=='${amalgate[idx]}';}`)
    geval(`var ${amalgate[idx]}_ = function(component, context){console.log('${amalgate[idx]} not implemented yet'); if(!check_rules("${amalgate[idx]}", context['source_chapter'])) return [{status:"no", msg:"${amalgate[idx]} not allowed.. yet", "col_offset": component["col_offset"], "lineno": component["lineno"]}]}`);

    // csl(`is_${amalgate[idx]}(component)?${amalgate[idx]}_(component, context):`); 
}

function evaluate(component: JSON, context:object):any{
    return  is_Module(component)?Module_(component, context):
            is_Interactive(component)?Interactive_(component, context):
            is_Expression(component)?Expression_(component, context):
            is_Interactive(component)?Interactive_(component, context):
            is_Expression(component)?Expression_(component, context):
            is_FunctionType(component)?FunctionType_(component, context):
            is_FunctionDef(component)?FunctionDef_(component, context):
            is_AsyncFunctionDef(component)?AsyncFunctionDef_(component, context):
            is_ClassDef(component)?ClassDef_(component, context):
            is_Return(component)?Return_(component, context):
            is_Delete(component)?Delete_(component, context):
            is_Assign(component)?Assign_(component, context):
            is_AugAssign(component)?AugAssign_(component, context):
            is_AnnAssign(component)?AnnAssign_(component, context):
            is_For(component)?For_(component, context):
            is_AsyncFor(component)?AsyncFor_(component, context):
            is_While(component)?While_(component, context):
            is_If(component)?If_(component, context):
            is_With(component)?With_(component, context):
            is_AsyncWith(component)?AsyncWith_(component, context):
            is_Raise(component)?Raise_(component, context):
            is_Try(component)?Try_(component, context):
            is_Assert(component)?Assert_(component, context):
            is_Import(component)?Import_(component, context):
            is_ImportFrom(component)?ImportFrom_(component, context):
            is_Global(component)?Global_(component, context):
            is_Nonlocal(component)?Nonlocal_(component, context):
            is_Expr(component)?Expr_(component, context):
            is_Pass(component)?Pass_(component, context):
            is_Break(component)?Break_(component, context):
            is_Continue(component)?Continue_(component, context):
            is_BoolOp(component)?BoolOp_(component, context):
            is_NamedExpr(component)?NamedExpr_(component, context):
            is_BinOp(component)?BinOp_(component, context):
            is_UnaryOp(component)?UnaryOp_(component, context):
            is_Lambda(component)?Lambda_(component, context):
            is_IfExp(component)?IfExp_(component, context):
            is_Dict(component)?Dict_(component, context):
            is_Set(component)?Set_(component, context):
            is_ListComp(component)?ListComp_(component, context):
            is_SetComp(component)?SetComp_(component, context):
            is_DictComp(component)?DictComp_(component, context):
            is_GeneratorExp(component)?GeneratorExp_(component, context):
            is_Await(component)?Await_(component, context):
            is_Yield(component)?Yield_(component, context):
            is_YieldFrom(component)?YieldFrom_(component, context):
            is_Compare(component)?Compare_(component, context):
            is_Call(component)?Call_(component, context):
            is_FormattedValue(component)?FormattedValue_(component, context):
            is_JoinedStr(component)?JoinedStr_(component, context):
            is_Constant(component)?Constant_(component, context):
            is_Attribute(component)?Attribute_(component, context):
            is_Subscript(component)?Subscript_(component, context):
            is_Starred(component)?Starred_(component, context):
            is_Name(component)?Name_(component, context):
            is_List(component)?List_(component, context):
            is_Tuple(component)?Tuple_(component, context):
            is_Slice(component)?Slice_(component, context):
            is_attributes(component)?attributes_(component, context):
            is_Load(component)?Load_(component, context):
            is_Store(component)?Store_(component, context):
            is_Del(component)?Del_(component, context):
            is_And(component)?And_(component, context):
            is_Or(component)?Or_(component, context):
            is_Add(component)?Add_(component, context):
            is_Sub(component)?Sub_(component, context):
            is_Mult(component)?Mult_(component, context):
            is_MatMult(component)?MatMult_(component, context):
            is_Div(component)?Div_(component, context):
            is_Mod(component)?Mod_(component, context):
            is_Pow(component)?Pow_(component, context):
            is_LShift(component)?LShift_(component, context):
            is_RShift(component)?RShift_(component, context):
            is_BitOr(component)?BitOr_(component, context):
            is_BitXor(component)?BitXor_(component, context):
            is_BitAnd(component)?BitAnd_(component, context):
            is_FloorDiv(component)?FloorDiv_(component, context):
            is_Invert(component)?Invert_(component, context):
            is_Not(component)?Not_(component, context):
            is_UAdd(component)?UAdd_(component, context):
            is_USub(component)?USub_(component, context):
            is_Eq(component)?Eq_(component, context):
            is_NotEq(component)?NotEq_(component, context):
            is_Lt(component)?Lt_(component, context):
            is_LtE(component)?LtE_(component, context):
            is_Gt(component)?Gt_(component, context):
            is_GtE(component)?GtE_(component, context):
            is_Is(component)?Is_(component, context):
            is_IsNot(component)?IsNot_(component, context):
            is_In(component)?In_(component, context):
            is_NotIn(component)?NotIn_(component, context):
            is_Num(component)?Num_(component, context):
            is_String(component)?String_(component, context):
            is_Constant(component)?Constant_(component, context):
            is_arguments(component)?arguments_(component, context):
            is_arg(component)?arg_(component, context):
            is_comprehension(component)?comprehension_(component, context):
            is_excepthandler(component)?excepthandler_(component, context):
            is_keyword(component)?keyword_(component, context):
            is_alias(component)?alias_(component, context):
            is_withitem(component)?withitem_(component, context):
            is_type_ignore(component)?type_ignore_(component, context):
            not_implement(component, context);
}

function Module_(component:JSON, context:object){
    // console.log("In Module_")

    if(!check_rules("Module", context['source_chapter']))
        return [{status:"no", msg:"Module not allowed.. yet", "col_offset": component["col_offset"], "lineno": component["lineno"]}]

    //processing module::=body
    const statements = component['body'];
    let result = []
    for (const statement_idx in statements){
        const stmt = statements[statement_idx];
        // result.push(evaluate(stmt, context))
        result = result.concat(evaluate(stmt, context))
    }
    return result
}

function Expr_(component:JSON, context:object){
    // console.log("In Expr_")
    if(!check_rules("Expr", context['source_chapter']))
        return [{status:"no", msg:"Expr not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    
    const value =  component["value"];
    return evaluate(value, context);
}

//Assign(expr* targets, expr value, string? type_comment)
function Assign_(component:JSON, context:object){
    if(!check_rules("Assign", context['source_chapter']))
        return [{status:"no", msg:"Assign not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    const targets = component['targets']
    let results = []
    
    //targets
    for (idx in targets){
        const target = targets[idx]
        results = results.concat(evaluate(target, context))
    }

    //value
    const value = component['value']
    results = results.concat(evaluate(value, context))

    return results
    
}

// IfExp(expr test, expr body, expr orelse)
function IfExp_(component:JSON, context:object){
    if(!check_rules("IfExp", context['source_chapter']))
        return [{status:"no", msg:"IfExp not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    let results = []
    // test
    results = results.concat(evaluate(component['test'],context))
    // body
    results = results.concat(evaluate(component['body'],context))
    // orelse
    results = results.concat(evaluate(component['orelse'],context))

    return results
}

function Pass_(component:JSON, context:object){
    if(!check_rules("Pass", context['source_chapter']))
        return [{status:"no", msg:"Pass not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"Pass", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}

function Break_(component:JSON, context:object){
    if(!check_rules("Break", context['source_chapter']))
        return [{status:"no", msg:"Break not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"Break", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}


function Continue_(component:JSON, context:object){
    if(!check_rules("Continue", context['source_chapter']))
        return [{status:"no", msg:"Continue not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"Continue", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}
// Compare(expr left, cmpop* ops, expr* comparators)
function Compare_(component:JSON, context:object){

    if(!check_rules("Compare", context['source_chapter']))
        return [{status:"no", msg:"Compare not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    let results = []
    //left
    results = results.concat(evaluate(component['left'], context))
    
    //ops    
    const ops = component['ops']
    for (var idx in ops){
        const op = ops[idx]
        results = results.concat(evaluate(op, context))
    }

    //comparators
    const comparators = component['comparators']
    for (var idx in comparators){
        const comparator = comparators[idx]
        results = results.concat(evaluate(comparator, context))
    }
    return results
}

// primitive Eq
function Eq_(component:JSON, context:object){

    if(!check_rules("Eq", context['source_chapter']))
        return [{status:"no", msg:"Eq not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"Eq", "col_offset": component['col_offset'], "lineno": component['lineno']}]

}

function NotEq_(component:JSON, context:object){
    if(!check_rules("NotEq", context['source_chapter']))
        return [{status:"no", msg:"NotEq not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"NotEq", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}

function Lt_(component:JSON, context:object){
    if(!check_rules("Lt", context['source_chapter']))
        return [{status:"no", msg:"Lt not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"Lt", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}

function LtE_(component:JSON, context:object){
    if(!check_rules("LtE", context['source_chapter']))
        return [{status:"no", msg:"LtE not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"LtE", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}

function Gt_(component:JSON, context:object){
    if(!check_rules("Gt", context['source_chapter']))
        return [{status:"no", msg:"Gt not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"Gt", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}



function GtE_(component:JSON, context:object){
    if(!check_rules("GtE", context['source_chapter']))
        return [{status:"no", msg:"GtE not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"GtE", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}

function Is_(component:JSON, context:object){
    if(!check_rules("Is", context['source_chapter']))
        return [{status:"no", msg:"Is not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"Is", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}

function IsNot_(component:JSON, context:object){
    if(!check_rules("IsNot", context['source_chapter']))
        return [{status:"no", msg:"IsNot not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"IsNot", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}

function In_(component:JSON, context:object){
    if(!check_rules("In", context['source_chapter']))
        return [{status:"no", msg:"In not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"In", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}

function NotIn_(component:JSON, context:object){
    if(!check_rules("NotIn", context['source_chapter']))
        return [{status:"no", msg:"NotIn not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    return [{status:"ok", msg:"NotIn", "col_offset": component['col_offset'], "lineno": component['lineno']}]
}



// BinOp(expr left, operator op, expr right)
function BinOp_(component:JSON, context:object){
    // console.log("Inside BinOp_");
    // console.log(component);
    if(!check_rules("BinOp", context['source_chapter']))
        return [{status:"no", msg:"BinOp not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    const left = component["left"];
    const right = component["right"];
    const op = component["op"];

    return [].concat(evaluate(left, context)).concat(evaluate(op, context)).concat(evaluate(right, context));
}

//BoolOp(boolop op, expr* values)
function BoolOp_(component:JSON, context:object){
    // console.log("Inside BoolOp_");
    // console.log(component);
    if(!check_rules("BoolOp", context['source_chapter']))
        return [{status:"no", msg:"BoolOp not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    
    let results = []

    //op
    const op = component["op"];
    results = results.concat(evaluate(op, context))

    const values = component['values']
    for (const idx in values){
        const value = values[idx]
        results = results.concat(evaluate(value, context))
    }

    return results
}

//arguments = (arg* posonlyargs, arg* args, arg? vararg, arg* kwonlyargs, expr* kw_defaults, arg? kwarg, expr* defaults)
function arguments_(component:JSON, context:object){
    //args
    const args = component['args']
    let results = []
    for (idx in args){
        const arg = args[idx]
        results = results.concat(evaluate(arg, context))
    }
    return results
}
//arg = (identifier arg, expr? annotation, string? type_comment) 
// attributes (int lineno, int col_offset, int? end_lineno, int? end_col_offset)

function arg_(component:JSON, context:object){
    //always return true for arg
    return {status:'ok', msg:'arg', lineno: component['lineno'], col_offset:component['col_offset']}
}

// FunctionDef(identifier name, arguments args,
//     stmt* body, expr* decorator_list, expr? returns,
//     string? type_comment)
function FunctionDef_(component:JSON, context:object){
    // csl("Inside FunctionDef")
    // csl(component)
    if(!check_rules("FunctionDef", context['source_chapter']))
        return [{status:"no", msg:"FunctionDef not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]

    let results = []
    //arguments
    const args = component['args']

    const res = evaluate(args, context)
    if (res != null){
        // results.push(res)
        results = results.concat(res)
    }
    //body
    const body = component['body']
    for (const stmt_idx in body){
        const stmt = body[stmt_idx]
        // results.push(evaluate(stmt, context))
        if (stmt!=null)
            results = results.concat(evaluate(stmt, context))
    }

    //returns

    //decorators - syntactic sugar
    
    return results
}

//Return(expr? value)
function Return_(component:JSON, context:object){
    if(!check_rules("Return", context['source_chapter']))
        return [{status:"no", msg:"Return not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    // csl(component)
    const value = component['value']
    const results = []
    if(value != null){
        return results.concat(evaluate(value, context))
    }
    else{
        return []
    }
}

// names are primitive. Should we check structure of name here? Or check only during syntax checking?
function Name_(component:JSON, context:object){
    return {status:'ok', msg:'Name', lineno: component['lineno'], col_offset:component['col_offset']}
}

function Constant_(component:JSON, context:object){
    return {status:'ok', msg:'Constant', lineno: component['lineno'], col_offset:component['col_offset']}
}

function Identifier_(component:JSON, context:object){
    return {status:'ok', msg:'Identifier', lineno: component['lineno'], col_offset:component['col_offset']}
}

//If(expr test, stmt* body, stmt* orelse)
function If_(component:JSON, context:object){
    // csl("Inside If_")
    // csl(component);
    //check rules
    if(!check_rules('If', context['source_chapter'])){
        return {status:'no', msg:'If not allowed.. yet', lineno: component['lineno'], col_offset:component['col_offset']}
    }
    
    //test
    var test = component['test'];
    var result = []
    result = result.concat(evaluate(test, context))

    //body
    var stmts = component['body'] 
    for (idx in stmts){
        var stmt = stmts[idx]
        result = result.concat(evaluate(stmt, context))
    } 

    //orelse
    stmts = component['orelse'] 
    for (idx in stmts){
        var stmt = stmts[idx]
        result = result.concat(evaluate(stmt, context))
    }

    return result;
}


// Call(expr func, expr* args, keyword* keywords)
function Call_(component:JSON, context:object){
    // csl("Inside call")
    if(!check_rules("Call", context['source_chapter']))
        return [{status:"no", msg:"Call not allowed.. yet", "col_offset": component["col_offset"], "lineno": component["lineno"]}]

    let results = []
    //func
    results = results.concat(evaluate(component['func'], context))

    //args
    const args = component['args']
    for (const idx in args){
        const arg = args[idx]
        results = results.concat(evaluate(arg, context))
    }
    
    return results
}

function Add_(component:JSON, context:object){
    // csl("Inside Add_")
    // csl(component);
    //check rules
    if(!check_rules(component['Add'], context['source_chapter'])){
        return {status:'ok', msg:'Add', lineno: component['lineno'], col_offset:component['col_offset']}
    }
    else{
        return {status:'no', msg:'Add not allowed.. yet', lineno: component['lineno'], col_offset:component['col_offset']}
    }
}

function Sub_(component:JSON, context:object){
    // csl("Inside Sub_")
    // csl(component);
    //check rules
    if(!check_rules(component['Sub'], context['source_chapter'])){
        return {status:'ok', msg:'Sub', lineno: component['lineno'], col_offset:component['col_offset']}
    }
    else{
        return {status:'no', msg:'Sub not allowed.. yet', lineno: component['lineno'], col_offset:component['col_offset']}
    }
}

function Mult_(component:JSON, context:object){
    // csl("Inside Mult_")
    // csl(component);
    //check rules
    if(!check_rules(component['Mult'], context['source_chapter'])){
        return {status:'ok', msg:'Mult', lineno: component['lineno'], col_offset:component['col_offset']}
    }
    else{
        return {status:'no', msg:'Mult not allowed.. yet', lineno: component['lineno'], col_offset:component['col_offset']}
    }
}

function Div_(component:JSON, context:object){
    // csl("Inside Div_")
    // csl(component);
    //check rules
    if(!check_rules(component['Div'], context['source_chapter'])){
        return {status:'ok', msg:'Div', lineno: component['lineno'], col_offset:component['col_offset']}
    }
    else{
        return {status:'no', msg:'Div not allowed.. yet', lineno: component['lineno'], col_offset:component['col_offset']}
    }
}



// numbers are primitive, so return true
function Num_(component:JSON, context:object){
    // csl("Inside Num_")
    // csl(component);
    return {status:'ok', msg:'Num', lineno: component['lineno'], col_offset:component['col_offset']}
}

function check_rules( op:any, chapter:any){
    return rules[chapter][op];
}



function not_implement(component:any, context:any){
    console.log("Component not found:" + JSON.stringify(component));
    return []
}

export function parse_python(program: string, context:object) : object {
    const tree : JSON = JSON.parse(program);
    const result: any = evaluate(tree, context);

    // console.log(result)
    // console.log(JSON.stringify(tree, null, 2));
    return postprocess(result);
}

function postprocess(results:any): any{
    return results
    let res = [];

    for (idx in results){
        if(results[idx]!=undefined && results[idx]['status'] == "no"){
            res = res.concat(results[idx])
        }
    }
    
    return res
}


//main
// const data = fs.readFileSync('output.json', 'utf8')
// const results = parse_python(data, {'source_chapter':'0'})

// csl(results)
// debug_print(JSON.stringify(results))