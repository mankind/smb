// for more details see: http://emberjs.com/guides/models/defining-models/

App.Ticket = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string')
});
