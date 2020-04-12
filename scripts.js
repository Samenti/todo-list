$('button').click(() => {
    if ($('#text-input').val() !== '') {
        $('#temp-item').remove();
        $('ul').append('<li class="created"><div class="item-text">'  + $('#text-input').val() + '</div><img src="trash_lighter.svg" alt="" class="trash-button"><img src="done_lighter.svg" alt="" class="done-button"></li>');
        $('#text-input').val('');
        $('.created').children('.done-button').click(() => {
            $(event.currentTarget).siblings('.item-text').css('text-decoration', 'line-through');
            $(event.currentTarget).attr('src', 'done_clicked.svg');
        });

        $('.created').children('.trash-button').click(() => {
            $(event.currentTarget).parent().remove();
        });
    }
});

$('.done-button').click(() => {
    $(event.currentTarget).siblings('.item-text').css('text-decoration', 'line-through');
    $(event.currentTarget).attr('src', 'done_clicked.svg');
});

$('.trash-button').click(() => {
    $(event.currentTarget).parent().remove();
});

// $('.done-button').click(doneHandler());

// $('.trash-button').click(trashHandler());

// function doneHandler() {
//     $(event.currentTarget).prev().css('text-decoration', 'line-through');
//     $(event.currentTarget).attr('src', 'done_clicked.svg');
// }

// function trashHandler() {
//     $(event.currentTarget).parent().remove();
// }