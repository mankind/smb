// For more information see: http://emberjs.com/guides/routing/

App.MarketingRoute = Ember.Route.extend({
  redirect: function() {
    return this.transitionTo('campaigns');
  }
});
