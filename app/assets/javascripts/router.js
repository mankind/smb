// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  
  this.resource('accounts', function(){
    
    this.resource('marketing', function() {
       this.resource('campaigns'); 
    });  //closes marketing
    
    this.resource('people', function() {
      
      this.resource('prospects', function() {
        this.resource('prospect', {path: ':id'});
      }); //closes prospects
      
       this.resource('contacts');      
      }); //closes people
    
    this.resource('sales');
    
    
    this.resource('messages', function() {
       //this.resource('message', { path: ':id' });
        this.resource('spams', function(){ });  //closes spams
      
        this.resource('inbox', function(){
          this.resource('singleMessage', {path: ':id'});
        });  //closes inbox

        this.resource('sent');  
     });  //closes resource messages
  
  }); //closes this.resource('accounts')
  
});
