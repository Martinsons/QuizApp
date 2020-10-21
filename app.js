const quizData = [{
  question: 'Nosauciet Latvijas galvaspilsētu?',
  a: 'Liepāja',
  b: 'Daugavpils',
  c: 'Rīga',
  d: 'Valmiera',
  correct: 'c'
}, {
  question: 'Nosauciet Latvijas prezidentu?',
  a: 'Vaira Vīķe-Freiberga',
  b: 'Kārlis Ulmanis',
  c: 'Andris Bērziņš',
  d: 'Egils Levits',
  correct: 'd'
}, {
  question: 'Nosauciet garāko upi Latvijā?',
  a: 'Gauja',
  b: 'Venta',
  c: 'Daugava',
  d: 'Ogre',
  correct: 'a'
}, {
  question: 'Nosauciet Latvijas dziļāko ezeru?',
  a: 'Ušurs',
  b: 'Usmas ezers',
  c: 'Drīdzis',
  d: 'Lielais Gusena ezers',
  correct: 'c'
}];

const answerEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('#question');
const quiz = document.querySelector('#quiz');
const card = document.querySelector('.card');
const aText = document.querySelector('#a-text');
const bText = document.querySelector('#b-text');
const cText = document.querySelector('#c-text');
const dText = document.querySelector('#d-text');
const submit = document.querySelector('#submit');

let currentQuiz = 0;  //pasreizejais jautajums
let score = 0;  //rezultats

loadQuiz(); //funkcijas palaisana

function loadQuiz(){

  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;

}

//funkcija, lai parbauditu vai ir atzimeta atbilde
function getSelected(){
  
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });

  return answer;
}

//funkcija, kas kad esi atbildejis, nakamo jautajumu ielade bez atzimes uzreiz
function deselectAnswers(){
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// Submit poga, lai atbildetu un ieladetu nakamo jautajumu
submit.addEventListener('click', () => {

  const answer = getSelected();

  if(answer){
    if(answer === quizData[currentQuiz].correct){
      score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
      loadQuiz();  //nakamais jautajums
    } else {
      //Show how many was correct, on different design, show results
      quiz.innerHTML = `<h3>Pareizas atbildes: ${score}/${quizData.length}</h3> <button onclick="location.reload()">Spēlēt vēlreiz!</button>`;
    }
  } else {
    alert('Izvelieties atbildi!');  //Ja nav izveleta atbilde
  }

  

  
})