$(document).ready(function () {

    // $( "*", document.body ).click(function( event ) {
    //     event.stopPropagation();
    //     var domElement = $( this ).get( 0 );
    //     console.log(domElement.id);
    //   });
    var menustate=0;

    $('#menu_icon').click(function () {
        
        if (menustate==0) {
            $(".menu_icon").removeClass("bars");
            $(".menu_icon").addClass("close");
            $('#menu').slideDown();
            menustate=1;
        } else {
            $(".menu_icon").removeClass("close");
            $(".menu_icon").addClass("bars");
            $('#menu').slideUp();
            menustate=0;
        }
        
        
    }); 
    
    function accordian_click(a_cls) {
        var accordian_state=0;
        $("."+a_cls+"").click(function () { 
            if (accordian_state==0) {
                $("#"+a_cls+"").slideDown();
                $("."+a_cls+">.icon").removeClass("plus-circle");
                $("."+a_cls+">.icon").addClass("minus-circle");
                $("#"+a_cls+"").removeClass("animate__animated animate__zoomOut");
                $("#"+a_cls+"").addClass("animate__animated animate__zoomIn");
                accordian_state=1;
            } else {
                $("#"+a_cls+"").slideUp();
                $("."+a_cls+">.icon").removeClass("minus-circle");
                $("."+a_cls+">.icon").addClass("plus-circle");
                $("#"+a_cls+"").removeClass("animate__animated animate__zoomIn");
                $("#"+a_cls+"").addClass("animate__animated animate__zoomOut");
                accordian_state=0;
            }
            
        });
    }
  
    accordian_click("a_1");
    accordian_click("a_2");
    accordian_click("a_3");
    accordian_click("a_4");
    accordian_click("a_5");

    $('#app_loading').slideUp();
        $('#app_box').show();
    setTimeout(() => {
        
    }, 30000);

    // scroll_behaviour_script
    $("a").on("click",function(event){
        if(this.hash !==" "){
            event.preventDefault();
            var hash=this.hash;
           
            $('html,body').animate({
                scrollTop:$(hash).offset().top-80
            },500,function(){
                
                window.location.hash=hash;
            });
        }
    });

});
