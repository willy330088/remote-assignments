//changing welcome message text
const welcome = document.getElementById('welcome');

welcome.addEventListener('click', () => {
    welcome.textContent = 'Have a Good Time!';
});

//show/close menu
function openNav() {
    document.getElementById("mySidebar").style.width = "55%";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

//show hidden content boxes
const action = document.getElementById('action');
const content = document.getElementsByClassName('content-h');

action.addEventListener('click', () => {
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "block";
    }
});