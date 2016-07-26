//object 
var attributes = {
    STRONG: 'STRONG',
    SALTY: 'SALTY',
    BITTER: 'BITTER',
    SWEET: 'SWEET',
    FRUITY: 'FRUITY'

};


// Bartender object, make drink method, get preferences

Bartender
var Bartender = function() {
	this.questionList = QuestionList();
}

Bartender.prototype.createOrder = function() {
	var order = new Order();
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



//question list
var QuestionList = function() {
	this.question = []
};

//add question to array
QuestionList.prototype.addQuestion = function(question) {
	this.question.push(question);	
};

//displays question
QuestionList.prototype.showQuestions = function() {
	for (var i = 0; i < this.question.length; i++) {
		console.log(this.question[i]);
		// $(".question-list").append(this.question[i]);
	};
};

//HTML Selection

// Question.prototype.addHTML = function() {
// 	$('.question-list').append(
// 		 '<select class="' + this.kindOfDrink + '">' +
//             '<option value="true">Aye</option>' +
//             '<option value="false">Nay</option>' +
//         '</select>'
// 		);


// }

// var addText = new Question();




//Preference

//Make mixed drink

//get choices

Question.prototype.getChoices = function() {
};



//contains choices
var Order = function() {
 	this.choices = {};
};

//
Order.prototype.addChoice = function(choice) {
	//this.choices.[choice.kindOfDrink] = choice;

};

var Preference = function(kindOfDrink, isFavored) { 
	this.kindOfDrink = kindOfDrink;
	this.isFavored = isFavored;

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





















// $(document).ready(function(){


// questionList.addQuestion('Do ye like yer drinks strong?');
// questionList.addQuestion('Do ye like it with a salty tang?');

// questionList.showQuestions();

   


// });


