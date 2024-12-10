let currentQuestion = 1;
let totalQuestions = 3;
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

let username = 'root';
let password = 'root';

function toggleConfigPanel() {
    const panel = document.getElementById('config-panel');
    panel.classList.toggle('open');
}

function authenticate(event) {
    event.preventDefault();
    const userInput = document.getElementById('username').value;
    const passInput = document.getElementById('password').value;
    if (userInput === username && passInput === password) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('config-content').style.display = 'block';
    } else {
        alert('Incorrect username or password');
    }
}

function logout() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('config-content').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function addNewQuestion() {
    const questionText = document.getElementById('new-question-text').value;
    const option1 = document.getElementById('new-option1').value;
    const option2 = document.getElementById('new-option2').value;
    const option3 = document.getElementById('new-option3').value;
    const option4 = document.getElementById('new-option4').value;
    const correctAnswer = document.getElementById('new-question-answer').value;
    const answerReason = document.getElementById('new-question-reason').value;

    if (questionText && option1 && option2 && option3 && option4 && correctAnswer && answerReason) {
        totalQuestions++; // Now this won't cause an error
        const questionId = `q${totalQuestions}`;
        correctAnswers[questionId] = correctAnswer;
        answerReasons[questionId] = answerReason;

        // Create new question elements
        const quizForm = document.getElementById('quiz-form');

        const questionContainer = document.createElement('div');
        questionContainer.className = 'question-container';
        questionContainer.id = `question${totalQuestions}`;
        questionContainer.style.display = 'none';

        const questionElem = document.createElement('div');
        questionElem.className = 'question';
        questionElem.textContent = questionText;

        const optionsList = document.createElement('ul');
        optionsList.className = 'options';

        // Create options from user inputs
        const options = [option1, option2, option3, option4];
        options.forEach((optionText) => {
            const optionItem = document.createElement('li');
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = questionId;
            input.value = optionText;
            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${optionText}`));
            optionItem.appendChild(label);
            optionsList.appendChild(optionItem);

            // Add event listener
            input.addEventListener('click', checkAnswer);
        });

        questionContainer.appendChild(questionElem);
        questionContainer.appendChild(optionsList);

        // Navigation buttons
        const prevButton = document.createElement('button');
        prevButton.type = 'button';
        prevButton.className = 'nav-button prev';
        prevButton.textContent = '⬅️ Previous';
        prevButton.onclick = function () { showPreviousQuestion(totalQuestions); };

        const nextButton = document.createElement('button');
        nextButton.type = 'button';
        nextButton.className = 'nav-button next';
        nextButton.textContent = 'Next ➡️';
        nextButton.onclick = function () { showNextQuestion(totalQuestions); };

        questionContainer.appendChild(prevButton);
        questionContainer.appendChild(nextButton);

        // Adjust navigation buttons
        // Hide 'Next' button on the previous last question
        if (totalQuestions > 1) {
            const prevNextButton = document.querySelector(`#question${totalQuestions - 1} .next`);
            if (prevNextButton) {
                prevNextButton.style.display = 'none';
            }
        }

        // Show 'Submit' button on the new last question
        nextButton.style.display = 'none';
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.className = 'submit-button';
        submitButton.textContent = 'Submit Quiz';
        questionContainer.appendChild(submitButton);

        // Insert the new question before the final score container
        quizForm.insertBefore(questionContainer, document.getElementById('final-score'));

        // Re-attach event listeners to all options
        document.querySelectorAll('.options input[type="radio"]').forEach(input => {
            input.addEventListener('click', checkAnswer);
        });

        alert('Question added successfully!');
        // Clear input fields
        document.getElementById('new-question-text').value = '';
        document.getElementById('new-option1').value = '';
        document.getElementById('new-option2').value = '';
        document.getElementById('new-option3').value = '';
        document.getElementById('new-option4').value = '';
        document.getElementById('new-question-answer').value = '';
        document.getElementById('new-question-reason').value = '';
    } else {
        alert('Please fill in all fields');
    }
}

function showNextQuestion(current) {
    const currentElem = document.getElementById(`question${current}`);
    const nextElem = document.getElementById(`question${current + 1}`);
    if (nextElem) {
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
}

function showPreviousQuestion(current) {
    const currentElem = document.getElementById(`question${current}`);
    const prevElem = document.getElementById(`question${current - 1}`);
    if (prevElem) {
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
}

function checkAnswer(event) {
    const selectedOption = event.target;
    const question = selectedOption.name;
    const answer = selectedOption.value;

    if (answer === correctAnswers[question]) {
        selectedOption.parentElement.classList.add('correct');
        score++;
        updateScoreCounter();
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

function updateScoreCounter() {
    document.getElementById('score-counter').textContent = `Score: ${score}`;
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

window.onload = function () {
    document.getElementById('question1').style.display = 'block';
    document.getElementById('question1').style.opacity = '1';
    updateScoreCounter();
};