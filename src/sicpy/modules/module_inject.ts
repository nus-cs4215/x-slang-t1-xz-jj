
export function inject_modules(context: object): string {
    var chapter = context['source_chapter'];
    var res = "";
    if(chapter >= 0) {
        // NOTHING
    }

    if(chapter >= 1) {
        res += get_chapter_1() + "\n"
    }

    if(chapter >= 2) {
        res += get_chapter_2() + "\n"
    }

    if (chapter >= 3) {
        res += get_chapter_3() + "\n"
    }

    // TODO: implement chapter 3, 4...

    return res;
}


function get_chapter_1() : string {
    var chapter_1 = `
import math, time

def error(v,s):
    print(v)
    raise ValueError(s)

def get_time():
    return time.time()

def char_at(s, i):
    if(type(s) is not str):
        raise ValueError('Expecting argument 1 as string in function char_at')
    return s[i]

def parse_int(s, i):
    return int(s, base=i)
`
    return chapter_1;
}

function get_chapter_2() : string {
    
    var chapter_2 = `
import json
def pair(head, tail):
    return [head, tail]

def tail(p):
    if type(p) is not list:
        raise ValueError('Expecting list as parameter 1 in function tail')
    return p[1]

def head(p):
    if type(p) is not list:
        raise ValueError('Expecting list as parameter 1 in function head')
    return p[0]

def is_pair(p):
    return (type(p) is list) and len(p)==2

def is_list(p):
    return (type(p) is list)

def is_boolean(p):
    return (type(p) is bool)
    
def is_function(p):
    return callable(p)

def is_number(p):
    return (type(p) is int) or (type(p) is float)

def is_None(p):
    return p == None

def append(p,q):
    if is_list(p) and is_list(q):
        return p + q
    else:
        raise ValueError('Expecting list as parameters function append')

def stringify(p):
    if type(p) is dict:
        return json.dumps(p)
    elif type(p) is list:
        return str(p)
    else:
        raise ValueError('Expecting dict or list in parameter 1 of function stringify')

# implementation referenced from x-slang list.js
def length(xs):
    def iter(ys, acc):
        if is_None(ys):
            return acc
        else: 
            return iter(tail(ys), acc + 1)
    return iter(xs, 0)

# implementation referenced from x-slang list.js
def slist(*elements):
    theList = None
    l = len(elements)
    for i in range(l,0,-1): 
        print(i)
        theList = pair(elements[i-1], theList)
    return theList
`

    return  chapter_2;
}

function get_chapter_3() : string {
    var chapter_3 = `
def set_tail(xs, x):
    if is_pair(xs): 
        xs[1] = x
        return None
    else:
        raise ValueError('Expecting pair as argument 1 in function set_tail') 

def set_head(xs, x):
    if is_pair(xs): 
        xs[0] = x
        return None
    else:
        raise ValueError('Expecting pair as argument 1 in function set_head')
`
    return chapter_3;
}