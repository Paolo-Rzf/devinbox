$(document).ready(function() {
    $('.add_basket').click(function() {
        if($(this).hasClass('checked')) {
            $(this).children('i').remove();
            $(this).parent().next().remove();
        } else {
            $(this).append(' <i class="fa fa-check"></i>');
            $(this).parent().parent().append('<dd><a href="#">Voir le panier</a></dd>')
        }
        $(this).toggleClass('checked');
    });
    
    $('.card').css('height', $('.card').width());
    $('.card .img span').css('background-size', $('.card').width());
    $(window).resize(function() {
        $('.card').css('height', $('.card').width());
        $('.card .img span').css('background-size', $('.card').width());
    })

})

