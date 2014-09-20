import Ember from 'ember';

export default Ember.Controller.extend({
  setup: function(){
    console.log(this);
  }.on('init')
});
