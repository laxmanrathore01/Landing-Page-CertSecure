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

let navItems = document.querySelector('.nav-items li') 
let teamDiv = document.querySelector('.team-div')
let ideaDiv = document.querySelector('.idea-div')
let contactDiv = document.querySelector('.contact-div')

document.getElementById('1').addEventListener('mouseenter',()=>{
    teamDiv.style.width = '3vw'
    teamDiv.style.transition = 'width 0.1s linear';
})
document.getElementById('1').addEventListener('mouseleave',()=>{
    teamDiv.style.width = '0vw'
    // teamDiv.style.transition = 'width 0.1s linear';
})
document.getElementById('2').addEventListener('mouseenter',()=>{
    ideaDiv.style.width = '2.38vw'
    ideaDiv.style.transition = 'width 0.1s linear';
})
document.getElementById('2').addEventListener('mouseleave',()=>{
    ideaDiv.style.width = '0'
    // ideaDiv.style.transition = 'width 0.1s linear';
})
document.getElementById('3').addEventListener('mouseenter',()=>{
    contactDiv.style.width = '4vw'
    contactDiv.style.transition = 'width 0.1s linear';
})
document.getElementById('3').addEventListener('mouseleave',()=>{
    contactDiv.style.width = '0vw'
})

const worksDiv = document.querySelectorAll('.works li')
let progressDone = document.querySelector('.progress-done')
let progressPercent = 0;
const workNumber = document.querySelector('.work-number h3')
const heroText = document.querySelector('.herotext h1')

function progressCovered(value){
    let maxProgress = 100;
    progressPercent = (value/maxProgress)*100
}

worksDiv[0].addEventListener('click',()=>{
    progressCovered(33)

    workNumber.style.transition = 'none'
    progressDone.style.width = '0' +  "%"
    progressDone.style.transition = '0.5s ease-in-out'
    progressDone.style.width = progressPercent +  "%"
    
    workNumber.style.opacity = '0'
    setTimeout(()=>{
        workNumber.style.transition = '0.5s ease-in-out'
        workNumber.style.opacity = '100'
    },30)
    workNumber.innerHTML = '/01'
    
    worksDiv[1].style = ''
    worksDiv[2].style = ''
    worksDiv[0].style.color = 'white'
    worksDiv[0].style.fontSize = '1.2vw'

    heroText.innerHTML = 'Yash Wardhan'
})
worksDiv[1].addEventListener('click',()=>{
    progressCovered(66)
    
    workNumber.style.transition = 'none'
    progressDone.style.width = progressPercent +  "%"
    progressDone.style.transition = '0.5s ease-in-out'
    workNumber.style.opacity = '0'
    setTimeout(()=>{
        workNumber.style.transition = '0.5s ease-in-out'
        workNumber.style.opacity = '100'
    },30)
    workNumber.innerHTML = '/02'
    worksDiv[0].style = ''
    worksDiv[2].style = ''
    worksDiv[1].style.color = 'white'
    worksDiv[1].style.fontSize = '1.2vw'
    heroText.innerHTML = 'Om Mishra'
})
worksDiv[2].addEventListener('click',()=>{
    progressCovered(100)
    workNumber.style.transition = 'none'
    progressDone.style.transition = '0.5s ease-in-out'
    progressDone.style.width = progressPercent +  "%"
    workNumber.style.opacity = '0'
    setTimeout(()=>{
        workNumber.style.transition = '0.5s ease-in-out'
        workNumber.style.opacity = '100'
    },30)
    workNumber.innerHTML = '/03'
    worksDiv[0].style = ''
    worksDiv[1].style = ''
    worksDiv[2].style.color = 'white'
    worksDiv[2].style.fontSize = '1.2vw'
    heroText.innerHTML = 'SIH'
})


document.getElementById('cards').onmousemove = e =>{
    for (const card of document.getElementsByClassName('card')){
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y=e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)
    }
}
66
var scroll = document.querySelector('.downward-circle')
scroll.addEventListener('click',()=>{
    const container = document.querySelector('.card-container')
    const transition = container.scrollIntoView({behavior: 'smooth', top: 'cardContainer'.offsetTop})   
})
// // Initialize Intersection Observer
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Get the id of the intersecting element
//             const targetId = entry.target.getAttribute('id');
            
//             // Update the selected list item based on the targetId
//             updateSelectedListItem(targetId);
//         }
//     });
// }, { threshold: 0.5 }); // You can adjust the threshold based on your needs

// // Observe each element with the class 'works'
// document.querySelectorAll('.works li').forEach(item => {
//     observer.observe(item);
// });

// // Function to update the selected list item
// function updateSelectedListItem(targetId) {
//     // Reset styles for all list items
//     document.querySelectorAll('.works li').forEach(item => {
//         item.style.color = 'rgb(119, 119, 119)';
//         item.style.fontSize = '0.9vw';
//     });

//     // Update styles for the selected list item
//     const selectedItem = document.getElementById(targetId);
//     if (selectedItem) {
//         selectedItem.style.color = 'white';
//         selectedItem.style.fontSize = '1.2vw';
//     }
// }

// // Add a scroll event listener to handle scrolling
// window.addEventListener('scroll', () => {
//     // Update the selected list item based on the current scroll position
//     const scrollPosition = window.scrollY;

//     // Your logic to determine which list item to select based on the scroll position
//     // For example, you can use the scroll position to determine which section is currently in view
//     // and update the selected list item accordingly.
// });
