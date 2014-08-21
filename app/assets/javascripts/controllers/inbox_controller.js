// for more details see: http://emberjs.com/guides/controllers/

App.InboxController = Ember.ArrayController.extend({
  
    getInbox: function() {
       var result =   this.get('model').filter(function(item) {
           //console.log('item', item);
           return item.get('inbox');
        });
        //console.log('result', result);
          return result;
     }.property('model.@each.inbox')

});
