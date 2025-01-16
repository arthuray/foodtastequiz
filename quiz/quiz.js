// Define your questions and answers here
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
        question: "哪一種食物的來源是乾燥的根莖類？",
        options: [
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "蘿蔔乾", image: "./quiz_imgasset/蘿蔔乾.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" }
        ],
        correctAnswer: "蘿蔔乾",
        explanation: "蘿蔔乾是將蘿蔔這種根莖類蔬菜乾燥而成，常用於各種料理中，增加風味。"
    },
    {
        question: "如要增強免疫系統，哪種食物最適合？",
        options: [
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" },
            { text: "軟芝士", image: "./quiz_imgasset/軟芝士.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "紫菜含有抗氧化劑和多種營養素，能增強免疫系統，有助於抵抗疾病。"
    },
    {
        question: "哪一種食物不是乾果？",
        options: [
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
            { text: "蘿蔔乾", image: "./quiz_imgasset/蘿蔔乾.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" }
        ],
        correctAnswer: "蘿蔔乾",
        explanation: "蘿蔔乾是根莖類蔬菜的乾燥形式，而乾果通常指的是乾燥的水果，如提子乾或杏脯。"
    },
    {
        question: "如要補充維生素C，哪種食物最適合？",
        options: [
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" },
            { text: "軟芝士", image: "./quiz_imgasset/軟芝士.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" }
        ],
        correctAnswer: "杏脯",
        explanation: "杏脯是杏子的乾燥版本，含有較高的維生素C，有助於增強免疫系統和促進皮膚健康。"
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
        question: "哪一種食物是海藻類？有什麼好?",
        options: [
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "蔬菜片", image: "./quiz_imgasset/杏脯.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "海藻富含維生素、礦物質、纖維、抗氧化劑和植物蛋白，有助於維持健康、增強免疫和減肥。"
    },
    {
        question: "哪種食物對腸道有益？",
        options: [
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "蔬菜片", image: "./quiz_imgasset/蔬菜片.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "紫菜富含可溶性和不可溶性纖維，有助於調節血糖、降低膽固醇，並預防便秘。"
    },
    {
        question: "如要改善睡眠，哪種食物最適合？",
        options: [
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "蔬菜片", image: "./quiz_imgasset/蔬菜片.png" }
        ],
        correctAnswer: "龍眼乾",
        explanation: "龍眼乾具有安神功效，能減少焦慮，促進安穩睡眠"
    },
    {
        question: "如要增強免疫系統，哪種食物最適合？",
        options: [
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "紫菜富含抗氧化劑（如維生素C和維生素E）、礦物質（如鋅和鐵）和多糖類物質，有助於增強免疫細胞的功能，提升身體的抗病能力。"
    },
    {
        question: "哪種食物能增強免疫力,預防生病？",
        options: [
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" }
        ],
        correctAnswer: "提子乾",
        explanation: "提子乾中含有豐富的抗氧化劑，可以增強免疫系統"
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
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
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
        question: "哪種食物對血液健康有益？",
        options: [
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "無添加紫菜富含維他命K，有助於促進正常的血液凝固功能。"
    },
    {
        question: "如要增強免疫系統，哪種食物最適合？",
        options: [
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "紫菜富含抗氧化劑（如維生素C和維生素E）、礦物質（如鋅和鐵）和多糖類物質，有助於增強免疫細胞的功能，提升身體的抗病能力。"
    },
    {
        question: "哪種食物能提供多種微量元素，對老年人特別有益？",
        options: [
            { text: "混合果仁", image: "./quiz_imgasset/混合果仁.png" },
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "無添加紫菜富含多種微量營養素，對於老年人的整體健康非常有益。"
    },
    {
        question: "哪種食物富含維他命C，有助於提高膠原蛋白合成？",
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
        question: "哪種食物能幫助維持腸道健康，並且富含益生元？",
        options: [
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "混合果仁", image: "./quiz_imgasset/混合果仁.png" },
            { text: "消化餅", image: "./quiz_imgasset/消化餅.png" },
            { text: "蔬菜片", image: "./quiz_imgasset/蔬菜片.png" }
        ],
        correctAnswer: "消化餅",
        explanation: "消化餅富含益生元，能促進腸道內有益菌的生長，維持腸道健康。"
    },
    {
        question: "哪種食物能幫助改善心情，因其含有色氨酸？",
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
        question: "哪種食物能提供豐富的纖維，有助於降低膽固醇？",
        options: [
            { text: "提子乾", image: "./quiz_imgasset/提子乾.png" },
            { text: "爆谷", image: "./quiz_imgasset/爆谷.png" },
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" }
        ],
        correctAnswer: "爆谷",
        explanation: "爆谷中的膳食纖維有助於降低血液中的膽固醇水平，促進心血管健康。"
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
        question: "哪種食物能幫助身體抵抗感染？",
        options: [
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "混合果仁", image: "./quiz_imgasset/混合果仁.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "無添加紫菜含有豐富的維他命C，有助於增強免疫系統。"
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
        question: "哪種食物能有效緩解消化不良，富含天然酵素？",
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
        question: "哪種食物有助於降低血壓？",
        options: [
            { text: "消化餅", image: "./quiz_imgasset/消化餅.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "爆谷", image: "./quiz_imgasset/爆谷.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" }
        ],
        correctAnswer: "爆谷",
        explanation: "爆谷中的膳食纖維有助於降低血壓，促進心血管健康。"
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
        question: "哪種食物能幫助維持血糖穩定，因其含有低升糖指數？",
        options: [
            { text: "蘋果片", image: "./quiz_imgasset/蘋果片.png" },
            { text: "龍眼乾", image: "./quiz_imgasset/龍眼乾.png" },
            { text: "紫菜", image: "./quiz_imgasset/紫菜.png" },
            { text: "杏脯", image: "./quiz_imgasset/杏脯.png" }
        ],
        correctAnswer: "紫菜",
        explanation: "無添加紫菜的低升糖指數特性有助於維持血糖穩定。"
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


];

// Shuffle the questions array to randomize question order
questions.sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let maxQuestion = 10;

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
        var optionContainer = document.createElement('div');
        optionContainer.classList.add('option-container');

        var input = document.createElement('input');
        input.type = "radio";
        input.name = "123";
        input.value = option.text;
        input.setAttribute("id", option.text);
        input.setAttribute("data-index", index + 1);

        var label = document.createElement('label');
        label.setAttribute("for", option.text);
        label.setAttribute("data-number", index + 1);

        var img = document.createElement('img');
        img.src = option.image;
        img.alt = option.text;

        var textSpan = document.createElement('span');
        textSpan.textContent = option.text;

        label.appendChild(img);
        label.appendChild(textSpan);

        optionContainer.appendChild(input);
        optionContainer.appendChild(label);

        optionsElement.appendChild(optionContainer);
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
        event.preventDefault(); // Prevent the slider from adjusting
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
    } else if (event.key === '0') {
        restartQuiz(); // Restart the quiz when "0" is pressed
    }
});

// Update event listener for the font size slider
document.getElementById('fontSizeSlider').addEventListener('input', function() {
    const fontSize = this.value + '%';
    document.documentElement.style.fontSize = fontSize;
    document.getElementById('fontSizeSelect').value = this.value;
});

// Add event listener for the font size dropdown
document.getElementById('fontSizeSelect').addEventListener('change', function() {
    const value = this.value;
    const fontSize = value + '%';
    document.documentElement.style.fontSize = fontSize;
    document.getElementById('fontSizeSlider').value = value;
});

// Add event listener for the font size input field
document.getElementById('fontSizeInput').addEventListener('input', function() {
    let value = parseInt(this.value);
    if (isNaN(value)) return;
    if (value < 50) value = 50;
    if (value > 300) value = 300;
    this.value = value;
    document.documentElement.style.fontSize = value + '%';
    document.getElementById('fontSizeSlider').value = value;
});

// Fullscreen Toggle Functionality
fullscreenButton.addEventListener('click', () => {
    // Check all possible fullscreen states
    if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
    ) {
        // Request Fullscreen with vendor prefixes
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
        // Exit Fullscreen with vendor prefixes
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

console.log('Fullscreen Button:', fullscreenButton);