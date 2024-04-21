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

// Moving function 

function moving(button){
    button.addEventListener('mousemove', function(e){
        let x = e.offsetX
        let y = e.offsetY
        let boxWidth = button.clientWidth
        let boxHeight = button.clientHeight
        let moveX = (x - boxWidth/2)
        let moveY = (y - boxHeight/2)
    
        button.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
    })
    
    button.addEventListener('mouseout', function(){
        button.style.transform = ``
    })
}

// fotter button 

const getInTouch = document.getElementById('getInTouch')

// Function call 
moving(getInTouch)


// Contact Box div 
// Email 

const email = document.getElementById('email')
const emailh = document.getElementById('emailh')

// Function call 
moving(email)
moving(emailh)


// Number 

const number = document.getElementById('number')
const numberh = document.getElementById('numberh')

// Function call 
moving(number)
moving(numberh)


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
