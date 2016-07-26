
var questionList = new QuestionList();


function QuestionList() {
	this.question = []
};

// Bartender object, make drink method, get preferences


QuestionList.prototype.addQuestion = function(question) {
	this.question.push(question);	
};


QuestionList.prototype.showQuestions = function() {
	for (var i = 0; i < this.question.length; i++) {
		console.log(this.question[i]);
		$(".question-list").append(this.question[i]);
	};
};


$(document).ready(function(){


questionList.addQuestion('Do ye like yer drinks strong?');
questionList.addQuestion('Do ye like it with a salty tang?');

questionList.showQuestions();

   


});


