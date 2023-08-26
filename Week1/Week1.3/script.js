var counter =1;
var timer = document.querySelector(".timer")
var button = document.querySelector("button")
var myInterval = setInterval(printCounter,1000)
function printCounter(){
    timer.innerHTML=`${counter}`
    counter++
}


button.addEventListener("click",()=>{
    button.innerHTML="Stop"
    myInterval= setInterval(printCounter,1000)
})

button.addEventListener("click",()=>{
    clearInterval(myInterval);
    myInterval = null;
    timer.innerHTML=`0`
    button.innerHTML="Start"
})