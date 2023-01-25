let counter=document.getElementById("countValue")
let number= parseInt(sessionStorage.getItem("number")) || 0;
let counterPlay= function(){
    counter.innerHTML=number++
    sessionStorage.setItem("number", number)
};
setInterval(counterPlay, 1000)