
let randomRestaurantName = "";
let randomRestaurantBtn = document.querySelector('#random-btn');
    
    function findRandomRestaurant(){
    
    let restaurantName = Math.random();
    if(restaurantName < 0.25){
        this.randomRestaurantName = "Meconi's"
    } else if(restaurantName < 0.50){
        this.randomRestaurantName = "Pellegrinos"
    } else if(restaurantName < 0.75) {
        this.randomRestaurantName = "Tugboat Annies"
    } else {
        this.randomRestaurantName = "Vic's Pizza"
    }
    return this.randomRestaurantName;
}

randomRestaurantBtn.addEventListener('click', function(){
    let h2 = document.querySelector('#random-restaurant-name');
    h2.innerHTML = findRandomRestaurant();
});

