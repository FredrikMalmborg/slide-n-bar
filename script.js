let bgArr = document.querySelectorAll(".image-slide > div")

//setInterval(flipThrough, 3000)

let i = 0
function flipThrough() {
    bgArr[0].style.opacity = "1"
    bgArr[1].style.opacity = "0"
    bgArr[2].style.opacity = "0"
    bgArr[3].style.opacity = "0"
    if(i === 0){
        bgArr[i].style.opacity = "1"
        bgArr[i].style.transition = "1s ease"
        i++
    }else {
        bgArr[i].style.opacity = "1"
        bgArr[i-1].style.opacity = "0"
        bgArr[i].style.transition = "1s ease"
        i++
        if (i === 4) {
            i = 0
        }
    }
}
flipThrough()


