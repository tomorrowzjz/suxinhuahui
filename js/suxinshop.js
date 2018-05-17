window.onload = function () {
    let zhezhao = document.querySelectorAll(".content .piccontent .item .zhezhao");
    let imgs = document.querySelectorAll(".content .piccontent .item img");
    let a = document.querySelectorAll(".content .piccontent .item a");
    imgs.forEach(function (ele,index) {
        a[index].onmouseenter = function () {
            console.log(ele);
            ele.style.transform = "scale(1.1)";
            zhezhao[index].style.display = "block"
        }
    })
    imgs.forEach(function (ele,index) {
        a[index].onmouseleave = function () {
            ele.style.transform = "none";
            zhezhao[index].style.display = "none"
        }
    })
}