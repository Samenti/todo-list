$('button').click(() => {
    $('ul').append('<li class="created">' + $('#text-input').val() + '<div class="trash-button"></div><div class="done-button"></div></li>');
    $('#text-input').val('');
    $('.created').on('click', function(){
        $(event.target).css('text-decoration', 'line-through');
    });
});

$('li').click(() => {
    $(event.target).css('text-decoration', 'line-through');
});