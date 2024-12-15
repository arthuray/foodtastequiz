// Define your questions and answers here
let questions = [
    {
        question: "如要補充鈣質，哪種食物最適合？",
        options: ["軟芝士", "龍眼乾", "提子乾", "蘿蔔乾"],
        correctAnswer: "軟芝士",
        explanation: "軟芝士富含鈣質，是補充鈣的良好來源。鈣對骨骼健康至關重要，特別是對於成長中的兒童和老年人。"
    },
    {
        question: "哪一種食物富含膳食纖維？",
        options: ["杏脯", "紫菜", "龍眼乾", "軟芝士"],
        correctAnswer: "紫菜",
        explanation: "紫菜是一種海藻，含有豐富的膳食纖維，有助於消化健康，並可以改善腸道功能。"
    },
    {
        question: "如要改善睡眠，哪種食物最適合？",
        options: ["提子乾", "龍眼乾", "蘿蔔乾", "軟芝士"],
        correctAnswer: "龍眼乾",
        explanation: "龍眼乾被認為有助於安神和改善睡眠，因為它含有一些能促進放鬆的成分。"
    },
    {
        question: "哪一種食物的來源是乾燥的根莖類？",
        options: ["龍眼乾", "紫菜", "蘿蔔乾", "杏脯"],
        correctAnswer: "蘿蔔乾",
        explanation: "蘿蔔乾是將蘿蔔這種根莖類蔬菜乾燥而成，常用於各種料理中，增加風味。"
    },
    {
        question: "如要增強免疫系統，哪種食物最適合？",
        options: ["龍眼乾", "紫菜", "杏脯", "軟芝士"],
        correctAnswer: "紫菜",
        explanation: "紫菜含有抗氧化劑和多種營養素，能增強免疫系統，有助於抵抗疾病。"
    },
    {
        question: "哪一種食物不是乾果？",
        options: ["龍眼乾", "蘋果片", "蘿蔔乾", "提子乾"],
        correctAnswer: "蘿蔔乾",
        explanation: "蘿蔔乾是根莖類蔬菜的乾燥形式，而乾果通常指的是乾燥的水果，如提子乾或杏脯。"
    },
    {
        question: "如要補充維生素C，哪種食物最適合？",
        options: ["提子乾", "杏脯", "軟芝士", "紫菜"],
        correctAnswer: "杏脯",
        explanation: "杏脯是杏子的乾燥版本，含有較高的維生素C，有助於增強免疫系統和促進皮膚健康。"
    },
    {
        question: "哪一種食物最容易導致過敏反應，要小心食用？",
        options: ["龍眼乾", "提子乾", "蘿蔔乾", "軟芝士"],
        correctAnswer: "軟芝士",
        explanation: "軟芝士可能含有乳製品成分，對於某些人來說，乳製品可能引起過敏反應。"
    },

];

// Shuffle the questions array to randomize question order
questions.sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let maxQuestion = 5;

document.getElementById("qCorrect").textContent = `第 ${currentQuestion+1} 條題目，共 ${maxQuestion} 條。`;

function sort(a) {
    a.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const progressBar = document.getElementById("progress-bar");

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    // Update Progress Bar
    let progressPercentage = ((currentQuestion) / maxQuestion) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    questions[currentQuestion].options.forEach((option, index) => {
        var input = document.createElement('input');
        input.type = "radio";
        input.name = "123";
        input.value = option;
        input.setAttribute("id", option);
        input.setAttribute("data-index", index + 1); // Add data-index for key mapping

        var label = document.createElement('label');
        label.innerHTML = option; // Remove manual numbering from innerHTML
        label.setAttribute("for", option);
        label.setAttribute("data-number", index + 1); // Add data-number for styling

        optionsElement.appendChild(input);
        optionsElement.appendChild(label);
    });
    
}

function selectAnswer() {
    const selectedOption = document.querySelector('input[name="123"]:checked');
    if (!selectedOption) {
        // Removed the alert to prevent popup
        return;
    }
    const selectedAnswer = selectedOption.value;

    let resultText = "";
    let emoji = "";

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        score++;
        emoji = "✅"; // Tick emoji for correct answer
        resultText = `${emoji} 答對了！做得好！`;
    } else {
        emoji = "❌"; // Cross emoji for incorrect answer
        resultText = `${emoji} 答錯了。`;
    }

    document.getElementById("result").textContent = resultText;

    // Show the explanation with the emoji in the modal
    const explanation = questions[currentQuestion].explanation;
    document.getElementById("explanation-text").textContent = `${resultText} ${explanation}`;
    openModal();
}

function openModal() {
    document.getElementById("explanation-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("explanation-modal").style.display = "none";
    document.getElementById("result").textContent = "";

    currentQuestion++;
    if (currentQuestion < maxQuestion) {
        loadQuestion();
        document.getElementById("qCorrect").textContent = `第 ${currentQuestion + 1} 條題目，共 ${maxQuestion} 條。`;
    } else {
        document.getElementById("question").textContent = "";
        document.getElementById("options").textContent = "";
        document.getElementById("end").textContent = `遊戲結束！分數：${score}/${maxQuestion}`;
        document.getElementById("qCorrect").textContent = "";

        // Update Progress Bar to 100%
        const progressBar = document.getElementById("progress-bar");
        progressBar.style.width = `100%`;

        document.getElementById("submit").textContent = "";
        document.getElementById("restart").style.display = "block"; // Show restart button
    }
}

// Modify checkAnswer to correctly submit without relying on button focus
function checkAnswer() {
    selectAnswer();
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    questions.sort(() => Math.random() - 0.5); // Shuffle questions again
    document.getElementById("end").textContent = "";
    document.getElementById("restart").style.display = "none";
    document.getElementById("qCorrect").textContent = `第 ${currentQuestion + 1} 條題目，共 ${maxQuestion} 條。`;
    loadQuestion();
    document.getElementById("submit").innerHTML = '<button onclick="checkAnswer()">提交答案</button>'; // Restore submit button
}

for (let i = 0; i < questions.length; i++) {
    sort(questions[i].options);
}

loadQuestion();

// Modify the keydown event listener to handle both number keys and "Enter"
document.addEventListener('keydown', function(event) {
    if (['1', '2', '3', '4'].includes(event.key)) {
        const optionNumber = event.key;
        const optionInput = document.querySelector(`input[data-index="${optionNumber}"]`);
        if (optionInput) {
            optionInput.click(); // Simulate a click to properly check the radio button
        }
    } else if (event.key === 'Enter') {
        const modal = document.getElementById("explanation-modal");
        if (modal.style.display === "block") {
            closeModal();
        } else {
            checkAnswer();
        }
    }
});