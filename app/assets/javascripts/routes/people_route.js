App.PeopleRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('prospect');
  },
  
  setupController: function(controller, model){   
    this.controllerFor('prospects').set('model', model);
  },
  
  redirect: function() {
    return this.transitionTo('prospects');
  }
});