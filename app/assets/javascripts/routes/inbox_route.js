// For more information see: http://emberjs.com/guides/routing/

App.InboxRoute = Ember.Route.extend({
     setupController: function(controller, model){
        a = this.controllerFor('messages');
        //console.log('inbox', a);
        controller.set('model', a);
     }
});
