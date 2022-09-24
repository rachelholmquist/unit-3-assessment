console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("This filed has been submitted successfully")
}


let form = document.querySelector('#contact');

form.addEventListener('click', handleSubmit);

function imageCompliment() {
	alert("You have a beautiful smile!")
}

let imageMouse = document.querySelector('#duck');

imageMouse.addEventListener('mouseover', imageCompliment);