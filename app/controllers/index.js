import Ember from 'ember';

export default Ember.ArrayController.extend({

 completedTasks: Ember.computed.filterBy('model', 'isCompleted', true),

 incompletedTasks: Ember.computed.filterBy('model', 'isCompleted', false),

 // ALTERNATIVE (LONGER) SYNTAX BELOW FOR COMPUTED FUNCTIONS ABOVE

 // incompletedTasks: function() {
 //  var incompletedList = [];
 //  this.get('model').forEach(function(item){
 //    if (item.get('isCompleted') === false) {
 //      incompletedList.push(item);
 //    }
 //  });
 //  return incompletedList;
 // }.property('model.@each.isCompleted'),

 // completedTasks: function() {
 //  var completedList = [];
 //  this.get('model').forEach(function(item){
 //    if (item.get('isCompleted') === true) {
 //      completedList.push(item);
 //    }
 //  });
 //  return completedList;
 // }.property('model.@each.isCompleted'),

  actions: {
    createTodo: function(){
      var item = Ember.Object.create({
        title: this.get('newTitle'),
        isCompleted: false
      });
    this.get('model').addObject(item);
    this.set('newTitle', '');
    },
    deleteTodo: function(item){
      this.get('model').removeObject(item);
    }
  }

});
