let bgmusic = new Audio('sound/music.mp3');

window.onload = ()=>{
    registerSwitch();
    registerSettings();
    registerCookies();
    loadingScreen();
    backgroundMusic();
}
function backgroundMusic(){
    if(getCookie("music")){
        setTimeout(function(){
            bgmusic.volume = 0.1;
            bgmusic.play();
        }, 1000)
    }
    if(!getCookie("changeTheme")){
        changeTheme()
    }
}


function registerSettings(){
    document.querySelectorAll(".toggleSettings").forEach(addToggle)
    document.querySelectorAll(".toggleGame").forEach(addToggle)
    document.querySelectorAll(".toggleAbout").forEach(addToggle)
}


function toggleSettings(){
    document.querySelector(".options").classList.toggle('disabled')
    document.querySelector(".menu").classList.toggle('disabled')
}
function toggleGame(){
    document.querySelector(".game").classList.toggle('disabled')
    document.querySelector(".menu").classList.toggle('disabled')
}
function toggleAbout(){
    document.querySelector(".about").classList.toggle('disabled')
    document.querySelector(".menu").classList.toggle('disabled')
    document.querySelector("#hangman").classList.toggle('disabled')
}
function addToggle(item){
    if(item.classList.contains("toggleGame")){
        item.onclick = function(){
            toggleGame()
            new Audio('sound/switch.mp3').play();
        }
    }else if(item.classList.contains("toggleSettings")){
        item.onclick = function() {
            toggleSettings()
            new Audio('sound/switch.mp3').play();
        }
    }else if(item.classList.contains("toggleAbout")){
        item.onclick = function(){
            toggleAbout()
            new Audio('sound/switch.mp3').play();
        }
    }
}
function loadingScreen(){
    document.querySelector('.loading-screen').classList.add('hidden')
}



function changeTheme(){
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")){
        document.querySelector(".hangman").src = "img/wisielec-light.gif"
    } else {
        document.querySelector(".hangman").src = "img/wisielec-dark.gif"
    }
    
}