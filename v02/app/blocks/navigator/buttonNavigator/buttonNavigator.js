jQuery(document).ready(function(){
  var flag = 0;
  jQuery('.buttonNavigator').click(function(){
    if (flag == 0){
      jQuery('.hidden-xsNo').removeClass('hidden-xs');
      jQuery('.content').css('opacity','0.3');
      jQuery('.footer').css('opacity','0.3');
      jQuery(this).css('left','195px');
      jQuery(this).css('transform','rotate(180deg)');
      jQuery('.navigator').show(600);
      jQuery('.buttonSidebar').hide(600);
      flag = 1;
      
      }
      else {
        jQuery('.hidden-xsNo').addClass('hidden-xs');
        jQuery('.content').css('opacity','1');
        jQuery('.footer').css('opacity','1');
        jQuery(this).css('left','0');
        jQuery(this).css('transform','rotate(0deg)');
        jQuery('.navigator').hide(600); 
        jQuery('.buttonSidebar').show(600);
        flag = 0;
      }
  });
});
jQuery(window).resize(function() {
  jQuery('.navigator').css('display','inherit'); 
});