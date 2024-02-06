let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
    //rock, paper, scissors             /*computer to choose random option
};

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,  userChoice, compChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText =compScore;
        msg.innerText = "You lost!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
   console.log("user choice=", userChoice);    /*print user choosed value*/
   //generate computer choice----->modular

   const compChoice = genCompChoice();
   console.log("comp choice=", compChoice);   /*print computer choosed value*/

   if(userChoice === compChoice){
   //Draw Game
   drawGame();
   } else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissors, paper
        userWin = compChoice === "paper"  ?  false : true;
   }else if(userChoice === "paper") {
       //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
   }else {
       userWin = compChoice === "rock"  ? false : true;
   }
   showWinner(userWin, userChoice, compChoice);
   }
};


// user choice 

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", ()=>{
       const userChoice = choice.getAttribute("id");  /*userchoice to select*/
       playGame(userChoice);
    });
});