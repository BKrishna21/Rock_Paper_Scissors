let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const message=document.querySelector("#comt");
const userScorePara=document.querySelector("#you");
const compScorePara=document.querySelector("#comp");


 const genCompChoice = () => {
     const options=["rock","paper","scissors"]; 
     const ranIdx=Math.floor(Math.random() * 3);
     return options[ranIdx];
 };
 const drawGame =() => {
    //console.log("game was draw");
    message.innerText="Game was Draw!!!";
    message.style.backgroundColor=" #081b31";
 };

 const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin==true){
        userScore++;
        userScorePara.innerText=userScore;
        //console.log("You are the winner");
        message.innerText=`You win!!! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor="green";
    }
        

    else{
       
        message.innerText=`You Lose!!! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
        
 }

 const playGame = (userChoice) => {
    console.log("user choice=", userChoice);

    const compChoice=genCompChoice();
    console.log("comp choice=", compChoice);

    if(compChoice===userChoice)
    {
        drawGame();
    }
    else
    {
         let userWin=true;
         if(userChoice=== "rock")
         {
            userWin=compChoice==="paper" ? false : true;
            
         }
         else if(userChoice==="paper")
         {
            userWin=compChoice==="scissor" ? false : true;
            
         }
         else{
            userWin=compChoice==="rock" ? false : true;
         }
         showWinner(userWin,userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        //console.log("choice is selected",userChoice);
        playGame(userChoice);


    } );
});

