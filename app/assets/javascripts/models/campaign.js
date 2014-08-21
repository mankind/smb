// for more details see: http://emberjs.com/guides/models/defining-models/

App.Campaign = DS.Model.extend({
  name:  DS.attr('string'),
  objective: DS.attr('string'),
  goal: DS.attr('string'),
  targetLocality: DS.attr('string'),
  targetDemographic: DS.attr('string'),
  hashTag: DS.attr('string'),
  allSocialNetworks: DS.attr('boolean'),
  active: DS.attr('boolean'),
  twitter: DS.attr('boolean'),
  facebook: DS.attr('boolean'),
  delayBy: DS.attr('date'),
  startOn: DS.attr('date'),
  endOn: DS.attr('date')
});

App.Campaign.FIXTURES = [
  {
    id:  1,
    name: 'launch',
    objective: 'collect emails',
    goal: '100 emails',
    targetLocality: 'London',
    targetDemographic: 'Asian women',
    active: 'true',
    allSocialNetworks:  'true',
    startOn: new Date(" December 20, 2013, 11:20"),
    endOn: new Date(" December 26, 2013, 11:20")
  },
    {
    id:  2,
    name: 'Free trial',
    objective: 'Convert emails to free trials',
    goal: ' 30 free trial account',
    targetLocality: 'London',
    targetDemographic: 'Asian women',
    active: 'true',
    allSocialNetworks:  'false',
    startOn: new Date("28, December, 2013, 11:20"),
    endOn: new Date("05, January, 2014, 11:20")
  },
  
   {
    id:  3,
    name: 'Get paying users',
    objective: 'convert free trial users to paying users',
    goal: '10 paying users',
    targetLocality: 'London',
    targetDemographic: 'Asian women',
    active: 'true',
    allSocialNetworks:  'false',
    startOn: new Date("05, February, 2014, 11:20"),
    endOn: new Date("10, February, 2014, 11:20")
  },
   {
    id:  4,
    name: 'Get Referrals',
    objective: 'using social proof to collect emails of new users',
    goal: '100 emails',
    targetLocality: 'London',
    targetDemographic: 'Asian women',
    active: 'true',
    allSocialNetworks:  'true',
    startOn: new Date("05, May, 2014, 11:20"),
    endOn: new Date("10, June, 2014, 11:20")
  }
  
];
