// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
// bower dependecies start
// http://stackoverflow.com/questions/16435428/rails-how-to-override-single-files-from-gem-assets-for-assetsprecompile-solv
// https://github.com/sstephenson/sprockets/issues/183
//
// require vendor
// require_directory ../../../vendor/assets/components/jquery-file-upload
//

// bower dependcies ends here
//
//= require jquery
//= require jquery_ujs

//= require handlebars
//= require ember
//= require ember-data
//= require moment
//= require_self
//= require app
//= require_tree .

// for more details see: http://emberjs.com/guides/application/
App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

