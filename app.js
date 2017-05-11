$('document').ready(function() {

    var $box = $('.box'),
        $reset = $('#reset');

    $box.on('click', function (){
        $(this).addClass('white');
    });

    $box.on('dblclick', function () {
        $(this).removeClass('white');
    });

    $reset.on('click', function () {
        $box.removeClass('white')
    });


});