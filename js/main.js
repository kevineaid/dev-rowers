$(document).ready(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 

    $("#textslide > div:gt(0)").hide();

    setInterval(function() { 
      $('#textslide > div:first')
        .removeClass('active')
        .next()
        .fadeIn(1000)
        .addClass('active')
        .end()
        .appendTo('#textslide');
    },  5000);


    $('.hide-toggle').hide();

    $('.main-cat .block').click(function(){
        $('.hide-toggle').hide();
        $('.hide-toggle').fadeIn(300);
    });
});