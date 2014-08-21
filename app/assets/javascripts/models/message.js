// for more details see: http://emberjs.com/guides/models/defining-models/

App.Message = DS.Model.extend({
  subject: DS.attr('string'),
  from: DS.attr('string'),
  to: DS.attr('string'),
  body: DS.attr('string'),
  date: DS.attr('date'),
  spam: DS.attr('boolean'),
  receivedAt: DS.attr('date'),
  sentAt: DS.attr('date'),
  
  inbox: function() {
       a = this.get('receivedAt');
       if (a != null) {
         return a;
       } 
  }.property("receivedAt")
  
});



App.Message.FIXTURES = [
  {
    id: 1,
    subject: "Thank you for signing up",
    from: "tom@simp.com",
    to: "user@example.com",
    date: new Date(),
    body: "We are happy to see you sign up. Hope you enjoy the service. The suport team is available 24/7 to help you",
    spam: false,
    sentAt: new Date(),
    receivedAt: ''
  }, 
  {
    id: 2,
    subject: "What is your experience so far",
    from: "tom@simp.com",
    to: "user@example.com",
    date: new Date(),
    body: "We thought we should ask what your experince with the product has been like after 2 weeks of contineous usage",
    spam: false,
    sentAt: new Date(),
    receivedAt: ''
  }, 
  {
    id: 3,
    subject: "Customer feedback",
    from: "user@example.com",
    to: "tom@simp.com",
    date: new Date(),
    body: "We noticed in a drop in your usage of the product. You haven't longed in for about a week, is there something we can do to help you return",
    spam: false,
    sentAt: '',
    receivedAt: new Date()
  }, 
    {
    id: 4,
    subject: "Lacking features",
    from: "user@example.com",
    to: "tom@simp.com.com",
    date: new Date(),
    body: "Thanks for reaching out to us. Your product is great but for our use case it is a few features. If you can add those features we will be excited to use the product again",
     spam: false,
     sentAt: '',
     receivedAt: new Date()
  }
 ];
