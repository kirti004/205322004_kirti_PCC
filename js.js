
let count = 0;


function counter() {
    count++;
    updateCount();
    updateColor();
}
function updateCount() {
    document.getElementById("count").innerHTML = count;
}
function updateColor() {
    if (count % 2 === 0){
        document.getElementById("time").style.color = "green";
        document.getElementById("count").style.color = "green";
    }
    else{
        document.getElementById("time").style.color = "red";
        document.getElementById("count").style.color = "green";
    }
        

}
let time=document.getElementById("time");
setInterval(()=>{
    let d= new Date();
    time.innerHTML=d.toLocaleTimeString();
},1000);