// for more details see: http://emberjs.com/guides/controllers/

App.SentController = Ember.ArrayController.extend({
  
  sentBox: function() {
      a = this.get('content');
       b = a.filter( function(record){
         c = record.get('sentAt');
           if (c !== null){
            return c;
          } //closes if    
      });
      return b;
   }.property('content.@each.sentAt')
  
});
