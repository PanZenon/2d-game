let switchs = [];
function registerSwitch(){
    document.querySelectorAll(".switch").forEach(function(item){
        let s = new Switch(item);
        switchs.push(s)
    })
    switchs.forEach(function(item){
        item.item.onclick = function(){
            item.toggle();
        }
    })
    switchs[0].onDisable = function(){
        console.log("elo");
    }
}

class Switch{
    constructor(item){
        this.item = item;
        this.status = !this.item.classList.contains("switch-disable");
        this.onDisable = function(){};
        this.onEnable = function(){};
    }
    disable(){
        if(!this.item.classList.contains("switch-disable")){
            this.item.classList.toggle("switch-disable");
            this.status = false;
            this.onDisable();
        }
    }
    enable(){
        if(this.item.classList.contains("switch-disable")){
            this.item.classList.toggle("switch-disable");
            this.status = true;
            this.onEnable();
        }
    }
    toggle(){
        if(!this.status){
            this.enable();
        } else {
            this.disable();
        }
        this.playSound("switch");
    }
    playSound(sfx){
        new Audio('sound/' + sfx + '.mp3').play();
    }
}