App = Ember.Application.create();

App.Router.map(function() {
	this.resource('staff');
	this.resource('education');
	this.resource('membership');
	this.resource('sponsors');// put your routes here
});

