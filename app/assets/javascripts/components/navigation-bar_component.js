// for more details see: http://emberjs.com/guides/components/

App.NavigationBarComponent = Ember.Component.extend({
   tagName: 'ul',
   attributeBindings: ['data-toggle'],
   classNames: ['tabbable'],
});
