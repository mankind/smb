// For more information see: http://emberjs.com/guides/routing/

App.CampaignsRoute = Ember.Route.extend({
  model: function() {
     return this.store.find('campaign');    
  }
});
