App.WeekDayHelper = Ember.Handlebars.registerBoundHelper('weekday', function(date) {
   //return moment.utc(date.toString()).format('ddd, hh:mm:ss a'); 
  
    //Dec 19th 2013, 1:27:32 pm
   //return moment().format('MMMM Do YYYY, h:mm:ss a');
  
   return moment().format('Do MMMM');
});