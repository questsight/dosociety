jQuery(document).ready(function () {
  var hS = jQuery(".contentSidebar__screen").height();
  var hD = document.body.clientHeight - 65;
  var hF = document.body.clientHeight - 220;
  if(hS > hD){
    jQuery(".contentFriend__screen").height(hS-120); 
  }
  else {
    jQuery(".contentFriend__screen").height(hF); 
  }
});
jQuery(window).resize(function() {
  var hS = jQuery(".contentSidebar__screen").height();
  var hD = document.body.clientHeight - 65;
  var hF = document.body.clientHeight - 220;
  if(hS > hD){
    jQuery(".contentFriend__screen").height(hS-120); 
  }
  else {
    jQuery(".contentFriend__screen").height(hF); 
  }
});

jQuery(document).ready(function () {
   jQuery('.sidebar__friendList__plus').click(function(){
    jQuery('.formFriendList').show();
  });
    jQuery('.formFriendList__button').click(function(){
    jQuery('.formFriendList').hide();
  });
  
});

