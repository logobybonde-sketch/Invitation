function buka(){

document.querySelector(".content")

.scrollIntoView({

behavior:"smooth"

});

}

let tanggal =

new Date("May 25 2025");

setInterval(()=>{

let sekarang=new Date();

let jarak=tanggal-sekarang;

let hari=

Math.floor(jarak/(1000*60*60*24));

document.getElementById("countdown")

.innerHTML=

hari+" Hari";

},1000);
