
let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#user-score");
let  compscorepara = document.querySelector("#comp-score");

const getcompchoice=()=>{
    const options=["rock","paper","scissors"];
    let randidx= Math.floor(Math.random()*3);  
    return options[randidx];               //math.random generates any random number //math.floor removes decimal number.
}

const drawgame =()=>{
    msg.innerText="game was draw ,play again";
    msg.style.backgroundColor="black";

}

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! ${userchoice} beats  computer ${compchoice}`;
        msg.style.backgroundColor="green";
    }
        
    else {
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText = `you lose. ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}


const playgame=(userchoice)=>{
    console.log("user choice=",userchoice)
    //genrate computer choice
    let compchoice=getcompchoice();
    console.log("comp choice=",compchoice);


if(userchoice === compchoice){
     //draw game 
    drawgame();
}else{
     userwin = true;
     if(userchoice=="rock"){
        //scissors,paper
        userwin = compchoice==="paper"?false:true;
     }
     else if(userchoice=="paper") {
        //rock,scissors
        userwin = compchoice==="scissors"?false:true;
     }
     else {
        //rock,paper
           userwin = compchoice==="rock"?false:true;
     }

     showwinner(userwin,userchoice,compchoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice =choice.getAttribute("id");
        playgame(userchoice);
    });
});