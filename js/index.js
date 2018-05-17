window.onload = function () {
    let imgs = document.querySelectorAll(".banner img");
    let iconfont = document.querySelector(".mnav .iconfont");
    let navlist = document.querySelector(".nav-min .navlist");
    let btnleft = document.querySelector(".banner .btnleft");
    let banner = document.querySelector(".banner");
    let btnright = document.querySelector(".banner .btnright");
    // text-shadow: 0 1px 2px rgba(0,0,0,.6);
    let navFlag = true;
    let current = 0,next = 0;
    let width = parseInt(getComputedStyle(imgs[0], null).width);
    let t = setInterval(move,4000);
    function move() {
        next++;
        if (next === imgs.length) {
            next = 0;
        }

        imgs[next].style.left = width+'px';
        animate(imgs[current],{left:-width});
        animate(imgs[next],{left:0});
        current = next;
    }
    iconfont.onclick = function () {
        console.log(1);
        if (navFlag) {
            iconfont.classList.remove("icon-gengduo");
            iconfont.classList.add("icon-guanbi");
            navlist.style.display = "block";
            navFlag = false;
        }else {
            iconfont.classList.remove("icon-guanbi");
            iconfont.classList.add("icon-gengduo");
            navlist.style.display = "none";
            navFlag = true;
        }

    }
    btnleft.onmouseenter = function () {

    }
    banner.onmouseenter = function () {
        clearInterval(t)
    }
    banner.onmouseleave = function () {
        t = setInterval(move,4000);
    }
    /*----------------------------------*/
    let sxhhimgs = document.querySelector(".content .main .bottom .imgs");
    let items = document.querySelectorAll(" .content .main .bottom .imgs .owl-item")[0];
    let lw= items.offsetWidth;
    //console.log(lw);
    // let current= 0,next=0;
    //console.log(animal);
    let ts = setInterval(change,2000);
    let flag1=true;
    function change(){
        if(flag1){
            flag1=false;
            animate(sxhhimgs,{left:-lw},1000,function(){
                sxhhimgs.appendChild(sxhhimgs.firstElementChild);
                sxhhimgs.style.left=0;
                flag1=true;
            })
        }

    }

}