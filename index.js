var a = [];
while(a.length < 25){
    var r = Math.floor(Math.random() * 25) + 1;
    if(a.indexOf(r) === -1) a.push(r);
}
console.log(a);

const startBtn = document.querySelector("#startBtn");
let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused = true;
let intervalId;
let hrs = 0;
let mins =0;
let secs = 0;
var stopScore= true;

var index=0

const qw= document.getElementById("0").innerHTML= a[0];
const qe= document.getElementById("1").innerHTML= a[1];
const qr= document.getElementById("2").innerHTML= a[2];
const qt= document.getElementById("3").innerHTML= a[3];
const qy= document.getElementById("4").innerHTML= a[4];
const qu= document.getElementById("5").innerHTML= a[5];
const qi= document.getElementById("6").innerHTML= a[6];
const qo= document.getElementById("7").innerHTML= a[7];
const qp= document.getElementById("8").innerHTML= a[8];
const qa= document.getElementById("9").innerHTML= a[9];
const qs= document.getElementById("10").innerHTML= a[10];
const qd= document.getElementById("11").innerHTML= a[11];
const qf= document.getElementById("12").innerHTML= a[12];
const qg= document.getElementById("13").innerHTML= a[13];
const qh= document.getElementById("14").innerHTML= a[14];
const qj= document.getElementById("15").innerHTML= a[15];
const qk= document.getElementById("16").innerHTML= a[16];
const ql= document.getElementById("17").innerHTML= a[17];
const qz= document.getElementById("18").innerHTML= a[18];
const qx= document.getElementById("19").innerHTML= a[19];
const qc= document.getElementById("20").innerHTML= a[20];
const qv= document.getElementById("21").innerHTML= a[21];
const qb= document.getElementById("22").innerHTML= a[22];
const qn= document.getElementById("23").innerHTML= a[23];
const qm= document.getElementById("24").innerHTML= a[24];

;


const cellClicked= document.getElementsByClassName("cell");
const cellPressed = e =>{
   var elementClicked= e.target.innerHTML;
   if(elementClicked==1){
    if(paused){
                 paused= false;
              startTime=Date.now() - elapsedTime;
                intervalId= setInterval(updateTime, 1000)
           }
}
   let elements = [qw,qe,qr,qt,qy,qu,qi,qo,qp,qa,qs,qd,qf,qg,qh,qj,qk,ql,qz,qx,qc,qv,qb,qn,qm];
for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
        if (elements[j] > elements[j + 1]) {
            let tmp = elements[j];
            elements[j] = elements[j + 1];
            elements[j + 1] = tmp;
   
            
        }
    }
}


   if(elementClicked == elements[index]){
    changeScore()
    console.log(index)
    

   }
   
  
   }

 for(let cell of cellClicked){
cell.addEventListener("click",cellPressed)
 }


 
 function changeScore(){
    if(stopScore==true){
    var b = [];
while(b.length < 25){
    var b1 = Math.floor(Math.random() * 25) + 1;
    if(b.indexOf(b1) === -1) b.push(b1);
}
const qw= document.getElementById("0").innerHTML= b[0];
const qe= document.getElementById("1").innerHTML= b[1];
const qr= document.getElementById("2").innerHTML= b[2];
const qt= document.getElementById("3").innerHTML= b[3];
const qy= document.getElementById("4").innerHTML= b[4];
const qu= document.getElementById("5").innerHTML= b[5];
const qi= document.getElementById("6").innerHTML= b[6];
const qo= document.getElementById("7").innerHTML= b[7];
const qp= document.getElementById("8").innerHTML= b[8];
const qa= document.getElementById("9").innerHTML= b[9];
const qs= document.getElementById("10").innerHTML= b[10];
const qd= document.getElementById("11").innerHTML= b[11];
const qf= document.getElementById("12").innerHTML= b[12];
const qg= document.getElementById("13").innerHTML= b[13];
const qh= document.getElementById("14").innerHTML= b[14];
const qj= document.getElementById("15").innerHTML= b[15];
const qk= document.getElementById("16").innerHTML= b[16];
const ql= document.getElementById("17").innerHTML= b[17];
const qz= document.getElementById("18").innerHTML= b[18];
const qx= document.getElementById("19").innerHTML= b[19];
const qc= document.getElementById("20").innerHTML= b[20];
const qv= document.getElementById("21").innerHTML= b[21];
const qb= document.getElementById("22").innerHTML= b[22];
const qn= document.getElementById("23").innerHTML= b[23];
const qm= document.getElementById("24").innerHTML= b[24];
    const scoreBoard = document.getElementById("actualScore");
    var number = scoreBoard.innerHTML
   
    number++;
     scoreBoard.innerHTML= number;
     index++;
     if(number==25){
        if(!paused){
            paused= true;
            elapsedTime= Date.now() - startTime
            clearInterval(intervalId)
        }
        
    
     }
 }
}

function changeScoretoZero(){
    
   
   const scoreBoard = document.getElementById("actualScore");
    var number = scoreBoard.innerHTML
    number=0;
    scoreBoard.innerHTML= number;
    
 }
 startBtn.addEventListener("click",()=>{
    if(paused){
       paused= false;
       startTime=Date.now() - elapsedTime;
        intervalId= setInterval(updateTime, 1000)
    }})

    function updateTime(){
        elapsedTime= Date.now() - startTime;
        
        secs= Math.floor((elapsedTime/1000)%60);
        mins= Math.floor((elapsedTime/(1000*60))%60);
        hrs= Math.floor((elapsedTime/(1000*60*60))%60);
        
        secs= pad(secs)
        mins= pad(mins)
        hrs= pad(hrs)
        
        
        timeDisplay.textContent=`${hrs}:${mins}:${secs}`
        const scoreBoard = document.getElementById("actualScore");
    var number = scoreBoard.innerHTML
        if(secs==19){
            lostGame();
        }
        else if(number==25 && secs<19){

            wonGame();
        }
        
        function pad(unit){
            return (("0") + unit).length > 2 ? unit : "0"+ unit;
        }
       
           
        
    } 

    const finishBtn = document.querySelector("#finishBtn");

    finishBtn.addEventListener("click",()=>{
        if(!paused){
            paused= true;
            elapsedTime= Date.now() - startTime
            clearInterval(intervalId)
        }
       
    })

    resetBtn.addEventListener("click",()=>{
        
        location.reload();
        })
        
function lostGame(){
    const scoreBoard = document.getElementById("actualScore");
    var number = scoreBoard.innerHTML
    timeDisplay.textContent=`YOU LOST!! TRY AGAIN`
    if(!paused){
        paused= true;
        elapsedTime= Date.now() - startTime
        clearInterval(intervalId)
        document.querySelector('#startBtn').disabled = true
stopScore=false;
        
    }

}
function wonGame(){
    timeDisplay.textContent=`YOU WON!! AND IT TOOK YOU ${hrs}:${mins}:${secs} `
    if(!paused){
        paused= true;
        elapsedTime= Date.now() - startTime
        clearInterval(intervalId)
        document.querySelector('#startBtn').disabled = true
  
}
}
