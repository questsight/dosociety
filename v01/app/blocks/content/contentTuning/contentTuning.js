jQuery(document).ready(function(){
  
  jQuery('#changePassword').click(function(){
    jQuery('#infinityPassword').hide();
    jQuery('#novelPassword').show();
    jQuery('#changePassword').hide();
    jQuery('#cancelPassword').show();
  });
    jQuery('#cancelPassword').click(function(){
    jQuery('#infinityPassword').show();
    jQuery('#novelPassword').hide();
    jQuery('#changePassword').show();
    jQuery('#cancelPassword').hide();
  });
  
  jQuery('#changeEmail').click(function(){
    jQuery('#infinityEmail').hide();
    jQuery('#novelEmail').show();
    jQuery('#changeEmail').hide();
    jQuery('#cancelEmail').show();
  });
    jQuery('#cancelEmail').click(function(){
    jQuery('#infinityEmail').show();
    jQuery('#novelEmail').hide();
    jQuery('#changeEmail').show();
    jQuery('#cancelEmail').hide();
  });
  
  jQuery('#changePhone').click(function(){
    jQuery('#infinityPhone').hide();
    jQuery('#novelPhone').show();
    jQuery('#changePhone').hide();
    jQuery('#cancelPhone').show();
  });
    jQuery('#cancelPhone').click(function(){
    jQuery('#infinityPhone').show();
    jQuery('#novelPhone').hide();
    jQuery('#changePhone').show();
    jQuery('#cancelPhone').hide();
  });
  
    jQuery('#changeURL').click(function(){
    jQuery('#infinityURL').hide();
    jQuery('#novelURL').show();
    jQuery('#changeURL').hide();
    jQuery('#cancelURL').show();
  });
    jQuery('#cancelURL').click(function(){
    jQuery('#infinityURL').show();
    jQuery('#novelURL').hide();
    jQuery('#changeURL').show();
    jQuery('#cancelURL').hide();
  });

});
