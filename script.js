// header work on a navbar 

const navbar = document.querySelectorAll('.navbar li')

document.addEventListener('mousemove', handleMouse)

function handleMouse(event){

    navbar.forEach(item => {
        var movingValue = item.getAttribute('data-value')
        const mouseX = (event.clintX * movingValue) / 250
        const mouseY = (event.clintY * movingValue) /250
        // item.Style.transform = `translate (${mouseX}px, ${mouseY}px)`

        item.style.transform = "translateX("+ mouseX +"px) translateY("+ mouseY +"px)"
    })
}

const divBars = document.getElementById('divBars')

divBars.addEventListener('mousemove', function(e){
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = divBars.clientWidth
    let boxHeight = divBars.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    divBars.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})

divBars.addEventListener('mouseout', function(){
    divBars.style.transform = ``
})


// About button work 

const aboutBtn = document.getElementById('aboutBtn')

aboutBtn.addEventListener('mousemove', function(e){
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = aboutBtn.clientWidth
    let boxHeight = aboutBtn.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    aboutBtn.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})

aboutBtn.addEventListener('mouseout', function(){
    aboutBtn.style.transform = ``
})


// Project work button 

const projectBtn = document.getElementById('projectBTN')

projectBtn.addEventListener('mousemove', function(e){
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = projectBtn.clientWidth
    let boxHeight = projectBtn.clientHeight
    let moveX = (x - boxWidth / 2)
    let moveY = (y - boxHeight / 2)

    projectBtn.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})

projectBtn.addEventListener('mouseout', function(){
    projectBtn.style.transform = `translateX(${0}px) translateY(${0}px)`
})


// Project div work 

// div one work 

const oneSection = document.getElementById('oneSection')
const projectDivId = document.getElementById('projectDivId')
// project div content 
const projectConH1 = document.querySelector('.project_content')
const projectConH4 = document.querySelector('.project_contentH4')
// get invisible div 
const invisible = document.getElementById("invisibleOneId")
// Get invidible id 
const invisibleId = document.getElementById('invisibleId')
const oneAchr = document.getElementById('oneAchr')


projectDivId.addEventListener('mousemove', (e) => {
    invisible.style.display = "block"
    projectConH1.style.color = "#c8b7b7"
    projectConH4.style.color = "#c8b7b7"
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = invisible.clientWidth
    let boxHeight = invisible.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)
    
    invisible.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})


projectDivId.addEventListener('mouseout', function(e){
    invisible.style.transform = `translateX(${0}px) translateY(${0}px)`
    projectConH1.style.color = "#181717"
    projectConH4.style.color = "#181717"
    invisible.style.display = "none"
})



// invisible div button 
        
invisibleId.addEventListener('mousemove', (e) => {
    invisible.style.display = "block"
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = invisibleId.clientWidth
    let boxHeight = invisibleId.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)
    
    invisibleId.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
           
})

invisibleId.addEventListener('mouseout', function(e){
    invisibleId.style.transform = `translateX(${0}px) translateY(${0}px)`
    // invisible.style.display = "block"
})

// div two work 

const projectDivTwo = document.getElementById('projectDivTwo')
const invisibleTwo = document.getElementById('invisibleTwoId')
const invisiblebtnTwoId = document.getElementById('invisiblebtnTwoId')
const projectConH1Two = document.getElementById('project_contentTwo')
const projectConH4Two = document.getElementById('project_contentH4Two')



projectDivTwo.addEventListener('mousemove', (e) => {
    invisibleTwo.style.display = "block"
    
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = invisibleTwo.clientWidth
    let boxHeight = invisibleTwo.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    invisibleTwo.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
    projectConH1Two.style.color = "#c8b7b7"
    projectConH4Two.style.color = "#c8b7b7"
})

projectDivTwo.addEventListener('mouseout', function(e){
    invisibleTwo.style.transform = `translateX(${0}px) translateY(${0}px)`
    invisibleTwo.style.display = "none"
    projectConH1Two.style.color = "#181718"
    projectConH4Two.style.color = "#181718"
})

// button div work 

const invisibleIdTwo = document.getElementById('invisiblebtnTwoId')

invisibleIdTwo.addEventListener('mousemove', (e) => {
    invisibleTwo.style.display = "block"
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = invisibleIdTwo.clientWidth
    let boxHeight = invisibleIdTwo.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    invisibleIdTwo.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})

invisibleIdTwo.addEventListener('mouseout', function(e){
    invisibleIdTwo.style.transform = `translateX(${0}px) translateY(${0}px)`
    // invisibleTwo.style.display = "none"
})


// div three work 

const projectDivThree = document.getElementById('projectDivThree')
const invisibleThree = document.getElementById('invisibleThreeId')
const invisiblebtnThreeId = document.getElementById('invisiblebtnThreeId')
const projectConH1Three = document.getElementById('project_contentThree')
const projectConH4Three = document.getElementById('project_contentH4Three')


projectDivThree.addEventListener('mousemove', (e) => {
    invisibleThree.style.display = "block"
    
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = invisibleThree.clientWidth
    let boxHeight = invisibleThree.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    invisibleThree.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
    projectConH1Three.style.color = "#c8b7b7"
    projectConH4Three.style.color = "#c8b7b7"
})

projectDivThree.addEventListener('mouseout', function(e){
    invisibleThree.style.transform = `translateX(${0}px) translateY(${0}px)`
    invisibleThree.style.display = "none"
    projectConH1Three.style.color = "#181718"
    projectConH4Three.style.color = "#181718"
})


// button div work 

const invisibleIdThree = document.getElementById('invisiblebtnThreeId')

invisibleIdThree.addEventListener('mousemove', (e) => {
    invisibleThree.style.display = "block"
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = invisibleIdThree.clientWidth
    let boxHeight = invisibleIdThree.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    invisibleIdThree.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})

invisibleIdThree.addEventListener('mouseout', function(e){
    invisibleIdThree.style.transform = `translateX(${0}px) translateY(${0}px)`
    // invisibleThree.style.display = "none"
})


// div Four work 

const projectDivFour = document.getElementById('projectDivFour')
const invisibleFour = document.getElementById('invisibleFourId')
const projectConH1Four = document.getElementById('project_contentFour')
const projectConH4Four = document.getElementById('project_contentH4Four')


projectDivFour.addEventListener('mousemove', (e) => {
    invisibleFour.style.display = "block"
    
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = invisibleFour.clientWidth
    let boxHeight = invisibleFour.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    invisibleFour.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
    projectConH1Four.style.color = "#c8b7b7"
    projectConH4Four.style.color = "#c8b7b7"
})

projectDivFour.addEventListener('mouseout', function(e){
    invisibleFour.style.transform = `translateX(${0}px) translateY(${0}px)`
    invisibleFour.style.display = "none"
    projectConH1Four.style.color = "#181718"
    projectConH4Four.style.color = "#181718"
})


// button div work 

const invisiblebtnFourId = document.getElementById('invisiblebtnFourId')

invisiblebtnFourId.addEventListener('mousemove', (e) => {
    invisibleFour.style.display = "block"
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = invisiblebtnFourId.clientWidth
    let boxHeight = invisiblebtnFourId.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    invisiblebtnFourId.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})

invisiblebtnFourId.addEventListener('mouseout', function(e){
    invisiblebtnFourId.style.transform = `translateX(${0}px) translateY(${0}px)`
    invisibleFour.style.display = "none"
})


// fotter button 

const getInTouch = document.getElementById('getInTouch')

getInTouch.addEventListener('mousemove', function(e){
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = getInTouch.clientWidth
    let boxHeight = getInTouch.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    getInTouch.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})

getInTouch.addEventListener('mouseout', function(){
    getInTouch.style.transform = ``
})



// contact box work 

const email = document.getElementById('email')
const emailh = document.getElementById('emailh')


email.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = email.clientWidth
    let boxHeight = email.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    email.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
    emailh.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})

email.addEventListener('mouseout', function(e){
    email.style.transform = `translateX(${0}px) translateY(${0}px)`
    emailh.style.transform = `translateX(${0}px) translateY(${0}px)`
})



const number = document.getElementById('number')
const numberh = document.getElementById('numberh')

number.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let boxWidth = number.clientWidth
    let boxHeight = number.clientHeight
    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    number.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
    numberh.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})

number.addEventListener('mouseout', function(e){
    number.style.transform = `translateX(${0}px) translateY(${0}px)`
    numberh.style.transform = `translateX(${0}px) translateY(${0}px)`
})


/* divthree work  */
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