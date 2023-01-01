var userScore = 0;
var comScore = 0;

const userScore_span = document.getElementById("user-score");
const comScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissor_div = document.querySelector("#scissor");
const para = document.getElementById('status');

function getCompChoice() {
    const choice = ['rock', 'paper', 'scissor'];
    let num = Math.round(Math.random() * 2);
    return choice[num];

}

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    const smallUser = "Player".fontsize(3).sub();
    const smallCom = "Comp".fontsize(3).sub();
    result_div.innerHTML = `${user.toUpperCase()}${smallUser}  beats ${comp.toUpperCase()} ${smallCom} . You Win 🔥`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('green-glow')
    }, 300);
    if (userScore == 5) {
        userScore = 0;
        comScore = 0;
        para.text = 'You have WON 🏆';

    }
}

function lose(user, comp) {
    comScore++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    const smallUser = "Player".fontsize(3).sub();
    const smallCom = "Comp".fontsize(3).sub();
    result_div.innerHTML = `${user.toUpperCase()} ${smallCom} beats ${comp.toUpperCase()} ${smallUser} . You Lost 😞`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 300);
    if (comScore == 5) {
        userScore = 0;
        comScore = 0;
        para.text = 'you have lost';
    }
}

function draw(user, choice) {
    const smallUser = "Player".fontsize(3).sub();
    const smallCom = "Comp".fontsize(3).sub();
    result_div.innerHTML = `${user.toUpperCase()} ${smallUser}  equals ${comp.toUpperCase()} ${smallCom} . It's Tie `;
    document.getElementById(user).classList.add('silver-glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('silver-glow')
    }, 300);
}
getCompChoice();

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw();

    }

}

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissor_div.addEventListener('click', () => game("scissor"));
}
if (userScore === 5) {

}

else if (comScore === 5) {
    let r = document.getElementById('result');
    r.innerHTML = `You Lost it`;
    userScore = 0;
    comScore = 0;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;

}
main();