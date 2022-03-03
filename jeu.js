function jeu(){
    var a=Math.floor(Math.random()*10)
    m=window.prompt("difficulty (easy/medium/hard)")
    if(m=="easy")
        b=10
    else if (m=="medium")
        b=5
    else b=3
    mg=-1
    while (b!=0 && mg!=a){
        mg=window.prompt("try ")
        b--
    }
    if (b==0)
        window.alert("sorry you lost")
    else
        window.alert("brava")
    m=window.prompt("do you wanna try again ! yes or no ")
    if(m=="yes"){
        var a=Math.floor(Math.random()*10)
        jeu(a)
    }else {
        exit;
    }
}
jeu()