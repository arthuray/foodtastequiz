let questions = [
    {
        question: "如要補充鈣質，哪種食物最適合？",
        options: [
            { text: "軟芝士", image: "./quiz_imgasset/軟芝士.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "蘿蔔乾", image: "./quiz_imgasset/蘿蔔乾.png" }
        ],
        correctAnswer: "軟芝士",
        explanation: "軟芝士富含鈣質，是補充鈣的良好來源。鈣對骨骼健康至關重要，特別是對於成長中的兒童和老年人。"
    },
    {
        question: "哪一種食物富含膳食纖維？",
        options: [
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "軟芝士", image: "./quiz_imgasset/軟芝士.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "紫菜是一種海藻，含有豐富的膳食纖維，有助於消化健康，並可以改善腸道功能。"
    },
    {
        question: "如要改善睡眠，哪種食物最適合？",
        options: [
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "蘿蔔乾", image: "./quiz_imgasset/蘿蔔乾.png" },
            { text: "軟芝士", image: "./quiz_imgasset/軟芝士.png" }
        ],
        correctAnswer: "龍眼乾",
        explanation: "龍眼乾被認為有助於安神和改善睡眠，因為它含有一些能促進放鬆的成分。"
    },
    {
        question: "如要補充維他命C，哪種食物最適合？",
        options: [
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" },
            { text: "軟芝士", image: "./quiz_imgasset/軟芝士.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" }
        ],
        correctAnswer: "杏脯",
        explanation: "杏脯是杏子的乾燥版本，含有較高的維他命C，有助於增強免疫系統和促進皮膚健康。"
    },
    {
        question: "哪一種食物最容易導致過敏反應，要小心食用？",
        options: [
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "蘿蔔乾", image: "./quiz_imgasset/蘿蔔乾.png" },
            { text: "軟芝士", image: "./quiz_imgasset/軟芝士.png" }
        ],
        correctAnswer: "軟芝士",
        explanation: "軟芝士可能含有乳製品成分，對於某些人來說，乳製品可能引起過敏反應。"
    },
    {
        question: "哪種食物可以作為健康的小吃，並且適合老年人？",
        options: [
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "爆谷", image: "./quiz_imgasset/爆谷.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" }
        ],
        correctAnswer: "爆谷",
        explanation: "爆谷熱量低，味道好，適合老年人吃"
    },
    {
        question: "哪種食物中的天然糖分能提供持久能量？",
        options: [
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "混合果仁", image: "./quiz_imgasset/混合果仁.png" },
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" }
        ],
        correctAnswer: "龍眼乾",
        explanation: "龍眼乾中的天然糖分能迅速被身體吸收，提供即時的能量，特別適合運動前食用。"
    },
    {
        question: "哪種食物富含維他命A，有助於維護視力？",
        options: [
            { text: "蔬菜片", image: "./quiz_imgasset/蔬菜片.png" },
            { text: "爆谷", image: "./quiz_imgasset/爆谷.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "消化餅", image: "./quiz_imgasset/消化餅.png" }
        ],
        correctAnswer: "蔬菜片",
        explanation: "蔬菜片通常含有豐富的維他命A，這種維他命對於視網膜健康和夜間視力至關重要。"
    },
    {
        question: "哪種食物能幫助改善皮膚健康？",
        options: [
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" }
        ],
        correctAnswer: "提子乾",
        explanation: "提子乾中的抗氧化劑能保護皮膚，從而改善皮膚健康。"
    },
    {
        question: "哪種食物富含維他命C？",
        options: [
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" }
        ],
        correctAnswer: "蘋果片",
        explanation: "維他命C對於膠原蛋白可以提供很多幫助，有助於維持皮膚的健康。"
    },
    {
        question: "哪種食物含有豐富的維他命A，有助於視力健康？",
        options: [
            { text: "蔬菜片", image: "./quiz_imgasset/蔬菜片.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" },
            { text: "消化餅", image: "./quiz_imgasset/消化餅.png" }
        ],
        correctAnswer: "蔬菜片",
        explanation: "蔬菜片通常富含維他命A，這對維護視力和眼睛健康可以提供很多幫助。"
    },
    {
        question: "哪種食物能幫助改善心情？",
        options: [
            { text: "混合果仁", image: "./quiz_imgasset/混合果仁.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" }
        ],
        correctAnswer: "混合果仁",
        explanation: "混合果仁含有色氨酸, 有效幫助您每天保持愉快的情緒。"
    },
    {
        question: "哪種食物特別適合季節交替時食用？",
        options: [
            { text: "消化餅", image: "./quiz_imgasset/消化餅.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" }
        ],
        correctAnswer: "提子乾",
        explanation: "提子乾富含抗氧化劑，有助於提高免疫力，抵抗感冒。"
    },
    {
        question: "哪種食物適合用作健康的甜點？",
        options: [
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "消化餅", image: "./quiz_imgasset/消化餅.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "爆谷", image: "./quiz_imgasset/爆谷.png" }
        ],
        correctAnswer: "龍眼乾",
        explanation: "龍眼乾因其天然甜味，零添加物，能作為健康的甜點選擇。"
    },
    {
        question: "哪種食物有助於提升能量代謝？",
        options: [
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "混合果仁", image: "./quiz_imgasset/混合果仁.png" },
            { text: "消化餅", image: "./quiz_imgasset/消化餅.png" }
        ],
        correctAnswer: "混合果仁",
        explanation: "混合果仁中的維他命B群有助於促進能量的生成和代謝。"
    },
    {
        question: "哪種食物能有效緩解消化不良？",
        options: [
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "混合果仁", image: "./quiz_imgasset/混合果仁.png" },
            { text: "消化餅", image: "./quiz_imgasset/消化餅.png" }
        ],
        correctAnswer: "消化餅",
        explanation: "消化餅中的天然酵素能幫助改善消化不良的問題。"
    },
    {
        question: "哪種食物能幫助提高記憶力？",
        options: [
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "混合果仁", image: "./quiz_imgasset/混合果仁.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" }
        ],
        correctAnswer: "混合果仁",
        explanation: "混合果仁中的抗氧化劑有助於提高記憶力和認知功能。"
    },
    {
        question: " 哪種食物能幫助增強骨骼密度，預防骨折？",
        options: [
            { text: "混合果仁", image: "./quiz_imgasset/混合果仁.png" },
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "無添加紫菜含有豐富的鈣質，有助於增強骨骼密度。"
    },
    {
        question: "哪種食物含有抗炎特性，對關節健康有益？",
        options: [
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "混合果仁", image: "./quiz_imgasset/混合果仁.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" }
        ],
        correctAnswer: "混合果仁",
        explanation: "混合果仁中的健康脂肪有助於減少體內的炎症。"
    },
    {
        question: "哪種食物適合在熱天食用？",
        options: [
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "混合果仁", image: "./quiz_imgasset/混合果仁.png" },
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" }
        ],
        correctAnswer: "蘋果片",
        explanation: "蘋果片清脆，能幫助在炎熱的天氣中降溫。"
    },
    {
        question: " 哪種食物適合用作健康的早餐搭配？",
        options: [
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "消化餅", image: "./quiz_imgasset/消化餅.png" }
        ],
        correctAnswer: "蘋果片",
        explanation: "蘋果片低熱量且富含纖維，適合作為早餐搭配。"
    },
    {
        question: "哪種食物能幫助減少肌肉痙攣？",
        options: [
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "消化餅", image: "./quiz_imgasset/消化餅.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "無添加紫菜含有鉀，有助於減少肌肉痙攣。"
    },
    
    {
        "question": "哪種零食有助於解決便秘問題？",
        "options": [
            { "text": "混合果仁", "image": "./quiz_imgasset/混合果仁.png" },
            { "text": "提子乾", "image": "./quiz_imgasset/提子乾.png" },
            { "text": "杏脯", "image": "./quiz_imgasset/杏脯.png" },
            { "text": "蔬菜片", "image": "./quiz_imgasset/蔬菜片.png" }
        ],
        "correctAnswer": "杏脯",
        "explanation": "杏脯含有豐富的纖維素，能促進腸道蠕動，有助於改善便秘。"
    },
    {
        "question": "如果晚上頻繁上廁所，哪種零食較適合？",
        "options": [
            { "text": "提子乾", "image": "./quiz_imgasset/提子乾.png" },
            { "text": "紫菜", "image": "./quiz_imgasset/紫菜.png" },
            { "text": "消化餅", "image": "./quiz_imgasset/消化餅.png" },
            { "text": "爆谷", "image": "./quiz_imgasset/爆谷.png" }
        ],
        "correctAnswer": "紫菜",
        "explanation": "無添加紫菜低鈉且富含礦物質，有助於維持水分平衡，減少夜間頻尿。"
    },
    {
        "question": "哪種零食適合有心血管疾病風險人？",
        "options": [
            { "text": "混合果仁", "image": "./quiz_imgasset/混合果仁.png" },
            { "text": "消化餅", "image": "./quiz_imgasset/消化餅.png" },
            { "text": "蘋果片", "image": "./quiz_imgasset/蘋果片.png" },
            { "text": "爆谷", "image": "./quiz_imgasset/爆谷.png" }
        ],
        "correctAnswer": "混合果仁",
        "explanation": "混合果仁含有不飽和脂肪酸，有助於心血管健康。"
    },
    {
        "question": "哪種零食對於減少焦慮和壓力有幫助？",
        "options": [
            { "text": "龍眼乾", "image": "./quiz_imgasset/龍眼乾.png" },
            { "text": "提子乾", "image": "./quiz_imgasset/提子乾.png" },
            { "text": "蔬菜片", "image": "./quiz_imgasset/蔬菜片.png" },
            { "text": "紫菜", "image": "./quiz_imgasset/紫菜.png" }
        ],
        "correctAnswer": "龍眼乾",
        "explanation": "龍眼乾含有能幫助安神的成分，能減少焦慮。"
    },
    {
        "question": "如果需要補充鐵質，哪種零食最合適？",
        "options": [
            { "text": "龍眼乾", "image": "./quiz_imgasset/龍眼乾.png" },
            { "text": "消化餅", "image": "./quiz_imgasset/消化餅.png" },
            { "text": "爆谷", "image": "./quiz_imgasset/爆谷.png" },
            { "text": "紫菜", "image": "./quiz_imgasset/紫菜.png" }
        ],
        "correctAnswer": "龍眼乾",
        "explanation": "龍眼乾含有豐富的鐵質，有助於改善貧血問題。"
    },
    {
        "question": "哪種零食有助於穩定血糖？",
        "options": [
            { "text": "提子乾", "image": "./quiz_imgasset/提子乾.png" },
            { "text": "蔬菜片", "image": "./quiz_imgasset/蔬菜片.png" },
            { "text": "杏脯", "image": "./quiz_imgasset/杏脯.png" },
            { "text": "混合果仁", "image": "./quiz_imgasset/混合果仁.png" }
        ],
        "correctAnswer": "蔬菜片",
        "explanation": "蔬菜片低卡且富含纖維，有助於穩定血糖水平。"
    },
    {
        "question": "如果想要控制體重，哪種零食最合適？",
        "options": [
            { "text": "爆谷", "image": "./quiz_imgasset/爆谷.png" },
            { "text": "消化餅", "image": "./quiz_imgasset/消化餅.png" },
            { "text": "蘋果片", "image": "./quiz_imgasset/蘋果片.png" },
            { "text": "混合果仁", "image": "./quiz_imgasset/混合果仁.png" }
        ],
        "correctAnswer": "蘋果片",
        "explanation": "蘋果片低熱量且富含纖維，能幫助控制體重。"
    },
    {
        "question": "哪種零食能幫助改善失眠問題？",
        "options": [
            { "text": "龍眼乾", "image": "./quiz_imgasset/龍眼乾.png" },
            { "text": "爆谷", "image": "./quiz_imgasset/爆谷.png" },
            { "text": "提子乾", "image": "./quiz_imgasset/提子乾.png" },
            { "text": "消化餅", "image": "./quiz_imgasset/消化餅.png" }
        ],
        "correctAnswer": "龍眼乾",
        "explanation": "龍眼乾有助於安神，能改善睡眠質量。"
    },
    {
        "question": "如果需要提高腦力，哪種零食最合適？",
        "options": [
            { "text": "混合果仁", "image": "./quiz_imgasset/混合果仁.png" },
            { "text": "蘋果片", "image": "./quiz_imgasset/蘋果片.png" },
            { "text": "紫菜", "image": "./quiz_imgasset/紫菜.png" },
            { "text": "爆谷", "image": "./quiz_imgasset/爆谷.png" }
        ],
        "correctAnswer": "混合果仁",
        "explanation": "混合果仁中的 omega-3 脂肪酸有助於提高腦功能。"
    },
    {
        "question": "如果常常出現水腫，哪種零食能幫助改善？",
        "options": [
            { "text": "菜片", "image": "./quiz_imgasset/蔬菜片.png" },
            { "text": "提子乾", "image": "./quiz_imgasset/提子乾.png" },
            { "text": "龍眼乾", "image": "./quiz_imgasset/龍眼乾.png" },
            { "text": "杏脯", "image": "./quiz_imgasset/杏脯.png" }
        ],
        "correctAnswer": "蔬菜片",
        "explanation": "蔬菜片富含纖維且低鈉，有助於降低水腫。"
    },
    {
        "question": "若想提升能量，應選擇哪種零食？",
        "options": [
            { "text": "蘋果片", "image": "./quiz_imgasset/蘋果片.png" },
            { "text": "提子乾", "image": "./quiz_imgasset/提子乾.png" },
            { "text": "爆谷", "image": "./quiz_imgasset/爆谷.png" },
            { "text": "龍眼乾", "image": "./quiz_imgasset/龍眼乾.png" }
        ],
        "correctAnswer": "提子乾",
        "explanation": "提子乾含有天然糖分，可以快速補充能量。"
    },
    {
        "question": "若想提高抗氧化能力，應選擇哪種零食？",
        "options": [
            { "text": "紫菜", "image": "./quiz_imgasset/紫菜.png" },
            { "text": "龍眼乾", "image": "./quiz_imgasset/龍眼乾.png" },
            { "text": "提子乾", "image": "./quiz_imgasset/提子乾.png" },
            { "text": "消化餅", "image": "./quiz_imgasset/消化餅.png" }
        ],
        "correctAnswer": "提子乾",
        "explanation": "提子乾富含抗氧化劑，有助於提高身體的抗氧化能力。"
    }
];

questions.sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
const maxQuestion = 10;

document.getElementById("qCorrect").textContent = `第 ${currentQuestion + 1} 條題目，共 ${maxQuestion} 條。`;

function sort(a) {
    a.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const progressBar = document.getElementById("progress-bar");

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    progressBar.style.width = `${(currentQuestion / maxQuestion) * 100}%`;

    questions[currentQuestion].options.forEach((option, index) => {
        const optionContainer = document.createElement('div');
        optionContainer.classList.add('option-container');

        const input = document.createElement('input');
        input.type = "radio";
        input.name = "123";
        input.value = option.text;
        input.id = option.text;
        input.dataset.index = index + 1;

        const label = document.createElement('label');
        label.htmlFor = option.text;
        label.dataset.number = index + 1;

        const img = document.createElement('img');
        img.src = option.image;
        img.alt = option.text;

        const textSpan = document.createElement('span');
        textSpan.textContent = option.text;

        label.append(img, textSpan);
        optionContainer.append(input, label);
        optionsElement.appendChild(optionContainer);
    });
}

function selectAnswer() {
    const selectedOption = document.querySelector('input[name="123"]:checked');
    if (!selectedOption) return;

    const selectedAnswer = selectedOption.value;
    const audio = new Audio();

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        score++;
        audio.src = 'soundfx/correct.mp3';
        document.getElementById("result").textContent = "✅ 答對了！做得好！";
    } else {
        audio.src = 'soundfx/incorrect.mp3';
        document.getElementById("result").textContent = "❌ 答錯了。";
    }

    audio.play();
    document.getElementById("explanation-text").textContent = `${document.getElementById("result").textContent} ${questions[currentQuestion].explanation}`;
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
        document.getElementById("progress-bar").style.width = `100%`;
        document.getElementById("submit").textContent = "";
        document.getElementById("restart").style.display = "block";

        const finishAudio = new Audio('soundfx/finish.mp3');
        finishAudio.play();
    }
}

function checkAnswer() {
    selectAnswer();
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    questions.sort(() => Math.random() - 0.5);
    document.getElementById("end").textContent = "";
    document.getElementById("restart").style.display = "none";
    document.getElementById("qCorrect").textContent = `第 ${currentQuestion + 1} 條題目，共 ${maxQuestion} 條。`;
    loadQuestion();
    document.getElementById("submit").innerHTML = '<button onclick="checkAnswer()">提交答案</button>';
    document.querySelector('.start-page').style.display = 'block';
    document.querySelector('.quiz-container').style.display = 'none';
}

function startQuiz() {
    document.querySelector('.start-page').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
}

function testFood() {
    const motors = ['motor1', 'motor2'];
    const randomMotor = motors[Math.floor(Math.random() * motors.length)];
    spinMotor(randomMotor); // Trigger a random motor spin
}

function spinMotor(motor_id) {
    fetch('http://172.16.5.207:5000/dispense', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ motor_id: motor_id })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || data.error);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

for (let i = 0; i < questions.length; i++) {
    sort(questions[i].options);
}

loadQuestion();

document.addEventListener('keydown', function(event) {
    if (['1', '2', '3', '4'].includes(event.key)) {
        event.preventDefault();
        const optionInput = document.querySelector(`input[data-index="${event.key}"]`);
        if (optionInput) optionInput.click();
    } else if (event.key === 'Enter') {
        const modal = document.getElementById("explanation-modal");
        if (modal.style.display === "block") {
            closeModal();
        } else if (document.querySelector('.start-page').style.display !== 'none') {
            startQuiz();
        } else {
            checkAnswer();
        }
    } else if (event.key === '0') {
        document.querySelector('.start-page').style.display = 'block';
        document.querySelector('.quiz-container').style.display = 'none';
        restartQuiz();
    } else if (event.key === '8' || event.key === '9') {
        testFood(); // Trigger a random motor
    }
});

document.getElementById('fontSizeSlider').addEventListener('input', function() {
    const fontSize = this.value + '%';
    document.documentElement.style.fontSize = fontSize;
    document.getElementById('fontSizeSelect').value = this.value;
});

document.getElementById('fontSizeSelect').addEventListener('change', function() {
    const fontSize = this.value + '%';
    document.documentElement.style.fontSize = fontSize;
    document.getElementById('fontSizeSlider').value = this.value;
});

document.getElementById('fontSizeInput').addEventListener('input', function() {
    let value = parseInt(this.value);
    if (isNaN(value)) return;
    value = Math.max(50, Math.min(300, value));
    this.value = value;
    document.documentElement.style.fontSize = value + '%';
    document.getElementById('fontSizeSlider').value = value;
});

fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
        document.body.classList.add('fullscreen');
        fullscreenButton.textContent = '退出全屏';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        document.body.classList.remove('fullscreen');
        fullscreenButton.textContent = '全屏';
    }
});