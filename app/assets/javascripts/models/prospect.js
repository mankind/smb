// for more details see: http://emberjs.com/guides/models/defining-models/

App.Prospect = DS.Model.extend({
  name: DS.attr('string'),
  company: DS.attr('string'),
  website: DS.attr('string'),
  location: DS.attr('string'),
  interest: DS.attr('string'),
  phone: DS.attr('string'),
  twitter: DS.attr('string'),
  lastTweet: DS.attr('string'),
  facebook: DS.attr('string'),
  lastFacebookComment: DS.attr('string'),
  google: DS.attr('string'),
  linkedin: DS.attr('string'),
  referrerUrl: DS.attr('string'),
  gender: DS.attr('string'),
  position: DS.attr('string'),
  employmentHistory: DS.attr('string'),
  language: DS.attr('string'),
  image: DS.attr('string')
});

App.Prospect.FIXTURES = [
  {
    id: 1,
  name: 'John Smith',
  company: 'Skillster',
  position: 'Sales Rep',
  employmentHistory: 'Mind Go',
  website: 'www.mikejo.com',
  location: 'Leeds',
  interest: 'dancing',
  twitter: '@mikej',
  lastTweet: 'At the train station',
  facebook: 'mike jones',
  lastFacebookComment: 'really enjoyed watching man-u',
  google: 'Mike Jones',
  linkedin: 'Mike Jones',
  referrerUrl: '',
  gender: 'male',
  language: 'english',
  image: 'data:image/jpeg;base64,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'
},
 
  {
    id: 2,
  name: 'Maria Smith',
  company: 'Skillster',
  position: 'Sales Rep',
  employmentHistory: 'Mind Go',
  website: 'www.mikejo.com',
  location: 'Leeds',
  interest: 'dancing',
  twitter: '@mikej',
  lastTweet: 'At the train station',
  facebook: 'mike jones',
  lastFacebookComment: 'really enjoyed watching man-u',
  google: 'Mike Jones',
  linkedin: 'Mike Jones',
  referrerUrl: '',
  gender: 'male',
  language: 'english',
  image: 'http://img.wonderhowto.com/img/64/29/63475321575849/0/draw-female-face-with-hair.1280x600.jpg'
},
  
  {
    id: 3,
  name: 'Kim Sung',
  company: 'Boo',
  position: 'Programmer',
  employmentHistory: 'Yehuapp',
  website: 'www.boo.com',
  location: 'scunthorpe',
  interest: 'cooking',
  twitter: '@jh',
  lastTweet: 'making sushi',
  facebook: 'Jin Hua',
  lastFacebookComment: 'watching bruce lee enter the dragon',
  google: 'Jin Hua',
  linkedin: 'Jin Hua',
  referrerUrl: '',
  gender: 'male',
  language: 'chinese',
  image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTm98NIUanuVUjNqc_6m_up5JlF96ecToyftcdxP2lENsD0Bu0sBw'
}
  
];