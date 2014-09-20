import Ember from 'ember';

export default Ember.ArrayController.extend({
  setup: function(){

  }.on('init'),
  actions: {
    createTodo: function(){
      var item = Ember.Object.create({
        title: this.get('newTitle')
      });
    this.get('model').addObject(item);
    this.set('newTitle', '');
    }
  }
});
