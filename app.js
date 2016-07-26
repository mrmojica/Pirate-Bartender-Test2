//This is an object that contains properties that has the value of the type of drink we want. 
var attributes = {
    STRONG: 'STRONG',
    SALTY: 'SALTY',
    BITTER: 'BITTER',
    SWEET: 'SWEET',
    FRUITY: 'FRUITY'
};

var bartender = new Bartender(myQuestionList);
var bartender = {
    this.questionList = myQuestionList,
    this.createDrink = function () {
        var order = new Order();
        var questions = this.questionList.questions;
        for (var i=0; i<questions.length; i++) {
        var question = questions[i];
        var preference = question.getPreference();
        order.addPreference(preference);
    }
    return order;
};

var order = new Order();
var order = {
    this.preferences = {}; 
    this.addPreference = function(preference) {
        this.preferences[preference.attribute] = preference;
};
 

var Preference = function(attribute, isLiked) {
    this.attribute = attribute;
    this.isLiked = isLiked;
};

var preference = new Preference(attribute, isLiked);    

var preference {
    this.attribute = attribute,
    this.isLiked = isLiked
}



// This is constructor function that produces the questions.



function Bartender(myQuestionList) {
    this.questionList = myQuestionList;
}

// This is a method prototype that adds a behaviour to each question object. 
Bartender.prototype.createDrink = function() {
    var order = new Order();
    var questions = this.questionList.questions;
    for (var i=0; i<questions.length; i++) {
        var question = questions[i];
        var preference = question.getPreference();
        order.addPreference(preference);
    }
    return order;
};

var Question = function(attribute, text) {
    this.attribute = attribute;
    this.text = text;
};

Question.prototype.getPreference = function() {
    // TODO: Find a better way to get access to the select
    var select = $('.' + this.attribute);
    var isLiked = select.val() === "true";
    var preference = new Preference(this.attribute, isLiked);
    return preference;
};

Question.prototype.asHTML = function() {
    var select = (
        '<select class="' + this.attribute + '">' +
            '<option value="true">Aye</option>' +
            '<option value="false">Nay</option>' +
        '</select>'
    );
    return '<li>' + this.text + ' ' + select + '</li>';
};

var QuestionList = function() {
    this.questions = [];
};

QuestionList.prototype.addQuestion = function(question) {
    this.questions.push(question);
};

QuestionList.prototype.asHTML = function() {
    return this.questions.reduce(function(prev, question) {
        return prev + question.asHTML();
    }, '');
};

var Order = function() {
    this.preferences = {};
};

Order.prototype.addPreference = function(preference) {
    this.preferences[preference.attribute] = preference;
};

var Preference = function(attribute, isLiked) {
    this.attribute = attribute; // Whether it is strong, salty etc.
    this.isLiked = isLiked;
};

$(document).ready(function() {
    var questionList = new QuestionList();

    var strongQuestion = new Question(attributes.STRONG, 'Do ye like yer drinks strong?');
    var saltyQuestion = new Question(attributes.SALTY, 'Do ye like it with a salty tang?');
    var bitterQuestion = new Question(attributes.BITTER, 'Are ye a lubber who likes it bitter?');
    var sweetQuestion = new Question(attributes.SWEET, 'Would ye like a bit of sweetness with yer poison?');
    var fruityQuestion = new Question(attributes.FRUITY, 'Are ye one for a fruity finish?');

    questionList.addQuestion(strongQuestion);
    questionList.addQuestion(saltyQuestion);
    questionList.addQuestion(bitterQuestion);
    questionList.addQuestion(sweetQuestion);
    questionList.addQuestion(fruityQuestion);

    var bartender = new Bartender(questionList);    

    $('.question-list').html(bartender.questionList.asHTML());

    $('.place-order').click(function() {
        var order = bartender.createDrink();
        console.log(order);
    });

});