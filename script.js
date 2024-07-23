const form = document.querySelector("#form");
const rem = document.querySelector(".rem")
const previous = document.querySelector(".prev")
const resetButton = document.querySelector("#restart")
const loworhi = document.querySelector(".inst")
function initializeGame() {
    guess = (Math.floor(Math.random() * 100)) + 1;
    // heading.innerText = guess;
    loworhi.innerText = "CHOOSE A NUMBER BETWEEN 1 AND 100 WITHIN 7 GUESSES"
    prev = [];
    attempts = 7;
    previous.innerText = `+++NEW GAME+++`;
    rem.innerText = `CHANCES REMAINING: ${attempts}`;
    form.querySelector("button").disabled = false;
    form.querySelector("#input").value = "";
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let num = (document.querySelector("#input").value) ;
    if(isNaN(num)){num=0}
    num=parseInt(num);
    if (num==guess){
        loworhi.innerText="DEMNNN!!! ACCURATE CORRECT GUESS"
        rem.innerText = "YAYYYY you made it";
        form.querySelector("button").disabled = true;
        previous.innerText = "HUGE W"
        return;
    }
    else{
        if(num>guess){loworhi.innerText="HIGHER THAN THE ANSWER"}
        else{loworhi.innerText="LOWER THAN THE ANSWER"}
        attempts--;
        rem.innerText = `CHANCES REMAINING: ${attempts}`;
        prev.push(num);
        prevstring = prev.join(" ");
        previous.innerText = `PREVIOUS GUESSES: ${prevstring}`;
    }
    form.querySelector("#input").value = "";
    if(attempts==0){
        rem.innerText = `Game Over! The correct number was ${guess}`;
        form.querySelector("button").disabled = true;
        resetButton.style.display = "block";
    }
})  

resetButton.addEventListener('click', initializeGame);
initializeGame();