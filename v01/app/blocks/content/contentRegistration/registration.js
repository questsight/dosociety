jQuery(document).ready(function(){
  
  jQuery('#changeSurname').click(function(){
    jQuery('#surname').hide();
    jQuery('#newSurname').show();
    jQuery('#changeSurname').hide();
    jQuery('#saveSurname').show();
  });
    jQuery('#saveSurname').click(function(){
    jQuery('#surname').show();
    jQuery('#newSurname').hide();
    jQuery('#changeSurname').show();
    jQuery('#saveSurname').hide();
  });
  
  jQuery('#changeName').click(function(){
    jQuery('#name').hide();
    jQuery('#newName').show();
    jQuery('#changeName').hide();
    jQuery('#saveName').show();
  });
    jQuery('#saveName').click(function(){
    jQuery('#name').show();
    jQuery('#newName').hide();
    jQuery('#changeName').show();
    jQuery('#saveName').hide();
  });
  
});