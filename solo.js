let round = 0;

let userScore = 0;

let computerScore = 0;



function play(userChoice){


    if(round >= 5){

        return;

    }



    let choices = [

        "rock",
        "paper",
        "scissors"

    ];



    let computerChoice =

    choices[Math.floor(Math.random()*3)];



    let message = "";



    if(userChoice === computerChoice){


        message = "🤝 Draw!";

    }



    else if(

        (userChoice==="rock" && computerChoice==="scissors") ||

        (userChoice==="paper" && computerChoice==="rock") ||

        (userChoice==="scissors" && computerChoice==="paper")

    ){


        message="🎉 You win!";

        userScore++;

    }



    else{


        message="🤖 Computer wins!";

        computerScore++;

    }




    round++;





    document.getElementById("result").innerHTML =

    `
    You: ${userChoice}<br>
    Computer: ${computerChoice}<br><br>
    ${message}
    `;



    document.getElementById("round").innerHTML =

    `Round: ${round} / 5`;



    document.getElementById("score").innerHTML =

    `
    👤 You: ${userScore}
    |
    🤖 Computer: ${computerScore}
    `;



    if(round===5){


        setTimeout(()=>{


            if(userScore>computerScore){

                alert("🏆 You won the game!");

            }


            else if(computerScore>userScore){

                alert("🤖 Computer won the game!");

            }


            else{

                alert("🤝 The game is a draw!");

            }


        },500);


    }


}





function restartGame(){


    round=0;

    userScore=0;

    computerScore=0;


    document.getElementById("result").innerHTML=

    "Start the game 🎯";


    document.getElementById("round").innerHTML=

    "Round: 0 / 5";


    document.getElementById("score").innerHTML=

    "👤 You: 0 | 🤖 Computer: 0";


}