function menu(){
    m = document.getElementById("menu");
    ma = document.getElementById("main");
    if(m.style.display == "none"){
        m.style.display = "block";
        ma.style.opacity = "0.2";
    }else{
        ma.style.opacity = "1";
        m.style.display = "none";
    }
}


