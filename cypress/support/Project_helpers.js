export function file_name() {
    let scripts = document.getElementsByTagName('SCRIPT');
    let path = '';
    if(scripts && scripts.length>0) {
        for(let i in scripts) {
            if(scripts[i].src && scripts[i].src.match(/\/script\.js$/)) {
                path = scripts[i].src.replace(/(.*)\/script\.js$/, '$1');
                break;
            }
        }
    }
    return path
}