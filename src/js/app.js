let cursor = document.querySelector("#Cursor");
window.addEventListener("mousemove",function(e){
    const x =e.clientX;
    const y =e.clientY;
    
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
})

function MenuClic(){
    const list = document.querySelector(".offCanvas__wrap");
    list.style.transform = "translateX(0)";
}
function CanvasToggle(){
    const list = document.querySelector(".offCanvas__wrap");
    list.style.transform = "translateX(100%)";
}
let tgmobile_menu = document.querySelector(".tgmobile__menu");
document.querySelector(".mobile-nav-toggler").addEventListener("click",function(){
    document.querySelector(".tgmobile__menu").style.transform = "translateX(0)";
})

document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".tgmobile__menu").style.transform = "translateX(101%)";
})

document.querySelectorAll(".dropdown-btn").forEach(element => {
    element.addEventListener("click",function(){
        if(element.parentElement.querySelector(".sub-menu").style.display == "block"){
           element.parentElement.querySelector(".sub-menu").style.display = "none";
        }
        else{
        element.parentElement.querySelector(".sub-menu").style.display = "block"
        
        }

    })
});