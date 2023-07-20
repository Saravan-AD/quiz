const questions=[
    {
        question:"Who is the highest run scorer in ODI?",
        answers:[
            {text:"Sachin",correct:true},
            {text:"Kohli",correct:false},
            {text:"Dhoni",correct:false},
            {text:"Ponting",correct:false},
        ]
    },
    {
        question:" Which country has more world cup?",
        answers:[
            {text:"India",correct:false},
            {text:"South Africa",correct:false},
            {text:"Australia",correct:true},
            {text:"New Zealand",correct:false},
        ]
    },
    {
        question:"Who was Indias first t20 captain?",
        answers:[
            {text:"Dhoni",correct:false},
            {text:"Ganguly",correct:false},
            {text:"Sehwag",correct:true},
            {text:"Dravid",correct:false},
        ]
    },
    {
        question:"Who has the fastest test century?",
        answers:[
            {text:"Misbah-ul-haq",correct:false},
            {text:"Brendon McCullum",correct:true},
            {text:"Sehwag",correct:false},
            {text:"Gayle",correct:false},
        ]
    },
    {
        question:"Who has the fastest odi century for India?",
        answers:[
            {text:"Sehwag",correct:false},
            {text:"Sachin",correct:false},
            {text:"Rohit",correct:false},
            {text:"Kohli",correct:true},
        ]
    }
];

const questionE=document.getElementById("question");
const ansButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next");

let qindex=0;
let score=0;

function startq(){
    qindex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQ();
}
function showQ(){
    resetState();
    let Cques=questions[qindex];
    let qno=qindex+1;
    questionE.innerHTML=qno+". "+Cques.question;

     Cques.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ansButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
     });
}

function resetState(){
    nextButton.style.display="none";
    while(ansButton.firstChild){
        ansButton.removeChild(ansButton.firstChild)
    }
}

function selectAnswer(e) {
    const sBtn=e.target;
    const isCorrect=sBtn.dataset.correct==="true";
    if(isCorrect){
        sBtn.classList.add("correct");
        score++;
    }
    else{
        sBtn.classList.add("incorrect");
    }
    Array.from(ansButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true; 
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionE.innerHTML=`Score ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    qindex++;
   if(qindex<questions.length){
    showQ();
   }
   else{
    showScore();
   }
}
nextButton.addEventListener("click",()=>{
    if(qindex<questions.length){
       handleNextButton(); 
    }
    else{
        startq();
    }
})
startq();