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
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .
//= require bootstrap.min


var patty = document.getElementById('patty');
var show_patty = document.getElementById('show_patty')
show_patty.addEventListener("click", showPatty(), false);
function showPatty() {
  patty.style.visibility = 'visible';
}

//   var div_patty = document.getElementById('patty');
//   var textbox = document.getElementById('textbox');
//   textbox.addEventListener("focus",showbox,false);
//   function showbox() {
//       box.style.visibility = 'visible';
//    }


// $(function() {
//   $('a#show_patty').click(function(event) {
//     event.preventDefault();
//     $('div#patty').toggle();
//   });
// });