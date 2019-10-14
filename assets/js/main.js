var answerIndexTracker = [];

var arrayOfQuestions = [
    "Which of the following is true about variable naming conventions in JavaScript?",
    "Which of the following is the correct syntax to print a page using JavaScript?",
    "Which built-in method returns the character at the specified index?",
    "Which built-in method returns the calling string value converted to lower case?",
    "Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
    "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
    "Which of the following function of String object returns the calling string value converted to upper case?",
    "Which of the following function of String object creates an HTML hypertext link that requests another URL?",
    "Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
    "Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
];

var arrayOfAnswers = [
    {
        "A" : "JavaScript is a lightweight, interpreted programming language.",
        "B" : "JavaScript is designed for creating network-centric applications.",
        "C" : "JavaScript is complementary to and integrated with Java.",
        "D" : "All of the above",
        "correct_answer" : "JavaScript is designed for creating network-centric applications.",
    },
    {
        "A" : "window.print();",
        "B" : "browser.print();",
        "C" : "navigator.print();",
        "D" : "document.print();",
        "correct_answer" : "document.print();",
    },
    {
        "A" : "characterAt()",
        "B" : "getCharAt()",
        "C" : "charAt()",
        "D" : "None of the above.",
        "correct_answer" : "characterAt()",
    },
    {
        "A" : "toLowerCase()",
        "B" : "toLower()",
        "C" : "changeCase(case)",
        "D" : "None of the above.",
        "correct_answer" : "changeCase(case)",
    },
    {
        "A" : "charAt()",
        "B" : "charCodeAt()",
        "C" : "concat()",
        "D" : "indexOf()",
        "correct_answer" : "charAt()",
    },
    {
        "A" : "slice()",
        "B" : "split()",
        "C" : "replace()",
        "D" : "search()",
        "correct_answer" : "split()",
    },
    {
        "A" : "toLocaleUpperCase()",
        "B" : "toUpperCase",
        "C" : "toString()",
        "D" : "substring()",
        "correct_answer" : "substring()",
    },
    {
        "A" : "link()",
        "B" : "sub()",
        "C" : "sup()",
        "D" : "small()",
        "correct_answer" : "sup()",
    },
    {
        "A" : "indexOf()",
        "B" : "join()",
        "C" : "lastIndexOf()",
        "D" : "map()",
        "correct_answer" : "indexOf()",
    },
    {
        "A" : "pop()",
        "B" : "push()",
        "C" : "reduce()",
        "D" : "reduceRight()",
        "correct_answer" : "reduceRight()",
    },
]

var answerDetails = [
    {
        "AnswerDetail" : "Details 1"
    },
    {
        "AnswerDetail" : "Details 2"
    },
    {
        "AnswerDetail" : "Details 3"
    },
    {
        "AnswerDetail" : "Details 4"
    },
    {
        "AnswerDetail" : "Details 5"
    },
    {
        "AnswerDetail" : "Details 6"
    },
    {
        "AnswerDetail" : "Details 7"
    },
    {
        "AnswerDetail" : "Details 8"
    },
    {
        "AnswerDetail" : "Details 9"
    },
    {
        "AnswerDetail" : "Details 10"
    },
]

function showCurrectAnswer(id){
    $('#correctAnswer'+id).toggleClass("toggle");
}

function validateAnswer(id,index){
    $('.answer'+index).removeClass('answer');
    if(arrayOfAnswers[index].correct_answer === $('#answer'+id).html()){
        $('#option'+id).addClass('selectedRight');
    }
    else{
        $('#option'+id).addClass('selectedWrong');
    }
}

function checkAnswer(id,index){
    for(var i=0; i<answerIndexTracker.length; i++){
        if(answerIndexTracker[i]==index)
            return;
    }
    answerIndexTracker[answerIndexTracker.length] = index;
    validateAnswer(id,index);
}

$(document).ready(function(){
    var data = '';
    var temp = 0;
    $('#questionsContainer').empty();
    for(var i=0; i<arrayOfQuestions.length; i++){
        data = 
        "<div class='row card mt-5 mb-5 shadow'>"+
            "<div class='col-lg-12 col-md-12 col-sm-12 card-body'>"+
                "<div class='row' id='questionBlock'>"+
                    "<div class='col-lg-12 col-md-12 col-sm-12'>"+
                        "<div class='question'>"+
                            "Q."+(i+1)+" "+arrayOfQuestions[i]+
                        "</div>"+
                    "</div>"+
                "</div>"+
                
                "<div class='row' id='answerBlock'>"+
                    "<div class='col-lg-12 col-md-12 col-sm-12' onclick='checkAnswer("+temp+","+i+")'>"+
                        "<div class='answer answer"+i+"' id='option"+temp+"'>"+
                            "<div class='mt-2 mb-2'>"+
                                "A. <span id='answer"+(temp++)+"'>"+arrayOfAnswers[i].A+"</span>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                    "<div class='col-lg-12 col-md-12 col-sm-12' onclick='checkAnswer("+temp+","+i+")'>"+
                        "<div class='answer answer"+i+"' id='option"+temp+"'>"+
                            "<div class='mt-2 mb-2'>"+
                                "B. <span id='answer"+(temp++)+"'>"+arrayOfAnswers[i].B+"</span>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                    "<div class='col-lg-12 col-md-12 col-sm-12' onclick='checkAnswer("+temp+","+i+")'>"+
                        "<div class='answer answer"+i+"' id='option"+temp+"'>"+
                            "<div class='mt-2 mb-2'>"+
                                "C. <span id='answer"+(temp++)+"'>"+arrayOfAnswers[i].C+"</span>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                    "<div class='col-lg-12 col-md-12 col-sm-12' onclick='checkAnswer("+temp+","+i+")'>"+
                        "<div class='answer answer"+i+"' id='option"+temp+"'>"+
                            "<div class='mt-2 mb-2'>"+
                                "D. <span id='answer"+(temp++)+"'>"+arrayOfAnswers[i].D+"</span>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+

                "<div class='row' id='showAnswer'>"+
                    "<div class='col-lg-12 col-md-12 col-sm-12'>"+
                        "<button class='btn btn-primary float-right' onclick='showCurrectAnswer("+i+")'><i class='fa fa-exchange'></i><span class='ml-2'>Show Answer</span></button>"+
                    "</div>"+
                "</div>"+
                "<div class='row toggle' id='correctAnswer"+i+"'>"+
                    "<div class='col-lg-12 col-md-12 col-sm-12 pt-2 pr-5'>"+
                        "<h5 style='display: inline; font-weight: 600;'>Correct Answer: </h5><span style='font-size: 20px;'>"+arrayOfAnswers[i].correct_answer+"</span><br>"+
                        "<h5 style='margin: 0px; padding: 0px; font-weight: 600;'>Answer Details:</h5><br>"+answerDetails[i].AnswerDetail;
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>"
        $('#questionsContainer').append(data);
    }
});