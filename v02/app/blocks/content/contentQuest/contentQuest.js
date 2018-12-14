jQuery(document).ready(function() {
  var wrap = jQuery(".contentQuest__circle").height()/2 - jQuery(".contentQuest__avatarxxx").height()/2; 
  var radius = jQuery(".contentQuest__circle").height()/1.8 + jQuery(".contentQuest__avatarxxx").height()/2; 
  for (i=0;i<12; i++){
    var f = 2 / 12 * i * Math.PI; 
    var left = wrap + radius * Math.sin(f) + 'px';
    var top = wrap + radius * Math.cos(f) + 'px';
    jQuery('.contentQuest__avatarxxx').eq(i).css({'top':top,'left':left}); 
  }
  jQuery('.contentQuest__buttonQuest').click(function(){
    var wrap = jQuery(".contentQuest__circle").height()/2 - jQuery(".contentQuest__avatarxxx").height()/2; 
    var radius = jQuery(".contentQuest__circle").height()/1.8 + jQuery(".contentQuest__avatarxxx").height()/2; 
    var n = 1;
	var stop = setInterval(function() {
		var s = 2 * Math.PI / 180;
        for (i=0;i<12; i++){
          var f = 2 / 12 * i * Math.PI + s * n;
          var left = wrap + radius * Math.sin(f) + 'px';
          var top = wrap + radius * Math.cos(f) + 'px';
          jQuery('.contentQuest__avatarxxx').eq(i).css({'top':top,'left':left}); 
          };
        n = n + 1;
	   }, 0)
    setTimeout(function() {
      clearInterval(stop);
    }, 3000);
    jQuery('.contentQuest__buttonQuest').hide();
    setTimeout(function() {
    jQuery('.contentQuest__tit').show();
    jQuery('.contentQuest__avatarX').show();
    jQuery('.contentQuest__buttonStart').show();
      for (i=0;i<num; i++){
        var f = 2 / num * i * Math.PI; 
        var left = wrap + radius * Math.sin(f) + 'px';
        var top = wrap + radius * Math.cos(f) + 'px';
    jQuery('.contentQuest__avatarxxx').eq(i).css({'top':top,'left':left}); 
  }

    }, 3000);
  });



jQuery(window).resize(function() {
  
  var wrap = jQuery(".contentQuest__circle").height()/2 - jQuery(".contentQuest__avatarxxx").height()/2; 
  var radius = jQuery(".contentQuest__circle").height()/1.8 + jQuery(".contentQuest__avatarxxx").height()/2; 
  for (i=0;i<12; i++){
    var f = 2 / 12 * i * Math.PI; 
    var left = wrap + radius * Math.sin(f) + 'px';
    var top = wrap + radius * Math.cos(f) + 'px';
    jQuery('.contentQuest__avatarxxx').eq(i).css({'top':top,'left':left}); 
  }
});
  });