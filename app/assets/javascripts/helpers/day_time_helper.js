//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//new Date("20, December, 2013, 11:20")
//new Date("December 20, 2013, 11:20")
App.DayTimeHelper = Ember.Handlebars.registerBoundHelper('daytime', function(date) {
   //return moment.utc(date.toString()).format('ddd, hh:mm:ss a'); 
   return moment().format('MMM Do YYYY, h:mm:ss a');
});