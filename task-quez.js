let welcome = document.getElementById("welcome");
let question = document.getElementById("question-ele");
let heading = document.getElementById("questionHead");
let optionOne = document.getElementById("optionOne");
let optionTwo = document.getElementById("optionTwo");
let optionThree = document.getElementById("optionThree");
let optionFour = document.getElementById("optionFour");
let warningMsg = document.getElementById("warningMsg");
let barProgress = document.getElementById("bar-progress");
let increament = document.getElementById("increament");
let hideOne = document.getElementById("hideOne")
let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong")
let Submission = document.getElementById("Submission");
let timer = document.getElementById("timer");
let count = 0;
let width = 0;
let inc = 1;
let correctCount = 0;
let wrongCount = 0;
let timeLeft = 10;
let interval;


const quiz = [

    {
        question: "Which language runs inside the browser?",
        options: ["Python", "Java", "JavaScript", "C"],
        answer: 2
    },

    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Markup Language",
            "Hyper Tool Markup Language"],
        answer: 0
    },

    {
        question: "CSS is used for?",
        options: [
            "Programming",
            "Styling",
            "Database",
            "Server"],
        answer: 1
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "**", "##"],
        answer: 0
    },

    {
        question: "Which keyword declares a variable?",
        options: ["int", "let", "define", "char"],
        answer: 1
    },

    {
        question: "DOM stands for?",
        options: [
            "Document Object Model",
            "Data Object Management",
            "Desktop Oriented Model",
            "Document Order Method"],
        answer: 0
    },

    {
        question: "Which event occurs when button is clicked?",
        options: [
            "mouseover",
            "change",
            "click",
            "submit"],
        answer: 2
    },

    {
        question: "Which method selects an element by id?",
        options: [
            "querySelectorAll",
            "getElementById",
            "getClass",
            "findElement"],
        answer: 1
    },

    {
        question: "JavaScript file extension?",
        options: [
            ".java",
            ".js",
            ".javascript",
            ".jsx"],
        answer: 1
    },

    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Netscape",
            "Google",
            "IBM"],
        answer: 1
    }
];



function quizQuestion(satya) {
    heading.textContent = satya.question;
    optionOne.textContent = satya.options[0];
    optionTwo.textContent = satya.options[1];
    optionThree.textContent = satya.options[2];
    optionFour.textContent = satya.options[3];
}

function nextBtn() {

    let selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        warningMsg.textContent = "Please select an option.";
        warningMsg.style.color = "red";
        return;
    }

    if (parseInt(selected.value) === quiz[count].answer) {
        correctCount++
        warningMsg.textContent = "Correct Answer";
        warningMsg.style.color = "green";
    } else {
        wrongCount++;
        warningMsg.textContent = "Wrong Answer Please Try Again";
        warningMsg.style.color = "red";
    }

    width += 8;
    barProgress.style.width = width + "vw";
    increament.textContent = inc++;
    count++;

    if (count < quiz.length) {
        selected.checked = false;
        quizQuestion(quiz[count]);
        startTimer();
    }

    if (count === 10) {
        hideOne.classList.remove("hideOne");
        hideOne.classList.add("button")
    }
}

function startBtn() {
    shuffleQuestions();
    welcome.classList.add("hide")
    question.classList.remove("hide")
    quizQuestion(quiz[count]);
    startTimer();
}


function previousBtn() {
    if (count > 0) {
        count--;
        width -= 8;
        barProgress.style.width = width + "vw";
        increament.textContent = count + 1;
        quizQuestion(quiz[count]);
    }
}

function submitBtn() {
    clearInterval(interval);
    Submission.classList.remove("Submission-card");
    question.classList.add("hide")
    correct.textContent = correctCount;
    wrong.textContent = wrongCount;
}

function restart() {
    Submission.classList.add("Submission-card");
    welcome.classList.remove("hide")
}


function startTimer() {
    clearInterval(interval);
    timeLeft = 10;
    timer.textContent = timeLeft;
    interval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(interval);
            warningMsg.textContent = "Time's Up!";
            warningMsg.style.color = "red";
            wrongCount++;
            count++;
            width += 8;
            barProgress.style.width = width + "vw";
            increament.textContent = count + 1;
            if (count < quiz.length) {
                quizQuestion(quiz[count]);
                startTimer();
            } else {
                submitBtn();
            }
        }
    }, 1000);
}


function shuffleQuestions() {
    for (let i = quiz.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = quiz[i];
        quiz[i] = quiz[j];
        quiz[j] = temp;
    }
}



