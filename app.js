let userscore=0;
let compscore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const  genCompChoice =() =>{
      const options=["rock","paper","scissors"];
      const randIdx = Math.floor(Math.random()*3);
      return options[randIdx];
}


const drawgame =() =>{
     msg.innerText="Game was drawn! Play again";
      msg.style.backgroundColor="#1E1E24";
}

const showwinner=(userwin,userchoice,compchoice) =>{
    if(userwin) {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win!");
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else{
        compscore++;
        compscorepara.innerText=compscore;
         msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;
           msg.style.backgroundColor="red";
    }

}

const playgame =(userchoice) => {
    console.log("user choice =",userchoice);
    const compchoice=genCompChoice();
    console.log("comp chice ="+compchoice);

    if(userchoice === compchoice){
        drawgame();
    } else{
        let userwin=true;
        if(userchoice=="rock"){

            userwin=compchoice==="paper"?false:true;
        } else if(userchoice=="paper"){
             userwin=compchoice==="scissors"?false:true;
        } else{
             userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);
    })
})
