let arrow = document.querySelector('.down-arrow');
let downCircle = document.querySelector('.downward-circle')

document.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
        arrow.style.marginTop = '5vw'
        arrow.style.transition = '1s ease-in-out'
    },1000)
    setInterval(()=>{
        arrow.style.marginTop = '3vw'
        arrow.style.transition = '1s ease-in-out'
    },2000)
})