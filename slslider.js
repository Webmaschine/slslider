var slcnt = 1;
var delay = 2000;
$(document).ready(function(){
    setInterval('init_slslider()',delay);
});



function init_slslider() {

    if($('#slslider').length > 0) {
        var maxcnt = $('#slslider div').length-1;
       
        if($('#slider'+slcnt).css('opacity') == 1) {
        	
        	$('#slider'+slcnt).addClass('hide');
        	if(slcnt == maxcnt) {
	            slcnt = 1;
	        } else {
	            slcnt += 1;
	        }
        } else {
        	//$('#slider'+slcnt).removeClass('hide');
        	$('#slslider div').removeClass('hide');
        	slcnt = 1
        }
	
    }

}
