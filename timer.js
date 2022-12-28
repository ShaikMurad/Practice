var sec = 00;
var mins = 00;
var hours = 00;

var timer;

function murad(){
     timer = setInterval(() => {
        document.querySelector('[for="sec"]').innerHTML = `${sec}`;
        document.querySelector('[for="mins"]').innerHTML =  `${mins}`;
        sec ++;

        if(sec ==60){
            mins++
            document.querySelector('[for="mins"]').innerHTML = `${mins}`;
            sec =0;
         
        }
        if(mins==60){
            hours++
            document.querySelector('[for="hours"]').innerHTML = `${hours}`;
            mins =0;
        }
  
    }, 1000);
}

document.querySelector('.start').addEventListener('click', ()=>murad());
document.querySelector('.stop').addEventListener('click',()=>clearTimeout(timer));