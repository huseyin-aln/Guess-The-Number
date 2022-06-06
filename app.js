let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

let guess = document.getElementById("user-input");
console.log(guess);

let check = document.getElementById("check-button");

let restart = document.getElementById("start");

let warning = document.getElementById("remaining");

let attempt = document.getElementById("attempt");
// console.log(attempt);
// let attempt = 5;
// console.log(attempt);


// console.log(warning);


const guessGame = function () {
    if (attempt.innerText > 1) {
        

        if (guess.value > 100 || guess.value < 1) {
            warning.innerText = "Please enter a valid number"
            
        } else {
            if (guess.value < randomNumber) {
            warning.innerText = "increase";
            attempt.innerText--;
         
            } else if (guess.value > randomNumber) {
                warning.innerText = "decrease";
                attempt.innerText--;

            } else if (guess.value == randomNumber) {
                warning.innerText = "Congratulations"
                attempt.innerText--;
            }
        
        } 
} else {
    warning.innerText = "Game over"
    attempt.innerText--;
    };
}
    
check.addEventListener("click", guessGame); 

