window.onload = function(){
    /*技巧页*/
    daohang();
    var jiqiao = document.getElementById("jiqiao-content");
    var linka = jiqiao.getElementsByTagName("a");
    var insec = document.getElementsByClassName("insec-inner")[0];
    var r = document.getElementsByClassName("r-inner")[0];
    linka[0].onclick = function(){
        insec.style.display = "block";
        r.style.display = "none";
    }
    linka[1].onclick = function(){
        r.style.display = "block";
        insec.style.display = "none";
    }
}