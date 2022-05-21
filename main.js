const clear = document.getElementById('clear');
const items = document.getElementById('items');
const userInput =  document.getElementById('userInput');

clear.addEventListener("click", function(){
    items.innerHTML = null;
});

userInput.addEventListener("keydown", function(event){
    if (userInput.value !== "" && event.key == "Enter" ){
        addItem();
    }
});

function addItem(){
    var item = document.createElement('h1');
    item.innerHTML = `- ${userInput.value}`;
    item.setAttribute('class', 'fs-3')
    item.addEventListener('click', function(){
        item.style.textDecoration = "line-through"
    });
    items.insertAdjacentElement("beforeend", item);
    userInput.value = null;
};