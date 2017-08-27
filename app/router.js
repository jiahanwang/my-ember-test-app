import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', { path: '/posts'});
  this.route('notes', { path: '/notes'});
  this.route('closure-action', { path: '/closure-action'});
});

export default Router;
