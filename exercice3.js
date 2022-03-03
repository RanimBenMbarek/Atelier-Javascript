var b=document.querySelector("button")
var c=document.getElementById("p");
b.addEventListener("click",()=>{
    var newnod=document.createElement("button")
    newnod.style.width=120
    newnod.innerHTML+= '<i className="bi bi-trash3"></i>'
    var n=document.createElement("div")
    c.appendChild(newnod)
    var text1 = document.getElementById("Name").value ;
    var text2 = document.getElementById("Content").value;
    if(text1==""||text2=="")
        alert("name and content are required")
    else
    newnod.innerText=text1 + " :" + text2
})
c.addEventListener("click",(a)=>{
    a.target.parentNode.removeChild(a.target)
})