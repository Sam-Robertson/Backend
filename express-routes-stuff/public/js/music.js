$(document).ready(function () {

    $.getJSON('/music-api', printMusics);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/music-api', {composer: $('#composer').val(), work: $('#work').val()}, printMusics);
        this.reset();
    });

});

function printMusics(composers) {
    $('#musicslist').empty();
    $.each(composers, function () {
        $('<dt style="font-size:18px">').text(this.composer).appendTo('#musicslist');
        $('<dl style="font-size:14px">').text(this.work).appendTo('#musicslist');
    });
    $('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/music-api/' + $(this).text(),
            type: 'DELETE',
            success: printMusics
        });
    });
}
