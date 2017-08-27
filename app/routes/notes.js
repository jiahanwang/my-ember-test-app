import Ember from 'ember';

export default Ember.Route.extend({
	renderTemplate(controller, model) {
		this.render({
			outlet: 'positionTwo'
		});
	}
});
