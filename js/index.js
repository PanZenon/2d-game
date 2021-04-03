window.onload = ()=>{
    document.querySelectorAll(".toggleSettings").forEach(addToggle)
}

function toggleSettings(){
    document.querySelector(".options").classList.toggle('disabled')
    document.querySelector(".menu").classList.toggle('disabled')
}
function addToggle(item){
    item.onclick = toggleSettings
}