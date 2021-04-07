let switches = [];
let music;
let dark;
let category;
let selectCategory;

function registerSwitch(){
    music = new Switch(document.querySelectorAll(".switch")[0], true)
    dark = new Switch(document.querySelectorAll(".switch")[1], true)

    switches.forEach(function(item){
        item.item.onclick = function(){
            item.onClick();
            item.toggle();
        }
    })

    let categoryList = [];
    document.querySelectorAll(".switch").forEach(e => {
        if(e.id == "category"){
            let s = new Switch(e, false);
            categoryList.push(s)
        }
    })
    category = new multiSwitch(categoryList);
    category.register();
    
    music.onDisable = function(){
        bgmusic.pause();
    }
    music.onEnable = function(){
        bgmusic.volume = 0.1;
        bgmusic.play()
    }
    dark.onClick = function(){
        changeTheme();
    }
}
class multiSwitch{
    constructor(items){
        this.items = items;
    }

    register(){
        this.items.forEach(e => {
            e.disable()
            e.item.onclick = function(){
                e.onClick();
                e.toggle();
            }
            let x = this.items
            e.onClick = function(){
                x.forEach(s => {
                    if(e != s){
                        s.disable();
                    }
                })
            }
        })
    }
    getValue(){
        let trueValues = [];
        this.items.forEach(e => {
            if(e.value) trueValues.push(e);
        })
        return trueValues[0]
    }
    getItems(){
        return this.items;
    }
}
class Switch{
    constructor(item, toCookies=false){
        switches.push(this);
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