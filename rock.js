let choices=document.querySelectorAll(".choice");
let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissor=document.getElementById("scissor");
let userScore=document.getElementById("user");
let compScore=document.getElementById("comp");
let msg=document.getElementById("msges")

let user=0;
let comp=0;


const getcompscore= () => {
    let options=["rock", "paper", "scissor"];
    let index=Math.floor(Math.random() *3);
    return options[index];
};

const Draw=(yourchoice, compChoice) =>{
    msg.innerText= `Draw, ${yourchoice} can't defeat ${compChoice}`;
        msg.classList.add("yellow");
        msg.classList.remove("red");
        msg.classList.remove("green");
}

let count=0;
let counter=0;

const Ywin=(yourchoice, compChoice) =>{
    msg.innerText=`You win, ${yourchoice} defeat ${compChoice}`;
    msg.classList.add("green");
    msg.classList.remove("red");
    msg.classList.remove("yellow");
    count++;
    userScore.innerText=count;
}

const Cwin=(yourchoice, compChoice) => {
    msg.innerText=`Computer win, ${yourchoice} defeat ${compChoice}`;
    msg.classList.add("red");
    msg.classList.remove("green");
    msg.classList.remove("yellow");
    counter++;
    compScore.innerText=counter;
}

const playGame=(yourchoice) => {
    const compChoice=getcompscore();
    if(yourchoice===compChoice){
        Draw(yourchoice, compChoice);
    }
    else if(yourchoice==="rock" && compChoice==="paper") {
        Cwin(yourchoice, compChoice);
    }
    else if(yourchoice ==="paper" && compChoice==="rock") {
        Ywin(yourchoice,compChoice);
    }
    else if(yourchoice==="rock" && compChoice==="scissor") {
        Ywin(yourchoice, compChoice);
    }
    else if(yourchoice==="paper" && compChoice==="scissor") {
        Cwin(yourchoice, compChoice);
    }
    else if(yourchoice==="scissor" && compChoice==="rock") {
        Cwin(yourchoice, compChoice);
    }
    else if(yourchoice==="scissor" && compChoice==="paper") {
        Ywin(yourchoice, compChoice);
    }
}




choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const yourchoice=choice.getAttribute("id");
        playGame(yourchoice);
    })
});