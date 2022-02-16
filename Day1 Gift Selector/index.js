document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
let foodSelect = document.getElementById("food-select")
let transportSelect = document.getElementById("transport-select")
let addBalloons = document.getElementById("balloon-checkbox")
 

function calculate() {
    let foodValue = Number(foodSelect.value)
    let transportValue = Number(transportSelect.value)
    let balloon = addBalloons.checked == true
    
    let total = foodValue + transportValue 
    
    if(balloon == true){
        total = total + 1
    }
    else{
        total = total + 0
    }
    
    costEl.textContent = total
}
 