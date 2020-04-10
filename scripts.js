$('button').click(() => {
    $('ul').append('<li class="created">' + $('#text-input').val() + '</li>')
    $('.created').on('click', function(){
        $(event.target).css('text-decoration', 'line-through');
    });
});

$('li').click(() => {
    $(event.target).css('text-decoration', 'line-through');
    
});