// Navbar work 

const divBars = document.getElementById('divBars')
const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav_close')

toggleMenu.addEventListener('click', () => {
    divBars.style.display = 'none'
    navMenu.style.right = '0'

})

closeMenu.addEventListener('click', () => {
    navMenu.style.right = "-100%"
    divBars.style.display = 'block'
})


// footer work


// Submit button work 

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('mousemove', function(e){
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = submitBtn.clientWidth
    let boxHeight = submitBtn.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    submitBtn.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})

submitBtn.addEventListener('mouseout', function(){
    submitBtn.style.transform = ``
})


/* time work  */

function displayTime(){
    var dateTime = new Date()
    var hrs = dateTime.getHours()
    var min = dateTime.getMinutes()
    var sec = dateTime.getSeconds()
    var session = document.getElementById('session')

    // if(hrs >= 12){
    //     session.innerHTML = 'PM'
    // }
    // else{
    //     session.innerHTML = 'AM'
    // }

    document.getElementById('hours').innerHTML = hrs
    document.getElementById('minutes').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
}

setInterval(displayTime, 10)