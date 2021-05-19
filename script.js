"use strict";

function toggleClass(element, className) {
    if(element.classList.contains(className)) {
        element.classList.remove(className);
        return false;
    } else {
        element.classList.add(className);
        return true;
    }
}

window.onload = event => {
    const infos = document.getElementsByClassName("info");
    for(let i = 0; i < infos.length; ++ i) {
        const info = infos[i];
        info.onclick = event => {
            const mod = document.getElementsByClassName("mod")[i];
            if(toggleClass(mod, "expanded")) {
                //mod.getElementsByClassName("desc")[0].style.display = "block";
                mod.getElementsByClassName("icon")[0].style.display = "none";
                mod.getElementsByClassName("slideshow")[0].style.display = "block";
                mod.getElementsByClassName("controls")[0].style.display = "block";
                mod.getElementsByClassName("controls")[1].style.display = "block";
                mod.getElementsByClassName("controls")[2].style.display = "block";
            } else {
                //mod.getElementsByClassName("desc")[0].style.display = "none";
                mod.getElementsByClassName("icon")[0].style.display = "block";
                mod.getElementsByClassName("slideshow")[0].style.display = "none";
                mod.getElementsByClassName("controls")[0].style.display = "none";
                mod.getElementsByClassName("controls")[1].style.display = "none";
                mod.getElementsByClassName("controls")[2].style.display = "none";
            }
        }
    }
}