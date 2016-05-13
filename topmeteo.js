var dg = "°";
var list, index, element, filename;
var template = "<img title=\'@ALT@\' src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAADFBMVEUAAAAAAABLS0v///8z/l1PAAAAAnRSTlMAAQGU/a4AAAAnSURBVHgBYwABJiYQSYDJCKRgokxgCoGhCCQDBBAWI5gNpKAmgBgADj8ATZcxOmoAAAAASUVORK5CYII=\" style='transform: rotate(@X@deg)'/>";

list = document.getElementsByClassName('pvtv');

for (index = 0; index < list.length; index++) {
    element = list[index].firstChild.firstChild;

    if (element.innerHTML != null && element.innerHTML.indexOf(dg) !== -1 && element.innerHTML.indexOf("C") == -1) {
        var idx = element.innerHTML.indexOf(dg);
        var degrees = element.innerHTML.substring(0, idx);

        element.innerHTML = element.innerHTML.replace(degrees + dg, template.replace("@X@", degrees).replace("@ALT@", degrees + dg));
    }
}

