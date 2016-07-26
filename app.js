
//object 
var kindOfDrinks = {
    STRONG: 'STRONG',
    SALTY: 'SALTY',
    BITTER: 'BITTER',
    SWEET: 'SWEET',
    FRUITY: 'FRUITY'

};

//constructor
var Bartender = function() {
    this.questionList = new QuestionList();
};

//method prototype
Bartender.prototype.takeOrder = function() {
    var order = new Order();
    var questions = this.questionList.questions;
    for (var i=0; i<questions.length; i++) {
        var question = questions[i];
        var preference = question.getPreference();
        order.addPreference(preference);
    }
    return order;
};

//constructor
var Question = function(kindOfDrink, text) {
    this.kindOfDrink = kindOfDrink;
    this.text = text;
};

//method prototype
Question.prototype.getPreference = function() {
    // TODO: Find a better way to get access to the select
    var select = $('.' + this.kindOfDrink);
    var isLiked = select.val() === "true";
    var preference = new Preference(this.kindOfDrink, isLiked);
    return preference;
};

//method prototype
Question.prototype.asHTML = function() {
    var select = (
        '<select class="' + this.kindOfDrink + '">' +
            '<option value="true">Aye</option>' +
            '<option value="false">Nay</option>' +
        '</select>'
    );
    return '<li>' + this.text + ' ' + select + '</li>';
};

//constructor
var QuestionList = function() {
    this.questions = [];
};

//method prototype
QuestionList.prototype.addQuestion = function(question) {
    this.questions.push(question);
};

//method prototype
QuestionList.prototype.asHTML = function() {
    return this.questions.reduce(function(prev, question) {
        return prev + question.asHTML();
    }, '');
};

//constructor
var Order = function() {
    this.preferences = {};
};

//method prototype
Order.prototype.addPreference = function(preference) {
    this.preferences[preference.kindOfDrink] = preference;
};

//constructor
var Preference = function(kindOfDrink, isLiked) {
    this.kindOfDrink = kindOfDrink; // Whether it is strong, salty etc.
    this.isLiked = isLiked;
};

$(document).ready(function() {
    var bartender = new Bartender();

    var strongQuestion = new Question(kindOfDrinks.STRONG, 'Do ye like yer drinks strong?');
    var saltyQuestion = new Question(kindOfDrinks.SALTY, 'Do ye like it with a salty tang?');
    var bitterQuestion = new Question(kindOfDrinks.BITTER, 'Are ye a lubber who likes it bitter?');
    var sweetQuestion = new Question(kindOfDrinks.SWEET, 'Would ye like a bit of sweetness with yer poison?');
    var fruityQuestion = new Question(kindOfDrinks.FRUITY, 'Are ye one for a fruity finish?');

    bartender.questionList.addQuestion(strongQuestion);
    bartender.questionList.addQuestion(saltyQuestion);
    bartender.questionList.addQuestion(bitterQuestion);
    bartender.questionList.addQuestion(sweetQuestion);
    bartender.questionList.addQuestion(fruityQuestion);

    $('.question-list').html(bartender.questionList.asHTML());

    $('.place-order').click(function() {
        var order = bartender.takeOrder();
        console.log(order);
    });

});