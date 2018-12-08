jQuery(document).ready(function(){
  var flag = 0;
  jQuery('.buttonSidebar').click(function(){
    if (flag == 0){
      jQuery('.hidden-smNo').removeClass('hidden-xs');
      jQuery('.hidden-smNo').removeClass('hidden-sm');
      jQuery('.content').css('opacity','0.3');
      jQuery('.footer').css('opacity','0.3');
      jQuery(this).css('right','195px'); 
      jQuery(this).css('transform','rotate(180deg)');
      jQuery('.buttonNavigator').hide(600);
      jQuery('.sidebar').show(600);
      flag = 1;
      
      }
      else {
        jQuery('.hidden-smNo').addClass('hidden-xs');
        jQuery('.hidden-smNo').addClass('hidden-sm');
        jQuery('.content').css('opacity','1');
        jQuery('.footer').css('opacity','1');
        jQuery(this).css('right','0');
        jQuery(this).css('transform','rotate(0deg)');
        jQuery('.buttonNavigator').show(600);
        jQuery('.sidebar').hide(600);
        flag = 0;
      }
  });
});
jQuery(window).resize(function() {
  jQuery('.sidebar').css('display','inherit');
});
