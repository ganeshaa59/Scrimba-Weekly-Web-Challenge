document.getElementById("btn").addEventListener("click", correct)
let msg = document.getElementById("paragraph");

function correct() {
     let lowerMessage = msg.textContent.toLocaleLowerCase()
    let message =  lowerMessage.charAt(0).toUpperCase() + lowerMessage.substring(1) 
    msg.textContent = message
}