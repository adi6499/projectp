let i =0.8;
let grass =document.getElementById("grass")
let mountain =document.getElementById("mountain")
let cloud =document.getElementById("cloud")
let cloud1 =document.getElementById("cloud1")
window.addEventListener("scroll",()=>{
    let top = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let scrolled = top/height * 100
    mountain.style.transform=`translateY(-${i * scrolled}%)`
    grass.style.transform=`translateY(-${i * scrolled}%)`
    cloud.style.transform=`translateX(-${i * scrolled}%)`
    cloud1.style.transform=`translateX(${i * scrolled}%)`
})