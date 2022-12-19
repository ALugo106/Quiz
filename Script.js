
class Questions {
    constructor (question, correctAnswer, answer1, answer2, answer3, answer4) {
        this.question = question;

        this.correctAnswer = correctAnswer;

        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
    }
}


const QuestionArray = [
new Questions ('Whats the difference between ID and Class?','ID starts with # while Class starts with a period','ID starts with a comma while Class starts with #','ID starts with # while Class starts with a period','ID can only be used with JavaScript','Class is exclusive to JavaScript'),
new Questions ('What is the right way to start an animation?','keyframe','import','framestart','keyframe','media'),
new Questions ('When using CSS do what do you put the content within?','{}','{}','[]','nothing','()'),
new Questions ('When stating a tag what do you put in front of it?','nothing','a period','a comma','nothing','an exclamation mark'),
new Questions ('What is the right way to change font color?','color: ;','text-color: ;','font-color: ;','background-color: ;','color: ;'),
new Questions ('What is the right way to set the background color?','background-color: ;','background-color: ;','color: ;','background-image: ;','web-color: ;'),
new Questions ('How is CSS different from JavaScript?','CSS makes the website look nice while JavaScript adds functionality','CSS and JavaScript arent different at all','JavaScript doesnt effect the HTML','JavaScript is the only one out of the two that makes use of IDs','CSS makes the website look nice while JavaScript adds functionality'),
new Questions ('CSS Stands for what?','Cascading Style Sheets','Cat Still Suck','Cyber System Style','Cascading Style Sheets','Cyber Style Script'),
new Questions ('What does HTML stand for?','Hypertext Markup Language','Hyper Told Machine Language','Hypertext Markup Language','HolographicText Machine Land','HyperTech Machine Learning'),
new Questions ('What is the correct tag to have CSS in html file?','style','style','script','css','stylesheet'),
new Questions ('Congrats You Finished the Quiz!!' , '','','','','')
]

cur = 0;

function Y() {


    document.getElementById('Top').innerHTML = QuestionArray[cur].question;
    document.getElementById('Red').innerHTML = QuestionArray[cur].answer1;
    document.getElementById('Blue').innerHTML = QuestionArray[cur].answer2;
    document.getElementById('Yellow').innerHTML = QuestionArray[cur].answer3;
    document.getElementById('Green').innerHTML = QuestionArray[cur].answer4;
}

function BVal(button) {
    if (button.innerHTML == QuestionArray[cur].correctAnswer) {
            cur = cur + 1;
            console.log(QuestionArray.length, QuestionArray[cur])
            Y()
    } else {
        
    }
 }

Y()