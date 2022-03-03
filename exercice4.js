function alea(a) {
    var b = Math.floor(256*Math.random());
    var c = Math.floor(256*Math.random());
    var d = Math.floor(256*Math.random());
    a.style.color = "rgba(" + b+ "," + c + "," + d + ",1)";
}
var a = document.querySelectorAll("li")
a[0].addEventListener("click",()=>{
    alea(a[0])
})
a[1].addEventListener("click",()=>{
    alea(a[1])
})
a[2].addEventListener("click",()=>{
    alea(a[2])
})
a[3].addEventListener("click",()=>{
    alea(a[3])
})