//object 
var kindOfDrinks = {
    STRONG: 'STRONG',
    SALTY: 'SALTY',
    BITTER: 'BITTER',
    SWEET: 'SWEET',
    FRUITY: 'FRUITY'

};


// Bartender object, make drink method, get preferences

Bartender
function Bartender() {
	this.questionList = QuestionList();
}

Bartender.prototype.createOrder = function() {
	var order = new Order();
};

//question list
function Question() {
	this.question = []
};

//add question to array
Question.prototype.addQuestion = function(question) {
	this.question.push(question);	
};

//displays question
Question.prototype.showQuestions = function() {
	for (var i = 0; i < this.question.length; i++) {
		console.log(this.question[i]);
		$(".question-list").append(this.question[i]);
	};
};

//HTML Selection

Question.prototype.addHTML = function() {
	$('.question-list').append(
		 '<select class="' + this.kindOfDrink + '">' +
            '<option value="true">Aye</option>' +
            '<option value="false">Nay</option>' +
        '</select>'



		);


}

var addText = new Question();




//Preference

//Make mixed drink

//get choices
Question.prototype.getChoices = function() {
	


};



//contains choices
function Order() {
 	this.choices = {};
};

//
Order.prototype.addChoice = function(choice) {
	//this.choices.[choice.kindOfDrink] = choice;

};

function Preference(kindOfDrink, isFavored) { 
	this.kindOfDrink = kindOfDrink;
	this.isFavored = isFavored;

};



$(document).ready(function(){


questionList.addQuestion('Do ye like yer drinks strong?');
questionList.addQuestion('Do ye like it with a salty tang?');

questionList.showQuestions();

   


});


