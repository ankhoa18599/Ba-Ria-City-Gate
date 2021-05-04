$(document).ready(function() {
    $(window).scroll(function() {
        // Show btn Scroll to top 
        if($(window).scrollTop() > 700) {
            $('.text_img').addClass('trans_text');
            $('.text_box').addClass('trans_quote');
            $('.scrolltotop').addClass('show');
        }
        else if($(window).scrollTop() <= 700) {
            $('.scrolltotop').removeClass('show');
        }

        // Transition for Khu do thi kieu mau
        if($(window).scrollTop() > 300) {
            $('.text_img').addClass('trans_text');
            $('.text_box').addClass('trans_quote');
        }
    })

    // Scroll to top ( not working )
    $('.btn_scrolltotop').click(function() {
        $('html', 'body').animate({scrollTop: 0}, "slow");
        return false;
    })
})