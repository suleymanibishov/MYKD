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