window.onload = function(){
    /*技能页*/
    daohang();
    jineng();
    function jineng(){
        var p = document.createElement("p");
        var p_text = document.createTextNode("选着技能小图片");
        var jn = document.getElementById("jineng");
        var img = document.createElement("img");
        img.setAttribute("src","img/placeholder.gif");
        img.setAttribute("alt","");
        img.setAttribute("id","j_img");
        p.appendChild(p_text);
        jn.appendChild(p);
        jn.appendChild(img);
        var links = document.getElementsByClassName("link");
        for(var i = 0; i < links.length;i++){
            links[i].index = i;
            links[i].onclick = function(){
                var title = links[this.index].title;
                var href = links[this.index].href;
                p.firstChild.nodeValue = title;
                img.setAttribute("src",href);
                return false;
            }
        }
    }
}