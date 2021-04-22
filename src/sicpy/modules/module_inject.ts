
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

    // TODO: implement chapter 3, 4...

    return res;
}

function get_chapter_1() : string {
    var chapter_1 = `import math`
    return chapter_1;
}

function get_chapter_2() : string {
    var chapter_2 = ``
    return chapter_2;
}