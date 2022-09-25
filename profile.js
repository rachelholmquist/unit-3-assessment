function favoriteColor(){
    alert('Pink')
}

function favoritePlace(){
    alert('Lake Chelan')
}

function favoriteRitual(){
    alert('My morning coffee')
}

let faveColor = document.querySelector('#color');
faveColor.addEventListener('click', favoriteColor);

let favePlace = document.querySelector('#place');
favePlace.addEventListener('click', favoritePlace);

let faveRitual = document.querySelector('#ritual');
faveRitual.addEventListener('click', favoriteRitual);