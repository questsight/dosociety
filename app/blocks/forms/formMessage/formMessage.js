function textAreaHeight(textarea) {
        if (!textarea._tester) {
            var ta = textarea.cloneNode();
            ta.style.position = 'absolute';
            ta.style.zIndex = -2000000;
            ta.style.visibility = 'hidden';
            ta.style.height = '1px';
	        ta.id = '';
	        ta.name = '';
            textarea.parentNode.appendChild(ta);
            textarea._tester = ta;
            textarea._offset = ta.clientHeight - 22;
        }
	    if (textarea._timer) clearTimeout(textarea._timer);
        textarea._timer = setTimeout(function () {
            textarea._tester.style.width = textarea.clientWidth + 'px';
            textarea._tester.value = textarea.value;
            if (textarea._tester.scrollHeight - textarea._offset < 250)
                {
                  textarea.style.height = (textarea._tester.scrollHeight - textarea._offset) + 'px';
                }
              else
                  {
                    textarea.style.height = '250px';
                  };        
            jQuery(document).ready(function(){
              var h = jQuery("div.contentDialog__footer").height();
              h = jQuery(document).height() - h - 155;
              jQuery(".contentDialog__screenWrap").height(h);
              jQuery(".contentDialog__screen").css('max-height',h);
             
              
              
            });
            jQuery(function(){
              var screen = jQuery('.contentDialog__screen');
              screen.scrollTop(screen.prop('scrollHeight'));
              });
           textarea._timer = false;
        }, 1);
    }
