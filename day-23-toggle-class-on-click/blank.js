(function() {

var localStorageValue = localStorage.getItem('counter');

var counter = 0;
if (localStorageValue !== null) {
    counter = Number(localStorageValue);

}

var decrementButton = document.querySelector('.decrement');
var incrementButton = document.querySelector('.increment');
var display = document.querySelector('.display');

display.textContent = counter;

decrementButton.addEventListener('click', function() {
    counter--;
    display.textContent = counter;
    localStorage.setItem('counter', counter);
});

incrementButton.addEventListener('click', function() {
    counter++;
    display.textContent = counter;
    loacalStorage.setItem('counter', counter);

});


})();




















}
