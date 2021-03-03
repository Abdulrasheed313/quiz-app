const quizDB =[ {
    question: "Q1:What is the full form if HTML?",
    a:"Hello Text Markup Language",
    b:"Hello To My Language",
    c:"Hi To My Language",
    d:"HyperText Markup Language",
    ans:"ans4"

},
{
    question: "Q2:What is the full form if CSS?",
    a: "Casecading Style Sheet",
    b: "Casecading Style Sheep",
    c: "Ca rtoon Style Sheet",
    d: "Casecading Super Sheep",
    ans: "ans1"

},
{
    question: "Q2:What is the full form if HTTP?",
    a: "Hypertext Trensfer Product",
    b: "Hypertext Trensfer Protocols",
    c: "Hyper Trensfer Product",
    d: "Hypertext Trensfer Protocol",
    ans: "ans4"

},
{
    question: "Q2:What is the full form if JS?",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JustScript",
    d: "joScript",
    ans: "ans1"

},

];

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')
 const showScore = document.querySelector('#showScore')
var questionCount = 0;
var score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestion();

getCheckAnswer = () => {
     var answer

answers.forEach((curAnsElem) => {
if(curAnsElem.checked){
answer = curAnsElem.id;
}
});
return answer;
};

submit.addEventListener('click' , () =>{
 const checkedAnswer = getCheckAnswer();
 console.log(checkedAnswer);
 if(checkedAnswer === quizDB[questionCount].ans){
 score++;
 };
 questionCount++;

if(questionCount < quizDB.lenght  ){
    loadQuestion();
}else{
    showScore.innerHTML = `
<h3>your scored ${score}/${quizDB.length}</h3>
<button class="btn" onclick="location.relaod()">Play again</button>
`;
showScore.classList.remove('scoreArea')
}

});

