
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true; //playerX ,playero

const winpatterns=[    // array of diffrent dimensons
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="X";
            turno=false;
        }
        else{
            box.innerText="o";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disableboxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showwinner =(winner) => {
    msg.innerText=`congratulations the winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkwinner = () => {
      for(pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                showwinner(pos1val);
            }
        }
      }
};


//new game or reset game
newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);