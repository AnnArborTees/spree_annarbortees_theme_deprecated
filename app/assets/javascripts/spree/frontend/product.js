$(document).ready(function(){
    Slider = $('#slider').Swipe({
        auto: 3000,
        continuous: false,
        callback: function(index, elem) {
            $("#slider-nav .fa-square").toggleClass('fa-square-o fa-square');
            $("#slider-nav i[data-index='" + index + "'").toggleClass('fa-square-o fa-square')
        }
    }).data('Swipe');

    if(Slider) {
        $('.next').on('click', Slider.next);
        $('.prev').on('click', Slider.prev);
    }

    /*
    $('#slider-nav > i').on('click', function(e){
        if( parseInt( Slider.getPos() ) < parseInt($(this).attr('data-index')) ) {
            Slider.next
        } else if (parseInt( Slider.getPos() ) > parseInt($(this).attr('data-index')) ) {
          Slider.prev
        }
    });*/
    $("#product-variants label").on('click', function(){
        if(!$(this).parent('li').children('input').is(':disabled')){
            $('#product-variants li').removeClass('selected');
            $(this).parent('li').addClass('selected');
        }
    });

    $("")
});