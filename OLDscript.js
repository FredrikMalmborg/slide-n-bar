let bgAmount = document.querySelectorAll(".image-slide > div"),
    bgAll = document.querySelector(".image-slide > *"),
    backgroundSlideshow = setInterval(changeBg, 1000)

function countBg() {
    for (let i = 0; i < bgAmount.length; i++) {
        console.log(bgAmount[i].innerText)
    }
}


let index = 0
function changeBg() {
    bgAmount[index].style.opacity = "1"
    bgAmount[index].style.transition = "1s ease-in"
    
    index++
    if (index >= bgAmount.length) {
        for(let i = 1; i < (bgAmount.length); i++ ){
            bgAmount[i].style.opacity = "0"
            console.log(bgAmount[i])
        }
        console.log("reset please")
        index = 0
    }
}
