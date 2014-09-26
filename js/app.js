App = Ember.Application.create();

App.Router.map(function() {
	this.resource('/');
	this.resource('home');
	this.resource('about');
	this.resource('education');
	this.resource('membership');
	this.resource('sponsors');// put your routes here
});

