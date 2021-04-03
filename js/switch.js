let switchs = [];
function registerSwitch(){
    document.querySelectorAll(".switch").forEach(function(item){
        let s = new Switch(item);
        if(item.onclick != null){
            s.onClick = item.onclick;
        }
        switchs.push(s);
    })
    switchs.forEach(function(item){
        item.item.onclick = function(){
            item.toggle();
            item.onClick();
        }
    })

    switchs[0].onClick = function(){
        //todo
    }
}

class Switch{
    constructor(item, cookies=false){
        this.item = item;
        if(item.id != null && item.id != ""){
            this.id = item.id;
            this.item.id = "switch_" + this.id;
        } else {
            this.id = null;
        }
        this.status = !this.item.classList.contains("switch-disable");
        this.onDisable = function(){};
        this.onEnable = function(){};
        this.onClick = function(){};
        if(cookies){
            
        }
    }
    setValue(value){
        
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