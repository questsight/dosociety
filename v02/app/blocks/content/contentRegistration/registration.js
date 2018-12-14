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
  jQuery('#reg').click(function(){
    jQuery('#regEmailCode').show();
    var hContentRegistration = jQuery(".contentRegistration").height();
    var hDoc = jQuery(window).height();
    if(hContentRegistration > hDoc){
      jQuery('.contentRegistration').css({'top':0, 'transform':'translate(-50%, 0)'});
    };
  });
   jQuery('.formLogin__button').click(function(){
    var hFormLogin = jQuery(".formLogin").height();
    var hDoc = jQuery(window).height();
    if(hFormLogin > hDoc){
      jQuery('.formLogin').css({'top':0, 'transform':'translate(-50%, 0)'});
    };
  }); 
  
  var hAvatarCover = jQuery(".contentRegistration__avatarCover").height();
  var wAvatarCover = jQuery(".contentRegistration__avatarCover").width();
  jQuery(".contentRegistration__avatarCover").height(wAvatarCover*1.5);
  jQuery('.contentRegistration__newFoto').css({'top':hAvatarCover - 35});
  
  var hContentRegistration = jQuery(".contentRegistration").height();
  var hFormLogin = jQuery(".formLogin").height();
  var hDoc = jQuery(window).height();
  if(hContentRegistration > hDoc){
    jQuery('.contentRegistration').css({'top':0, 'transform':'translate(-50%, 0)'});
  };
  if(hFormLogin > hDoc){
    jQuery('.formLogin').css({'top':0, 'transform':'translate(-50%, 0)'});
  };
  
});

jQuery(window).resize(function() {
  var hAvatarCover = jQuery(".contentRegistration__avatarCover img").height();
  var wAvatarCover = jQuery(".contentRegistration__avatarCover").width();
  jQuery(".contentRegistration__avatarCover").height(wAvatarCover*1.5);
  jQuery('.contentRegistration__newFoto').css({'top':hAvatarCover - 35});
  
  var hContentRegistration = jQuery(".contentRegistration").height();
  var hFormLogin = jQuery(".formLogin").height();
  var hDoc = jQuery(window).height();
  
  if(hContentRegistration > hDoc){
    jQuery('.contentRegistration').css({'top':0, 'transform':'translate(-50%, 0)'});
  }
  else {
    jQuery('.contentRegistration').css({'top':'50%', 'transform':'translate(-50%, -50%)'});
  };
  
  if(hFormLogin > hDoc){
    jQuery('.formLogin').css({'top':0, 'transform':'translate(-50%, 0)'});
  }
  else {
    jQuery('.formLogin').css({'top':'50%', 'transform':'translate(-50%, -50%)'});
  };
});


