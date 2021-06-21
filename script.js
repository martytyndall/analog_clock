// calls the setClock function at 1000ms intervals
setInterval(setClock, 1000)

// gets the current position of each hand
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// logs the current positions of each hand to the console
// console.log(document.querySelector('[data-hour-hand]'))
// console.log(document.querySelector('[data-minute-hand]'))
// console.log(document.querySelector('[data-second-hand]'))


// function to get the current time and set the clock
function setClock(){

    // creates a constant and sets it to a date object
    const currentDate = new Date()

    // creates constants for seconds, minutes and hours, and sets the correct ratio to rotate relative to each other
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    // calls the setRotation function for each hand
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

// function to set the rotation property of each hand by passing in the data from setClock function
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

// runs the setClock function on page load
setClock()

// Marty Tyndall