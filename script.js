function rollDice() {
    // Generate a random number between 1 and 6
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Add class invisibility to all dots
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
        dot.classList.add("invisible");
    });
    // Remove class rollSix from dot--1 if it exists
    const dot1 = document.querySelectorAll(".dot--1");
    dot1.forEach((dot) => { 
        dot.classList.remove("rollSix");
    });

    // Display the result of the dice roll
    winnerDisplay(randomNumber1, randomNumber2);
   displayResult(randomNumber1, "dice--1");
   displayResult(randomNumber2, "dice--2"); 
   
}

function winnerDisplay(dice1, dice2) {
    const winner = document.querySelector(".winner");
    if(dice1 > dice2) {
        winner.textContent = "Player 1 wins!";
    } else if(dice1 < dice2) {
        winner.textContent = "Player 2 wins!";
    } else {
        winner.textContent = "It's a tie!";
    }

    document.querySelector(".winner").classList.remove("invisible");
}

function displayResult(diceResult, dice)  {
    var startingNumber = 1;
 if(diceResult === 6) {
            document.querySelector(`.${dice} .dot--1`).classList.add("rollSix");
        }
        if(diceResult % 2 === 0 && diceResult !== 6) {
            startingNumber = 2;
            diceResult += 1;

        }

    for (let i = startingNumber; i <= diceResult; ++i) {
        
        document.querySelector(`.${dice} .dot--${i}`).classList.remove("invisible");
    }
}

