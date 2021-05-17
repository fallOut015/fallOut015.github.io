"use strict";

function toggleClass(element, className) {
    if(element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

window.onload = event => {
    const infos = document.getElementsByClassName("info");
    for(let i = 0; i < infos.length; ++ i) {
        const info = infos[i];
        info.onclick = event => {
            const mod = document.getElementsByClassName("mod")[i];
            toggleClass(mod, "expanded");
        }
    }
}