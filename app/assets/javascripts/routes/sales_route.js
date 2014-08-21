// For more information see: http://emberjs.com/guides/routing/

App.SalesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('sale');
  }
});
