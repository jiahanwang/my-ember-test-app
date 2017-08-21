import Ember from 'ember';

export default Ember.Controller.extend({
	inputText: null,

	userInput: null,

	actions: {
		textChangedOnController(...args) {
			// event is thr last of all arguments, because of the curried params
			let event = args[args.length - 1];

			this.set('inputText', event.target.value);
		}
	}
});
