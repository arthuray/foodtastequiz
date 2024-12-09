let currentQuestion = 1;
const totalQuestions = 3;
let score = 0;
const correctAnswers = {
    q1: 'Paris',
    q2: 'Leonardo da Vinci',
    q3: 'Mount Everest'
};
const answerReasons = {
    q1: 'Paris is the capital of France.',
    q2: 'Leonardo da Vinci painted the Mona Lisa.',
    q3: 'Mount Everest is the highest mountain in the world.'
};

function showNextQuestion(current) {
    const currentElem = document.getElementById(`question${current}`);
    const nextElem = document.getElementById(`question${current + 1}`);
    currentElem.style.opacity = '0';
    setTimeout(() => {
        currentElem.style.display = 'none';
        nextElem.style.display = 'block';
        setTimeout(() => {
            nextElem.style.opacity = '1';
        }, 10);
    }, 500);
    currentQuestion++;
}

function showPreviousQuestion(current) {
    const currentElem = document.getElementById(`question${current}`);
    const prevElem = document.getElementById(`question${current - 1}`);
    currentElem.style.opacity = '0';
    setTimeout(() => {
        currentElem.style.display = 'none';
        prevElem.style.display = 'block';
        setTimeout(() => {
            prevElem.style.opacity = '1';
        }, 10);
    }, 500);
    currentQuestion--;
}

function checkAnswer(event) {
    const selectedOption = event.target;
    const question = selectedOption.name;
    const answer = selectedOption.value;

    if (answer === correctAnswers[question]) {
        selectedOption.parentElement.classList.add('correct');
        score++;
        createParticles(event.pageX, event.pageY, 'green');
    } else {
        selectedOption.parentElement.classList.add('incorrect');
        createParticles(event.pageX, event.pageY, 'red');
    }

    // Disable all options after one has been selected
    document.querySelectorAll(`input[name="${question}"]`).forEach(input => {
        input.disabled = true;
    });

    // Show the reason for the correct answer
    const reasonElem = document.createElement('div');
    reasonElem.textContent = answerReasons[question];
    reasonElem.style.marginTop = '20px';
    reasonElem.classList.add('answer-reason');
    selectedOption.parentElement.parentElement.appendChild(reasonElem);
}

function createParticles(x, y, color) {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.background = color;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        document.body.appendChild(particle);
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const duration = Math.random() * 2;
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 100;
    particle.style.transition = `transform ${duration}s ease`;
    particle.style.transform = `translate(${distance * Math.cos(angle)}px, ${distance * Math.sin(angle)}px)`;
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

function showFinalScore(event) {
    event.preventDefault();
    document.getElementById('quiz-form').style.display = 'none';
    document.getElementById('final-score').style.display = 'block';
    document.getElementById('score').textContent = `${score}/${totalQuestions}`;
    const percentage = (score / totalQuestions) * 100;
    document.getElementById('percentage').textContent = percentage.toFixed(2);
}

document.querySelectorAll('.options input[type="radio"]').forEach(input => {
    input.addEventListener('click', checkAnswer);
});

window.onload = function() {
    document.getElementById('question1').style.display = 'block';
    setTimeout(() => {
        document.getElementById('question1').style.opacity = '1';
    }, 10);
};