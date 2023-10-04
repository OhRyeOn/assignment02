let randomNum = Math.round(Math.random());
let coinFlip = randomNum;
let choice = prompt('Heads or Tails?');

if (coinFlip < 1) { 
    if ('HEADS' == choice.toUpperCase()) {
        alert("The flip was heads and you chose heads... you win!");
    } else if ('Heads' != choice){
        alert('The flip was heads and you chose tails.. you lose!');
    }
}else if (coinFlip > 0) {
    if ('TAILS' == choice.toUpperCase()) {
        alert("The flip was tails and you chose tails... you win!");
    } else if ('Heads' != choice){
        alert('The flip was tails and you chose heads.. you lose!');
    }

}