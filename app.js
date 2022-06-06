let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

let guess = document.getElementById("user-input");

let check = document.getElementById("check-button");

let restart = document.getElementById("restart");

let warning = document.getElementById("remaining");

let attempt = document.getElementById("attempt");


const guessGame = function () {
    if (attempt.innerText >= 1) {
        attempt.innerText--;

        if (guess.value > 100 || guess.value < 1) {
            warning.innerText = "Please enter a valid number"
            
        } else {
            if (guess.value == randomNumber) {
                warning.innerText = "!Congratulations!"
                guess.value = "";
                
            
            } else if (guess.value > randomNumber) {
                warning.innerText = "Decrease the number you entered";
                guess.value = "";

                

            } else if (guess.value < randomNumber) {
            warning.innerText = "Increase the number you entered";
            guess.value = "";

            }
        
        } 
    } else {
        warning.innerText = "Sorry, You lost the game. Game Over!"
        guess.value = "";

    };
}
    
check.addEventListener("click", guessGame); 
guess.addEventListener("keydown", (e) => {
    if (e.code === 'Enter') {
        guessGame();
    }
})

restart.addEventListener("click", () => {
    location.reload()
});

