jQuery(document).ready(function() {
  var wrap = jQuery(".contentQuest__circle").height()/2 - jQuery(".contentQuest_avatarxxx").height()/2; 
  var radius = jQuery(".contentQuest__circle").height()/1.8 + jQuery(".contentQuest_avatarxxx").height()/2; 
  for (i=0;i<12; i++){
    var f = 2 / 12 * i * Math.PI; 
    var left = wrap + radius * Math.sin(f) + 'px';
    var top = wrap + radius * Math.cos(f) + 'px';
    jQuery('.contentQuest_avatarxxx').eq(i).css({'top':top,'left':left}); 
  }
  jQuery('.contentQuest__buttonQuest').click(function(){
    var f0 = 2 / 12 * 0 * Math.PI;
    var f1 = 2 / 12 * 1 * Math.PI;
    var f2 = 2 / 12 * 2 * Math.PI;
    var f3 = 2 / 12 * 3 * Math.PI;
    var f4 = 2 / 12 * 4 * Math.PI;
    var f5 = 2 / 12 * 5 * Math.PI;
    var f6 = 2 / 12 * 6 * Math.PI;
    var f7 = 2 / 12 * 7 * Math.PI;
    var f8 = 2 / 12 * 8 * Math.PI;
    var f9 = 2 / 12 * 9 * Math.PI;
    var f10 = 2 / 12 * 10 * Math.PI;
    var f11 = 2 / 12 * 11 * Math.PI;
	var s = 2 * Math.PI / 180;
	var stop = setInterval(function() {
		f0 += s;
        f1 += s;
        f2 += s;
        f3 += s;
        f4 += s;
        f5 += s;
        f6 += s;
        f7 += s;
        f8 += s;
        f9 += s;
        f10 += s;
        f11 += s;
		  var left0 =  wrap + radius * Math.sin(f0)  + 'px';
		  var top0 = wrap + radius * Math.cos(f0) + 'px';
          var left1 =  wrap + radius * Math.sin(f1)  + 'px';
		  var top1 = wrap + radius * Math.cos(f1) + 'px';
          var left2 =  wrap + radius * Math.sin(f2)  + 'px';
		  var top2 = wrap + radius * Math.cos(f2) + 'px';
          var left3 =  wrap + radius * Math.sin(f3)  + 'px';
		  var top3 = wrap + radius * Math.cos(f3) + 'px';
          var left4 =  wrap + radius * Math.sin(f4)  + 'px';
		  var top4 = wrap + radius * Math.cos(f4) + 'px';
          var left5 =  wrap + radius * Math.sin(f5)  + 'px';
		  var top5 = wrap + radius * Math.cos(f5) + 'px';
          var left6 =  wrap + radius * Math.sin(f6)  + 'px';
		  var top6 = wrap + radius * Math.cos(f6) + 'px';
          var left7 =  wrap + radius * Math.sin(f7)  + 'px';
		  var top7 = wrap + radius * Math.cos(f7) + 'px';
          var left8 =  wrap + radius * Math.sin(f8)  + 'px';
		  var top8 = wrap + radius * Math.cos(f8) + 'px';
          var left9 =  wrap + radius * Math.sin(f9)  + 'px';
		  var top9 = wrap + radius * Math.cos(f9) + 'px';
          var left10 =  wrap + radius * Math.sin(f10)  + 'px';
		  var top10 = wrap + radius * Math.cos(f10) + 'px';
          var left11 =  wrap + radius * Math.sin(f11)  + 'px';
		  var top11 = wrap + radius * Math.cos(f11) + 'px';
      jQuery('#x0').css({'top':top0,'left':left0});
      jQuery('#x1').css({'top':top1,'left':left1});
      jQuery('#x2').css({'top':top2,'left':left2});
      jQuery('#x3').css({'top':top3,'left':left3});
      jQuery('#x4').css({'top':top4,'left':left4});
      jQuery('#x5').css({'top':top5,'left':left5});
      jQuery('#x6').css({'top':top6,'left':left6});
      jQuery('#x7').css({'top':top7,'left':left7});
      jQuery('#x8').css({'top':top8,'left':left8});
      jQuery('#x9').css({'top':top9,'left':left9});
      jQuery('#x10').css({'top':top10,'left':left10});
      jQuery('#x11').css({'top':top11,'left':left11});
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
    jQuery('.contentQuest_avatarxxx').eq(i).css({'top':top,'left':left}); 
  }

    }, 3000);
  });



jQuery(window).resize(function() {
  
  var wrap = jQuery(".contentQuest__circle").height()/2 - jQuery(".contentQuest_avatarxxx").height()/2; 
  var radius = jQuery(".contentQuest__circle").height()/1.8 + jQuery(".contentQuest_avatarxxx").height()/2; 
  for (i=0;i<12; i++){
    var f = 2 / 12 * i * Math.PI; 
    var left = wrap + radius * Math.sin(f) + 'px';
    var top = wrap + radius * Math.cos(f) + 'px';
    jQuery('.contentQuest_avatarxxx').eq(i).css({'top':top,'left':left}); 
  }
});
  });