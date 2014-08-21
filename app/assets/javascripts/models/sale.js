// for more details see: http://emberjs.com/guides/models/defining-models/

/*
  --state eg open or closed
  --amount  eg Estimated Revenue
  --stage  that is filters or Sales Stages. eg won, lost, hold, negotiating, pitch
  --probability   eg Percent Probability of Closing.
  --Rating (Hot, Warm, Cold)
  -- task eg followup activity
*/
App.Sale = DS.Model.extend({
  clientName: DS.attr('string'),
  assignedTo: DS.attr('string'),
  state: DS.attr('string'),
  stage: DS.attr('string'),
  amount: DS.attr('string'),
  probability: DS.attr('string'),
  task: DS.attr('string'),
  note: DS.attr('string')
});

App.Sale.FIXTURES = [
  {
    id: 1,
    clientName: 'James Blue',
    assignedTo: 'Jennings Drew',
    state: 'open',
    stage: 'pitch',
    amount: '3000',
    probability: '40'
    
  }
];
