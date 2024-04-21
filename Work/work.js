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

// Ivisible Button work 
// Function for invisible button 


function invisibleBtnMoving(oneId,button,size){

    oneId.addEventListener('mousemove', function(e){
        if(size.matches){
            button.style.display = "block"
        }
        else{
            button.style.display = "block"
            let x = e.offsetX
            let y = e.offsetY
            let boxWidth = button.clientWidth
            let boxHeight = button.clientHeight
            let moveX = (x - boxWidth/2)
            let moveY = (y - boxHeight/2)
    
            button.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
        }
        
    })

    
    oneId.addEventListener('mouseout', function(){
        if(size.matches){
            button.style.display = "none"
        }
        else{
            button.style.transform = ``
            button.style.display = "none"
        }
        
    })
}


// indivisibke Div one Work 
const sizeOne = window.matchMedia("(max-width: 769px)")
const invisibleBtnOne = document.getElementById('invisibleBtnOne')
const oneId = document.getElementById('oneId')

// Function call 
invisibleBtnMoving(oneId,invisibleBtnOne,sizeOne)


// indivisibke Div Two Work
const sizeTwo = window.matchMedia("(max-width: 769px)")
const invisibleBtnTwo = document.getElementById('invisibleBtnTwo')
const twoId = document.getElementById('twoId')

// Function call 
invisibleBtnMoving(twoId,invisibleBtnTwo,sizeTwo)


// indivisibke Div Three Work 
const sizeThree = window.matchMedia("(max-width: 769px)")
const invisibleBtnThree = document.getElementById('invisibleBtnThree')
const threeId = document.getElementById('threeId')

// Function call 
invisibleBtnMoving(threeId,invisibleBtnThree,sizeThree)


// indivisibke Div Four Work 
const sizeFour = window.matchMedia("(max-width: 769px)")
const invisibleBtnFour = document.getElementById('invisibleBtnFour')
const fourId = document.getElementById('fourId')

// Function call 
invisibleBtnMoving(fourId,invisibleBtnFour,sizeFour)


// indivisibke Div Five Work 
const sizeFive = window.matchMedia("(max-width: 769px)")
const invisibleBtnFive = document.getElementById('invisibleBtnFive')
const fiveId = document.getElementById('fiveId')

// Function call 
invisibleBtnMoving(fiveId,invisibleBtnFive,sizeFive)


// indivisibke Div Six Work 
const sizeSix = window.matchMedia("(max-width: 769px)")
const invisibleBtnSix = document.getElementById('invisibleBtnSix')
const sixId = document.getElementById('sixId')

// Function call 
invisibleBtnMoving(sixId,invisibleBtnSix,sizeSix)



// Footer work 
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