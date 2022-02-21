const fomr = document.getElementById('form')
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attemp');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attempsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max)
    }

};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'tentativa' + value
};

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if (!kick) {
        alert('digite algum valor!')
        return;
    };

    updateAttempt(attempt, ++Guess.attempsNumber);

    if (numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
    } else if (numberDrawn > kick) {
        status.innerHTML = 'O número é maior';
        status.style.color = '#de4251';
    };
};

function playAgain() {
    document.getElementById('btnrestart').style.display = 'flex';

};

function restart() {
    document.location.reload(true);

};

function clear() {
    document.getElementById('kick').value = '';
};