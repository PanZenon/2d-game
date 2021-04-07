let bgmusic = new Audio('sound/music.mp3');
window.onload = ()=>{
    registerSwitch();
    registerSettings();
    loadingScreen();
    loadOptions();
    choosedCategory()
    document.querySelector('.fa-times').onclick = toggleCategory
    document.querySelector('.fa-check').onclick = function(){
        document.querySelector('.Singleplayer_newgame').classList.toggle('disabled')
        toggleCategory()
        game = new SingleGame(category.getValue());
        game.randomWord();
    }
}




function loadOptions(){
    let nick = document.querySelector("#setUsername")

    if(getCookie("music")){
        setTimeout(function(){
            bgmusic.volume = 0.1;
            bgmusic.play();
        }, 1000)
    }
    if(getCookie("changeTheme")){
        changeTheme()
    }
    if(getCookie("nick")){
        nick.value = getCookie("nick")
    }
    nick.oninput = function(){
        setCookie("nick", nick.value);
    }
    if(getCookie("accept")){
        document.querySelector(".popup_cookies").classList.toggle("hidden")
    }
}

function changeTitle(title){
    document.querySelector("title").innerTEXT = title.replace("{page}", title);
}

function registerSettings(){


    document.querySelectorAll(".toggleSettings").forEach(addToggle)
    document.querySelectorAll(".toggleGame").forEach(addToggle)
    document.querySelectorAll(".toggleAbout").forEach(addToggle)
}

function toggleSettings(){
    document.querySelector(".options").classList.toggle('disabled')
    document.querySelector(".menu").classList.toggle('disabled')
    changeTitle("Settings")
}
function toggleGame(){
    document.querySelector(".game").classList.toggle('disabled')
    document.querySelector(".menu").classList.toggle('disabled')
    changeTitle("Game")
}
function toggleCreateGame(){
    document.querySelector(".newgame").classList.toggle('disabled')
    document.querySelector(".menu").classList.toggle('disabled')
    changeTitle("New game")
}
function toggleCategory(){
     document.querySelector('#whole-category').classList.toggle('hidden')
}
function toggleAbout(){
    console.log("1")
    document.querySelector(".about").classList.toggle('disabled')
    document.querySelector(".menu").classList.toggle('disabled')
    changeTitle("About")
    //document.querySelector("#hangman").classList.toggle('disabled')
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


/*
class Page{
    constructor(item){
        this.item = item;
    }
    register(){
        this.item.onclick = function() {
            this.toggle();
            new Audio('sound/switch.mp3').play();
        }
    }
    toggle(){
        this.item.classList.toggle('disabled')
        document.querySelector(".menu").classList.toggle('disabled')
    }
}
*/
function choosedCategory(){
    const chosed = document.querySelectorAll('.game-mode-option')
    chosed.forEach(e => {
        if(e.id == 'single'){
            e.addEventListener('click', ()=>{
                document.querySelector('.game-mode').classList.toggle('hidden')
                document.querySelector('.category').classList.toggle('hidden')
            })
        }
        else{
            e.addEventListener('click', ()=>{
                //CREATE NEW
                //JOIN
            })
        }
    });
}