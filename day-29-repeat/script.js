var clickMeButoon = document.querySelector('.click-me');
var clikMeTooButton = document.querySelector('.click-me-too');

ClickMeButton.addEventListener('click', function (){
    var divineDiv = document.querySelector('.divine-div');
    divineDiv.textContent = 'different now';
    divineDiv.classList.toggle('on');

ClickMeTooButton.addEventListener('click', function (){
        var divineDiv = document.querySelector('.divine-div');
        divineDiv.textContent = 'different now';
        divineDiv.classList.toggle('on');
})
