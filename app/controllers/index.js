import Ember from 'ember';

export default Ember.ArrayController.extend({

 completedTasks: Ember.computed.filterBy('model', 'isCompleted', true),

 incompletedTasks: Ember.computed.filterBy('model', 'isCompleted', false),

  actions: {
    createTodo: function(){
      var item = Ember.Object.create({
        title: this.get('newTitle'),
        isCompleted: false
      });
    this.get('model').addObject(item);
    this.set('newTitle', '');
    }
  }
});
