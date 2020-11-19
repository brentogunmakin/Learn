const input = process.argv[2].toLowerCase();

let arr = ['rock', 'paper', 'scissors']
let compChose = arr[Math.floor(Math.random() * arr.length)];

console.log(compChose)
console.log('Playing a game of Roshambo against the computer.')

let compWins = () => '~ Computer wins! ~';
let playerWins = () => '~ Player wins! ~';
let tieGame = () =>'~ Tie Game! ~';
let showPlays = (input, compChose) => {
    console.log(`Player plays ${input}`);
    console.log(`Computer plays ${compChose}`)
}

if (input === 'rock' && compChose === 'paper'){
    showPlays(input, compChose);
    console.log(compWins());
} else if (input === 'rock' && compChose === 'scissors'){
    showPlays(input, compChose);
    console.log(playerWins());
} else if (input === 'rock' && compChose === 'rock'){
    showPlays(input, compChose);
    console.log(tieGame());
} else if (input === 'paper' && compChose === 'scissors'){
    showPlays(input, compChose);
    console.log(compWins());
} else if (input === 'paper' && compChose === 'paper'){
    showPlays(input, compChose);
    console.log(tieGame());
} else if (input === 'paper' && compChose === 'rock'){
    showPlays(input, compChose);
    console.log(playerWins());
} else if (input === 'scissors' && compChose === 'scissors'){
    showPlays(input, compChose);
    console.log(tieGame());
} else if (input === 'scissors' && compChose === 'rock'){
    showPlays(input, compChose);
    console.log(compWins());
} else if (input === 'scissors' && compChose === 'paper'){
    showPlays(input, compChose);
    console.log(playerWins());
} else {
    console.log(`Error - ${input} and ${compChose}`)
}