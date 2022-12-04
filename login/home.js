var loginbutton = document.querySelector('button[class="loginbutton"]');
var homebutton = document.querySelector('button[class="homebutton"]');

loginbutton.onclick = function(){
    window.location = './login.html'
}
homebutton.onclick = function(){
    window.location = './home.html'
}