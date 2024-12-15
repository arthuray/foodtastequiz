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

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        var input = document.createElement('input');
        input.type = "radio";
        input.name = "123";
        input.value = option;
        input.setAttribute("id", option);
        var label = document.createElement('label');
        label.innerHTML = option;
        label.setAttribute("for", option);
        optionsElement.appendChild(input);
        optionsElement.appendChild(label);
    });
    
}

function selectAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        score++;
        document.getElementById("result").textContent = "答對了！做得好！";
    } else {
        document.getElementById("result").textContent = "答錯了。" + questions[currentQuestion].explanation;
    }

    currentQuestion++;
    document.getElementById("qCorrect").textContent = `第 ${currentQuestion+1} 條題目，共 ${maxQuestion} 條。`;
    if (currentQuestion < maxQuestion) {
        loadQuestion();
    } else {
        document.getElementById("question").textContent = "";
        document.getElementById("options").textContent = "";
        document.getElementById("end").textContent = `遊戲結束！分數：${score}/${maxQuestion}`;
        document.getElementById("qCorrect").textContent = "";
        document.getElementById("submit").textContent = "";
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector("button:focus");
    if (selectedOption) {
        selectAnswer(document.querySelector('input[name="123"]:checked').value);
    } else {
        alert("Please select an answer before submitting.");
    }
}

for (let i = 0; i < questions.length; i++) {
    sort(questions[i].options);
  }

loadQuestion();