let switches = [];

function registerSwitch(){
    document.querySelectorAll(".switch").forEach(function(item){
        let s = new Switch(item, true);
        if(item.onclick != null){
            s.onClick = item.onclick;
        }
        switches.push(s);
    })
    switches.forEach(function(item){
        item.item.onclick = function(){
            item.onClick();
            item.toggle();
        }
    })
    //Make the switches be functional

    //0 == music
    //1 == theme

    switches[0].onDisable = function(){
        bgmusic.pause();
    }
    switches[0].onEnable = function(){
        bgmusic.volume = 0.1;
        bgmusic.play()
    }
    switches[1].onClick = function(){
        changeTheme();
    }
}

class Switch{
    constructor(item, toCookies=false){
        this.item = item;
        if(item.id != null && item.id != ""){
            this.id = item.id;
            this.item.id = "switch_" + this.id;
        } else {
            this.id = null;
        }
        this.value = !this.item.classList.contains("switch-disable");
        this.onDisable = function(){};
        this.onEnable = function(){};
        this.onClick = function(){};
        if(toCookies){
            this.setValue((getCookie(this.id)))
        }
    }
    setValue(value){
        if(value){
            this.enable();
        } else {
            this.disable();
        }
    }
    disable(){
        if(!this.item.classList.contains("switch-disable")){
            this.item.classList.toggle("switch-disable");
            this.value = false;
            setCookie(this.id, this.value);
            this.onDisable();
        }
    }
    enable(){
        if(this.item.classList.contains("switch-disable")){
            this.item.classList.toggle("switch-disable");
            this.value = true;
            setCookie(this.id, this.value);
            this.onEnable();
        }
    }
    toggle(){
        if(!this.value){
            this.enable();
        } else {
            this.disable();
        }
        this.playSound();
    }
    playSound(){
        new Audio('sound/switch.mp3').play();
    }
}