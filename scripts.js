var slcnt = 1;
var delay = 2000;
$(document).ready(function(){
    setInterval('init_slslider()',delay);
});



function init_slslider() {

    if($('#slslider').length > 0) {
        var maxcnt = $('#slslider div').length;
        $('#slider'+slcnt).fadeOut(function(){
            

           
           
        });
        console.log(slcnt+" "+maxcnt);
        if(slcnt == maxcnt) {
            slcnt = 1;
            $('#slider'+slcnt).fadeIn(function(){
                setTimeout("$('#slslider div').css('display','block')",delay/2);
            });
        } else {
            slcnt += 1;
        }


    }

}