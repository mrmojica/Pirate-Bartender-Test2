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


    var bartender = new Bartender();
/*    this.questionList = {}


       this.takeOrder = function() {

    var order = new Order();
    var questions = this.questionList.questions;
    for (var i=0; i<questions.length; i++) {
        var question = questions[i];
        var preference = question.getPreference();
        order.addPreference(preference);
    }
    return order;
};
-------------------------------------------
var order = {
	this.preferences = {};
    this.addPreference = function(preference) {
    this.preferences[preference.kindOfDrink] = preference;
};
};

}


var Order = function() {
    this.preferences = {};
};

Order.prototype.addPreference = function(preference) {
    this.preferences[preference.kindOfDrink] = preference;
};



*/