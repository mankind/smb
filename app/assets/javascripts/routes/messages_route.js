// For more information see: http://emberjs.com/guides/routing/

App.MessagesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('message');
  },
  
  redirect: function() {
     return this.transitionTo('inbox'); 
  }
});
