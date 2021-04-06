// @ts-nocheck
//globals
const geval = eval
global.check_rules = check_rules
const verbose :Number = 1;
function csl(msg:any){  if(verbose>0){console.log(msg)}}

// Python official ast: https://docs.python.org/3/library/ast.html
const rules = { '0' : 
                    {'Module':true,         'Interactive':false,  'Expression':false,
                    'FunctionType':false, 'FunctionDef':false,  'AsyncFunctionDef':false,
                    'ClassDef':false,       'Return':false,       'Delete':false,       'Assign':false,
                    'AugAssign':false,      'AnnAssign':false,    'For':false,          'AsyncFor':false,
                    'While':false,          'If':false,           'With':false,         'AsyncWith':false,
                    'Raise':false,          'Try':false,          'Assert':false,       'Import':false,
                    'ImportFrom':false,     'Global':false,       'Nonlocal':false,     'Expr':true,
                    'Pass':false,           'Break':false,        'Continue':false,     'BoolOp':true,
                    'NamedExpr':false,      'BinOp':true,        'UnaryOp':true,      'Lambda':false,
                    'IfExp':false,          'Dict':false,         'Set':false,          'ListComp':false,
                    'SetComp':false,        'DictComp':false,     'GeneratorExp':false, 'Await':false,
                    'Yield':false,          'YieldFrom':false,    'Compare':true,      'Call':false,
                    'FormattedValue':false, 'JoinedStr':false,    'Constant':true,     'Attribute':false,
                    'Subscript':false,      'Starred':false,      'Name':false,         'List':false,
                    'Tuple':false,          'Slice':false,        'attributes':false,   'Load':false,
                    'Store':false,          'Del':false,          'And':true,          'Or':true,
                    'Add':true,            'Sub':true,          'Mult':true,         'MatMult':false,
                    'Div':true,            'Mod':false,          'Pow':false,          'LShift':false,
                    'RShift':false,         'BitOr':false,        'BitXor':false,       'BitAnd':false,
                    'FloorDiv':false,       'Invert':false,       'Not':true,          'UAdd':true,
                    'USub':true,           'Eq':true,           'NotEq':true,        'Lt':true,
                    'LtE':true,             'Gt':true,           'GtE':true,          'Is':false,
                    'IsNot':false,          'In':false,           'NotIn':false}, 
                '1' : 
                    {'Module':true,         'Interactive':false,  'Expression':false,
                    'FunctionType':false, 'FunctionDef':true,  'AsyncFunctionDef':false,
                    'ClassDef':false,       'Return':true,       'Delete':false,       'Assign':true,
                    'AugAssign':false,      'AnnAssign':false,    'For':false,          'AsyncFor':false,
                    'While':false,          'If':true,           'With':false,         'AsyncWith':false,
                    'Raise':false,          'Try':false,          'Assert':false,       'Import':true,
                    'ImportFrom':true,     'Global':false,       'Nonlocal':false,     'Expr':true,
                    'Pass':false,           'Break':false,        'Continue':false,     'BoolOp':true,
                    'NamedExpr':false,      'BinOp':true,        'UnaryOp':true,      'Lambda':true,
                    'IfExp':true,          'Dict':false,         'Set':false,          'ListComp':false,
                    'SetComp':false,        'DictComp':false,     'GeneratorExp':false, 'Await':false,
                    'Yield':false,          'YieldFrom':false,    'Compare':true,      'Call':true,
                    'FormattedValue':false, 'JoinedStr':false,    'Constant':true,     'Attribute':false,
                    'Subscript':false,      'Starred':false,      'Name':true,         'List':false,
                    'Tuple':false,          'Slice':false,        'attributes':false,   'Load':true,
                    'Store':true,          'Del':true,          'And':true,          'Or':true,
                    'Add':true,            'Sub':true,          'Mult':true,         'MatMult':false,
                    'Div':true,            'Mod':true,          'Pow':false,          'LShift':false,
                    'RShift':false,         'BitOr':false,        'BitXor':false,       'BitAnd':false,
                    'FloorDiv':false,       'Invert':false,       'Not':true,          'UAdd':true,
                    'USub':true,           'Eq':true,           'NotEq':true,        'Lt':true,
                    'LtE':true,            'Gt':true,           'GtE':true,          'Is':false,
                    'IsNot':false,          'In':false,           'NotIn':false},  
                '2' : 
                {'Module':true,         'Interactive':false,  'Expression':false,
                'FunctionType':false, 'FunctionDef':true,  'AsyncFunctionDef':false,
                'ClassDef':false,       'Return':true,       'Delete':false,       'Assign':true,
                'AugAssign':false,      'AnnAssign':false,    'For':false,          'AsyncFor':false,
                'While':false,          'If':true,           'With':false,         'AsyncWith':false,
                'Raise':false,          'Try':false,          'Assert':false,       'Import':true,
                'ImportFrom':true,     'Global':false,       'Nonlocal':false,     'Expr':true,
                'Pass':false,           'Break':false,        'Continue':false,     'BoolOp':true,
                'NamedExpr':false,      'BinOp':true,        'UnaryOp':true,      'Lambda':true,
                'IfExp':true,          'Dict':false,         'Set':false,          'ListComp':false,
                'SetComp':false,        'DictComp':false,     'GeneratorExp':false, 'Await':false,
                'Yield':false,          'YieldFrom':false,    'Compare':true,      'Call':true,
                'FormattedValue':false, 'JoinedStr':false,    'Constant':true,     'Attribute':false,
                'Subscript':true,      'Starred':false,      'Name':true,         'List':true,
                'Tuple':false,          'Slice':true,        'attributes':false,   'Load':true,
                'Store':true,          'Del':true,          'And':true,          'Or':true,
                'Add':true,            'Sub':true,          'Mult':true,         'MatMult':false,
                'Div':true,            'Mod':true,          'Pow':false,          'LShift':false,
                'RShift':false,         'BitOr':false,        'BitXor':false,       'BitAnd':false,
                'FloorDiv':false,       'Invert':false,       'Not':true,          'UAdd':true,
                'USub':true,           'Eq':true,           'NotEq':true,        'Lt':true,
                'LtE':true,            'Gt':true,           'GtE':true,          'Is':false,
                'IsNot':false,          'In':true,           'NotIn':true}, 
                '3' : 
                {'Module':true,         'Interactive':false,  'Expression':false,
                'FunctionType':false, 'FunctionDef':true,  'AsyncFunctionDef':false,
                'ClassDef':false,       'Return':true,       'Delete':false,       'Assign':true,
                'AugAssign':false,      'AnnAssign':false,    'For':true,          'AsyncFor':false,
                'While':true,          'If':true,           'With':false,         'AsyncWith':false,
                'Raise':false,          'Try':false,          'Assert':false,       'Import':true,
                'ImportFrom':true,     'Global':false,       'Nonlocal':false,     'Expr':true,
                'Pass':false,           'Break':true,        'Continue':true,     'BoolOp':true,
                'NamedExpr':false,      'BinOp':true,        'UnaryOp':true,      'Lambda':true,
                'IfExp':true,          'Dict':false,         'Set':false,          'ListComp':true,
                'SetComp':false,        'DictComp':false,     'GeneratorExp':false, 'Await':false,
                'Yield':false,          'YieldFrom':false,    'Compare':true,      'Call':true,
                'FormattedValue':false, 'JoinedStr':false,    'Constant':true,     'Attribute':false,
                'Subscript':true,      'Starred':false,      'Name':true,         'List':true,
                'Tuple':false,          'Slice':true,        'attributes':false,   'Load':true,
                'Store':true,          'Del':true,          'And':true,          'Or':true,
                'Add':true,            'Sub':true,          'Mult':true,         'MatMult':false,
                'Div':true,            'Mod':true,          'Pow':false,          'LShift':false,
                'RShift':false,         'BitOr':false,        'BitXor':false,       'BitAnd':false,
                'FloorDiv':false,       'Invert':false,       'Not':true,          'UAdd':true,
                'USub':true,           'Eq':true,           'NotEq':true,        'Lt':true,
                'LtE':true,            'Gt':true,           'GtE':true,          'Is':false,
                'IsNot':false,          'In':true,           'NotIn':true},
                '4' : 
                {'Module':true,         'Interactive':false,  'Expression':false,
                'FunctionType':false, 'FunctionDef':true,  'AsyncFunctionDef':false,
                'ClassDef':false,       'Return':true,       'Delete':false,       'Assign':true,
                'AugAssign':false,      'AnnAssign':false,    'For':true,          'AsyncFor':false,
                'While':true,          'If':true,           'With':false,         'AsyncWith':false,
                'Raise':true,          'Try':true,          'Assert':true,       'Import':true,
                'ImportFrom':true,     'Global':false,       'Nonlocal':false,     'Expr':true,
                'Pass':true,           'Break':true,        'Continue':true,     'BoolOp':true,
                'NamedExpr':false,      'BinOp':true,        'UnaryOp':true,      'Lambda':true,
                'IfExp':true,          'Dict':true,         'Set':false,          'ListComp':true,
                'SetComp':false,        'DictComp':true,     'GeneratorExp':false, 'Await':false,
                'Yield':false,          'YieldFrom':false,    'Compare':true,      'Call':true,
                'FormattedValue':false, 'JoinedStr':false,    'Constant':true,     'Attribute':false,
                'Subscript':true,      'Starred':false,      'Name':true,         'List':true,
                'Tuple':false,          'Slice':true,        'attributes':false,   'Load':true,
                'Store':true,          'Del':true,          'And':true,          'Or':true,
                'Add':true,            'Sub':true,          'Mult':true,         'MatMult':false,
                'Div':true,            'Mod':true,          'Pow':false,          'LShift':false,
                'RShift':false,         'BitOr':false,        'BitXor':false,       'BitAnd':false,
                'FloorDiv':false,       'Invert':false,       'Not':true,          'UAdd':true,
                'USub':true,           'Eq':true,           'NotEq':true,        'Lt':true,
                'LtE':true,            'Gt':true,           'GtE':true,          'Is':false,
                'IsNot':false,          'In':true,           'NotIn':true} }

                    
         
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
const primitives = ['Num', 'String', 'Constant', 'arguments', 'arg', 'comprehension', 'ExceptHandler', 'keyword', 'alias', 'withitem', 'type_ignore']


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
            is_ExceptHandler(component)?ExceptHandler_(component, context):
            is_keyword(component)?keyword_(component, context):
            is_alias(component)?alias_(component, context):
            is_withitem(component)?withitem_(component, context):
            is_type_ignore(component)?type_ignore_(component, context):
            not_implement(component, context);
}


//Raise(expr? exc, expr? cause)
function Raise_(component, context){
    // console.log("In Raise_")
    if(!check_rules("Raise", context['source_chapter']))
        return [{status:"no", msg:"Raise not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]

    //exc
    var exc = component['exc']
    if(exc!=null)
        results = results.concat(evaluate(exc, context))

    //cause
    var cause = component['cause']
    if(cause!=null)
        results = results.concat(evaluate(cause, context))

    return results
}


//Assert(expr test, expr? msg)
function Assert_(component, context){
    
    // console.log("In Assert_" + context)
    if(!check_rules("Assert", context['source_chapter']))
        return [{status:"no", msg:"Assert not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]

    //test
    var test = component['test']
    if(test!=null)
        results = results.concat(evaluate(test, context))

    //msg
    var msg = component['msg']
    if(msg!=null)
        results = results.concat(evaluate(msg, context))

    return results
}

//Import(alias* names)
//primitive datatype

//ImportFrom(identifier? module, alias* names, int? level)
function ImportFrom_(component, context){
    // console.log("In ImportFrom_")
    if(!check_rules("ImportFrom", context['source_chapter']))
        return [{status:"no", msg:"ImportFrom not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]
    
    //names
    var names = component['names']
    for(idx in names){
        var alias = names[idx]
        results = results.concat(evaluate(alias, context))
    }

    //module
    var module = component['module']
    if(module!=null)
        results = results.concat(evaluate(module, context))

    //level
    var level = component['level']
    if(level!=null)
        results = results.concat(evaluate(level, context))

    return results
}

//Lambda(arguments args, expr body)
function Lambda_(component, context){
    // console.log("In Lambda_")
    if(!check_rules("Lambda", context['source_chapter']))
        return [{status:"no", msg:"Lambda not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]

    //args
    var args = component['args']
    results = results.concat(evaluate(args, context))

    //body
    var body = component['body']
    results = results.concat(evaluate(body, context))

    return results
}

//comprehension = (expr target, expr iter, expr* ifs, int is_async)
function comprehension_(component, context){
    // console.log("In comprehension_")
    if(!check_rules("comprehension", context['source_chapter']))
        return [{status:"no", msg:"comprehension not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]
    
    //ifs
    var ifs = component['ifs']
    for(idx in ifs){
        var expr_ = ifs[idx]
        results = results.concat(evaluate(expr_, context))
    }

    //target
    var target = component['target']
    results = results.concat(evaluate(target, context))

    //iter
    var iter = component['iter']
    results = results.concat(evaluate(iter, context))

    return results
}


//DictComp(expr key, expr value, comprehension* generators)
function DictComp_(component, context){
    // console.log("In DictComp_")
    if(!check_rules("DictComp", context['source_chapter']))
        return [{status:"no", msg:"DictComp not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]
    
    //generators
    var generators = component['generators']
    for(idx in generators){
        var comprehension = generators[idx]
        results = results.concat(evaluate(comprehension, context))
    }

    //key
    var key = component['key']
    results = results.concat(evaluate(key, context))

    //value
    var value = component['value']
    results = results.concat(evaluate(value, context))

    return results
}

//Subscript(expr value, expr slice, expr_context ctx)
function Subscript_(component, context){
    // console.log("In Subscript_")
    if(!check_rules("Subscript", context['source_chapter']))
        return [{status:"no", msg:"Subscript not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]


    //value
    var value = component['value']
    results = results.concat(evaluate(value, context))

    //ctx
    var expr_context = component['ctx']
    results = results.concat(evaluate(expr_context, context))

    return results
}

//List(expr* elts, expr_context ctx)
function List_(component, context){
    // console.log("In List_")
    if(!check_rules("List", context['source_chapter']))
        return [{status:"no", msg:"List not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]
    
    //elts
    var elts = component['elts']
    for(idx in elts){
        var elt = elts[idx]
        results = results.concat(evaluate(elt, context))
    }

    //ctx
    var expr_context = component['ctx']
    results = results.concat(evaluate(expr_context, context))
    return results
}


//Slice(expr? lower, expr? upper, expr? step)
function Slice_(component, context){
    // console.log("In Slice_")
    if(!check_rules("Slice", context['source_chapter']))
        return [{status:"no", msg:"Slice not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]
    
    //lower
    var lower = component['lower']
    if(lower != null)
        results = results.concat(evaluate(lower, context))
    
    //upper
    var upper = component['upper']
    if(upper != null)
        results = results.concat(evaluate(upper, context))

    //step
    var step = component['step']
    if(step != null)
        results = results.concat(evaluate(step, context))

    return results
}

//While(expr test, stmt* body, stmt* orelse)
function While_(component, context){
    // console.log("In While_")
    if(!check_rules("While", context['source_chapter']))
        return [{status:"no", msg:"While not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]
    
    //test
    var test = component['test']
    if(test != null)
        results = results.concat(evaluate(test, context))
    
    //body
    var statements = component['body']
    for(idx in statements){
        var stmt = statements[idx]
        results = results.concat(evaluate(stmt, context))
    }

    //orelse
    var statements = component['orelse']
    for(idx in statements){
        var stmt = statements[idx]
        results = results.concat(evaluate(stmt, context))
    }
    return results
}


//For(expr target, expr iter, stmt* body, stmt* orelse, string? type_comment)
function For_(component, context){
    if(!check_rules("For", context['source_chapter']))
        return [{status:"no", msg:"For not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    // console.log("In For_")
    var results=[]

    //target
    var target = component['target']
    if(target != null)
        results = results.concat(evaluate(target, context))
    //iter
    var iter = component['iter']
    if(iter != null)
        results = results.concat(evaluate(iter, context))

    //body
    var statements = component['body']
    for(idx in statements){
        var stmt = statements[idx]
        results = results.concat(evaluate(stmt, context))
    }

    //orelse
    var statements = component['orelse']
    for(idx in statements){
        var stmt = statements[idx]
        results = results.concat(evaluate(stmt, context))
    }
    return results
}

// Dict_(expr* keys, expr* values)
function Dict_(component:JSON, context:object) {
    if(!check_rules("Dict", context['source_chapter']))
        return [{status:"no", msg:"Dict not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]
    //keys
    var keys = component['keys']
    for(idx in keys){
        var key = keys[idx]
        results = results.concat(key, context)
    }
    //values
    var values = component['values']
    for(idx in values){
        var value = values[idx]
        results = results.concat(value, context)
    }
    return results
}
    



//ExceptHandler(expr? type, identifier? name, stmt* body)
//                  attributes (int lineno, int col_offset, int? end_lineno, int? end_col_offset)
function ExceptHandler_(component, context){
    if(!check_rules("ExceptHandler", context['source_chapter']))
        return [{status:"no", msg:"ExceptHandler not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]

    // console.log("In ExceptHandler_")
    var results=[]

    var type = component['type']
    if(type != null)
        results = results.concat(evaluate(type, context))
    
    var statements = component['body']
    for(idx in statements){
        var stmt = statements[idx]
        results = results.concat(evaluate(stmt, context))
    }

    return results
}





//Try(stmt* body, excepthandler* handlers, stmt* orelse, stmt* finalbody)
function Try_(component:JSON, context:object){
    if(!check_rules("Try", context['source_chapter']))
        return [{status:"no", msg:"Try not allowed.. yet", "col_offset": component['col_offset'], "lineno": component['lineno']}]
    var results=[]
    
    //body
    var statements = component['body']
    for(idx in statements){
        var stmt = statements[idx]
        results = results.concat(evaluate(stmt, context))
    }
    //handlers
    var handlers = component['handlers']
    results = results.concat(evaluate(handlers, context))
    
    for(idx in statements){
        var stmt = statements[idx]
        results = results.concat(evaluate(stmt, context))
    }

    var statements = component['orelse']
    for(idx in statements){
        var stmt = statements[idx]
        results = results.concat(evaluate(stm, context))
    }

    var statements = component['finalbody']
    for(idx in statements){
        var stmt = statements[idx]
        results = results.concat(stmt, context)
    }    

    return results

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
    const test = component['test'];
    let result = []
    result = result.concat(evaluate(test, context))

    //body
    let stmts = component['body'] 
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