$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();

        const taskName = $('#task-input').val().trim();
        if (taskName === '') {
            alert('Por favor, adicione uma tarefa.');
            return;
        }

        const listItem = $('<li></li>').text(taskName);

        listItem.click(function() {
            $(this).toggleClass('completed');
        });

        $('#task-list').append(listItem);

        $('#task-input').val('').focus();
    });
});
