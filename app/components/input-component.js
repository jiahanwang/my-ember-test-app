import Ember from 'ember';

export default Ember.Component.extend({
	size: 20,
	value: null,
	userInput: null,
	inputText: null,
	textChanged: null,

	actions: {
		keyPressed() {
			// component binding by default is two-way, you cannot change it but you should do this either
			this.set('value', 'test value in keyPressed');
		}
	}
});
