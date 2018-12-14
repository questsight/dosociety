jQuery(document).ready(function () {
  var w = jQuery(".contentProfile__avatar").innerWidth();
  jQuery(".contentProfile__button").innerWidth(w); 
});
jQuery(window).resize(function() {
  var w = jQuery(".contentProfile__avatar").innerWidth();
  jQuery(".contentProfile__button").innerWidth(w); 
});