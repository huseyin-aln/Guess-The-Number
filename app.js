let randomNumber = Math.floor(Math.random() * 100 + 1);
// console.log(randomNumber);

let guess = document.getElementById("user-input");

let check = document.getElementById("check-button");

let restart = document.getElementById("restart");

let warning = document.getElementById("remaining");

let attempt = document.getElementById("attempt");

guess.focus();

const guessGame = function () {
    if (attempt.innerText > 1 || guess.value == randomNumber) {
        attempt.innerText--;

        if (guess.value > 100 || guess.value < 1) {
            warning.innerText = "Please enter a valid number"
            
        } else {
            if (guess.value == randomNumber) {
                warning.innerText = "!Congratulations!"
                attempt.innerText ="";  
            
            } else if (guess.value > randomNumber) {
                warning.innerText = "Decrease the number you entered";
                
                document.getElementById("last").innerText = guess.value;
    
            } else if (guess.value < randomNumber) {
            warning.innerText = "Increase the number you entered";
            document.getElementById("first").innerText = guess.value;
            }
        } 
    } else {
        warning.innerText = "Sorry, You lost the game. Game Over!"
        attempt.innerText ="";
    };
    guess.value = "";
}
    
check.addEventListener("click", guessGame); 
guess.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        guessGame();
    }
})

restart.addEventListener("click", () => {
    location.reload()
});

