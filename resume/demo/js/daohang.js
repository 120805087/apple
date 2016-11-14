function daohang(){
    var links = document.getElementsByClassName("links");
    var images = document.getElementsByClassName("images")[0];
    for(var i = 0; i < links.length; i++){
        links[i].index = i;
        links[i].onmouseover = function(){
            var cname = links[this.index].className;
            if(cname.indexOf("active") == -1){
                for(var j = 0; j < links.length; j++){
                    if(links[j].className.indexOf("active") == -1){
                        links[j].className = "links";
                    }
                }
                links[this.index].className = "links act";
            }else{
                for(var k = 0; k < links.length; k++){
                    if(links[k].className.indexOf("active") == -1){
                        links[k].className = "links";
                    }
                }
            }
            images.style.transform = "translate("+(this.index*-150)+"px,0)";
        }
    }
}