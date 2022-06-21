'use strict';

//IIFE - Immediately Invoked Function Expression
(function () {
  const apiUrl = 'http://localhost:3005/todos';

  function buildListItem(todo) {
    const item = document.createElement('li');

    const label = document.createElement('label');
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = todo.completed;
    check.dataset.todoItem = todo.id;
    label.append(check, todo.title);

    const delBtn = document.createElement('button');
    const icon = document.createElement('i');
    delBtn.append(icon);
    delBtn.dataset.todoToDelete = todo.id;
    icon.classList.add('fa-solid', 'fa-trash-can');
    // icon.dataset.todoToDelete = todo.id;
    // icon.style.pointerEvents = 'none';

    item.append(label, delBtn);

    return item;
  }

  function displayListInPage(list) {
    const output = document.querySelector('[data-todo-list]');
    // output.innerHTML = '';
    output.append(list);
  }

  function renderTodoList() {
    // luam lista de todos pentru userul cu id-ul 1 => fetch
    // iteram prin lista de todos => for
    // sa se creeze un nou element li pentru fiecare todo din lista
    // in li trebuie sa facem si celelalte elemente

    function buildHtmlList(todos) {
      const list = document.createDocumentFragment();

      for (const todo of todos) {
        const item = buildListItem(todo);
        list.append(item);
      }

      return list;
    }

    function displayTodos(todos) {
      const list = buildHtmlList(todos);
      displayListInPage(list);
    }

    fetch(apiUrl)
      .then((res) => res.json())
      .then(displayTodos);
  }
  renderTodoList();

  function enableAddTodo() {
    // sa adaugam un todo nou via form din html
    // listen to a submit event on the form -> addEventListener('submit')
    // trebuie sa aflam valoarea pe care a introdus-o utilizatorul -> querySelector(<input>).value
    // trimitem valoarea la server -> fetch(url, {method: POST, body:, headers:})
    // we need to refresh the list
    const addTodoForm = document.querySelector('[data-add-todo-form]');
    const errorMessageContainer = document.querySelector(
      '[data-error-message]'
    );
    const titleInput = addTodoForm.elements.title;

    addTodoForm.addEventListener('submit', handleAddTodo);

    titleInput.addEventListener('keydown', handleKeydown);

    function handleKeydown() {
      errorMessageContainer.innerText = '';
    }

    function handleAddTodo(e) {
      e.preventDefault(); // am oprit comportamentul implicit al formularului
      // const title = document.querySelector('[data-todo-title-input]').value;
      const title = titleInput.value;
      errorMessageContainer.innerText = '';

      if (!title.trim()) {
        errorMessageContainer.innerText =
          'Please enter a non-empty value for the todo title.';
        return;
      }

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          title,
          completed: false,
          userId: 1,
        }),
      })
        .then((res) => res.json())
        // .then(renderTodoList);
        .then((todo) => {
          const listItem = buildListItem(todo);
          displayListInPage(listItem);
        });
    }
  }
  enableAddTodo();

  function enableCompleteTodos() {
    // trebuie sa aflam cand se bifeaza checkbox-ul -> input.addEventListener('click')
    // trimitem la server ca s-a transformat in altceva "completed" -> fetch(, {method: 'PATCH'})

    document
      .querySelector('[data-todo-list]')
      .addEventListener('change', handleComplete);

    function handleComplete(e) {
      const todoId = e.target.dataset.todoItem;
      if (!todoId || e.target.type !== 'checkbox') {
        return;
      }

      fetch(`${apiUrl}/${todoId}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ completed: e.target.checked }),
      })
        .then((res) => {
          if (!res.ok) {
            if (res.status === 401) {
              //redirect the user to the login page
              return;
            }
            throw new Error('The call to the server failed!');
          }

          return res.json();
        })
        // .then(console.log)
        .catch((e) => console.warn('Eroarea e:', e));
    }
  }
  enableCompleteTodos();

  function enableDeleteTodos() {
    document
      .querySelector('[data-todo-list]')
      .addEventListener('click', handleDelete);

    function handleDelete(e) {
      const idToDelete = e.target.closest('button')?.dataset.todoToDelete;

      if (!idToDelete) {
        return;
      }

      fetch(`${apiUrl}/${idToDelete}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then(() => {
          e.target.closest('li').remove();
        });
    }
  }
  enableDeleteTodos();
})();
