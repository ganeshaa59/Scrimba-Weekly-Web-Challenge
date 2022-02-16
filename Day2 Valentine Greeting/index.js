const greetingDisplay = document.getElementById('greeting-display');
const sendBtn = document.getElementById('btn');
const recipientInput = document.getElementById('recipient-input');
const greetingSelection = document.getElementById('greeting-select');
const senderInput = document.getElementById('sender-input');

form.addEventListener('change', writeGreeting);

function writeGreeting(e) {
	e.preventDefault();

	greetingDisplay.innerHTML = 
    
    ` Greeting : ${greetingSelection.value} <br><br> To : ${recipientInput.value} <br><br> From :  ${senderInput.value}`;
}


