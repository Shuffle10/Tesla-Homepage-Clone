navElements = document.getElementsByClassName("nav-items")
let responsiveNavElements = [];
for (let elements of Array.from(navElements)){
    responsiveNavElements.push(elements.innerHTML)
}
responsiveNavElements.pop()

function collapseNavbar(screenSize){
    if (screenSize.matches){
        for (let i=0; i<responsiveNavElements.length; i++){
            navElements[i].style.display="none";
        }

        for (let e of responsiveNavElements){
            document.getElementById("sidebar-list").innerHTML += `<li class="sidebar-items">${e}</li>`
        }
    document.getElementById("menuButton").style.background = "rgba(114, 114, 114, 0.2)"
    }

    else{

        for (let i=0; i<responsiveNavElements.length; i++){
            navElements[i].style.display="block";
        }

        for (let e of responsiveNavElements){
            document.getElementById("sidebar-list").innerHTML = document.getElementById("sidebar-list").innerHTML.replace(`<li class="sidebar-items">${e}</li>`, '')
        }

    document.getElementById("menuButton").style.removeProperty('background')

    }
}

let screenSize = window.matchMedia("(max-width: 1400px)")
collapseNavbar(screenSize);
screenSize.addListener(collapseNavbar)


document.getElementById("menuButton").addEventListener('click', ()=>{
    document.getElementsByClassName("sidebar")[0].classList.remove("slideOut");
    document.getElementsByClassName("body")[0].classList.remove("noBlur");
    document.getElementsByClassName("sidebar")[0].style.display = "block"
    document.getElementsByClassName("sidebar")[0].classList.add("slideIn")
    document.getElementsByClassName("body")[0].classList.add("blur");
    
})

document.getElementById("cross").addEventListener('click', ()=>{
    document.getElementsByClassName("body")[0].classList.remove("blur");
    document.getElementsByClassName("sidebar")[0].classList.remove("slideIn");
    document.getElementsByClassName("sidebar")[0].classList.add("slideOut");
    document.getElementsByClassName("body")[0].classList.add("noBlur");   
})





