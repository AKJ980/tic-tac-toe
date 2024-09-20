let boxes=document.querySelectorAll(".box"); //linking all class and id we query selector and containing in variable 
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-button");
let msgcontainer =document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turn0 = true; //palyerx,player0

const winpattern=[// we have made pattern for tic tac toe 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=() =>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was click");
        if(turn0===true){//player0turn
            box.innerText="O";// it will put O in place of empty box when btn is pressed
            turn0=false;
        }else{//playerxtern
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
const enableboxes=() =>{
    for(let box of boxes){//for selecting all box from boxex 
        box.disabled=false;//it will remove the disabled box as false is there
        box.innerText="";//for clear the text(O and X) in the box we used empty element when reset btn pressed
    }
}
const disableboxes=() =>{//for disabled the box after winning so the no further selection of box take place 
    for(let box of boxes){
        box.disabled=true;//it will disable the box after one win,
    }
}
const showWinner= (winner)=>{//here it show winner when winner paremeter is passed 
    msg.innerText=  'congratulation,winner is ${winner}';//in the pf msg text of congratulation will be present 
    msgcontainer.classList.remove("hide");//  doubt 
    disableboxes();

}
const checkwinner = ()=> {
    for(let pattern of winpattern){
        let pos1val= boxes[pattern[0]].innerText;
        // pos1val store the value of boxes[pattern[0]].innerText
        //inside boxes pattern at postion 0 will be seen by innerText(click value of user)
        //
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val );
            }
        }
    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)