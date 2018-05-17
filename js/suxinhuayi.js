window.onload = function () {
    let zhezhao = document.querySelectorAll(".content .huayi .item .zhezhao");
    let imgs = document.querySelectorAll(".content .huayi .item img");
    zhezhao.forEach(function (ele,index) {
        ele.onmouseenter = function () {
            imgs[index].style.transform = "scale(1.1)";
        }
    })
    zhezhao.forEach(function (ele,index) {
        ele.onmouseleave = function () {
            imgs[index].style.transform = "none";
        }
    })

}