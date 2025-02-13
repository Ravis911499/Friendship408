// Countdown Timer
function countdownTimer() {
    const targetDate = new Date("Feb 14, 2025 23:59:59").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Flirty Lines
const flirtyLines = [
    "You are my favorite notification! 💕",
    "Are you WiFi? Because I feel a strong connection! 😉",
    "You and I are like a JavaScript function – we work best together. ❤️",
    // "If you were a CSS property, you'd be 'text-align: center' – because you are the center of my world!",
    "Are you an engineer? Because you just built a bridge to my heart! 😍",
    "Are you a capacitor? Because you charge up my heart! ⚡❤️",
    "You must be an integral because you fill the space in my heart perfectly! 🥰",
    "Are you made of copper and tellurium? Because you’re Cu-Te! 😉",
    "I must be a sine wave, because I’m feeling so positive around you! 😘",
    "You and I must be parallel lines, because no matter where we go, my heart follows yours! 💕",
    "Are you a black hole? Because I’m getting irresistibly pulled toward you! 🌌",
    "You must be a magician, because every time I look at you, everyone else disappears. 🎩✨",

    "You light up my life like nobody else.",
    "Every moment with you is a treasure.",
    "You're the reason I smile every day.",
    "You light up my life like an LED in a circuit! 💡",
    "If kisses were stars, I'd give you the whole galaxy! 🌌"

];

let currentFlirtyIndex = 0;
function changeFlirtyLine() {
    currentFlirtyIndex = (currentFlirtyIndex + 1) % flirtyLines.length;
    document.getElementById("flirty-text").innerText = flirtyLines[currentFlirtyIndex];
}

// Quiz
const quizQuestions = [
    { question: "Where did we first meet?", options: ["College", "Cafe", "Library", "Park"], answer: "College" },
    { question: "What's my favorite dessert?", options: ["Ice Cream", "Brownie", "Cake", "Pizza"], answer: "Brownie" },
    { question: "What's our most unforgettable moment?", options: ["Trip", "College Event", "Birthday Surprise", "Nothing"], answer: "Birthday Surprise" },
    { question: "What's my dream destination?", options: ["Paris", "Dubai", "Switzerland", "Japan"], answer: "Dubai" }
    // { question: "Which song reminds me of you?", options: ["Love Story", "Happy Bhag Jayegi", "Hum Dum", "None of them"], answer: "Hum Dum" },
];

let quizIndex = 0, score = 0;
function startQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.classList.remove("d-none");

    if (quizIndex < quizQuestions.length) {
        const q = quizQuestions[quizIndex];
        quizDiv.innerHTML = `<h4>${q.question}</h4>` + q.options.map(option =>
            `<input type="radio" name="q${quizIndex}" value="${option}"> ${option}<br>`).join("") +
            `<button onclick="nextQuestion()">Next</button>`;
    } else {
        quizDiv.innerHTML = "<h4>Quiz Completed! 💖</h4>";
        alert(`Quiz Completed! 🎉 Your Score: ${score}/5`);
    }
}

function nextQuestion() {
    let selected = document.querySelector(`input[name="q${quizIndex}"]:checked`);
    if (selected && selected.value === quizQuestions[quizIndex].answer) score++;
    quizIndex++;
    startQuiz();
}

// Secret Message
function revealMessage() {
    document.getElementById("secret-message").classList.remove("d-none");
}

// Surprise Fireworks
function showSurprise() {
    alert("🎆 Surprise! Love and joy for you! 💖");
}

// Start Timer on Load
window.onload = countdownTimer;

