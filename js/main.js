$(function(){

    $('.load-more').on('click', function(){
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            url: '/data.html',
            type: 'GET',
            beforSend: function(){
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: function(responce){
                setTimeout(function(){
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                    $('.after-posts').before(responce);
                }, 1000);
            },
            error: function(){
                allert('Error!');
            }
        });
    });
});