a=document.querySelectorAll('input')
var b=document.querySelector('select')
var c=document.querySelector('p')
a[0].addEventListener("change",()=>{
    c.style.color=a[0].value
})
a[1].addEventListener("change",()=>{
    c.style.fontSize=a[1].value+"px"
})
b.addEventListener("change",()=>{
    c.style.fontFamily=b.value+",Charcoal,sans-serif"
})