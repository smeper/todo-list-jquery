$(document).ready(function () {
    const lista = $('#lista');
    let contador = 0;

    function createItem(event, tarea) {
        event.preventDefault();
        lista.append(`<li class="h3 bg-secondary my-1 list-group-item"> <span>${tarea.val()} </span>
            <button class='todo-item-delete btn btn-danger' data-codigo=' + ${contador} + '>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
            </button>
            <button class='todo-item-update btn btn-info' data-codigo=' + ${contador++} + '>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
            </button>
            </li>`);
        tarea.val('');
    }

    $('#enviar').click(function (e) {
        let tarea = $('#tarea');
        createItem(e, tarea);
    });

    function deleteTodoItem(event, item) {
        event.preventDefault();
        $(item).parent().fadeOut(750, function () {
            $(item).parent().remove();
        });
    }

    $("#lista").on('click', '.todo-item-delete', function (e) {
        let item = this;
        deleteTodoItem(e, item);
    })

    function updateTodoItem(event, item) {
        event.preventDefault();
        let tarea = $('#tarea');
        let texto_tarea = $(item).parent()[0].childNodes[1].textContent;
        tarea.val(texto_tarea);
    }

    $('#lista').on('click', '.todo-item-update', function (e) {
        let item = this;
        updateTodoItem(e, item);
        deleteTodoItem(e, item);
    })
});