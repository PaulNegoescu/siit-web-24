'use strict';

// luam lista de todos pentru userul cu id-ul 1 => fetch
// iteram prin lista de todos => for
// sa se creeze un nou element li pentru fiecare todo din lista
// in li trebuie sa facem si celelalte elemente

function todoList() {
  const apiUrl = 'http://localhost:3005/todos';

  function buildListItem(todo) {
    const item = document.createElement('li');

    const label = document.createElement('label');
    const check = document.createElement('input');
    check.type = 'checkbox';
    label.append(check, todo.title);

    const delBtn = document.createElement('button');
    const icon = document.createElement('i');
    delBtn.append(icon);
    icon.classList.add('fa-solid', 'fa-trash-can');

    item.append(label, delBtn);

    return item;
  }

  function buildHtmlList(todos) {
    const list = document.createDocumentFragment();

    for (const todo of todos) {
      const item = buildListItem(todo);
      list.append(item);
    }

    return list;
  }

  function displayListInPage(list) {
    const output = document.querySelector('[data-todo-list]');
    output.append(list);
  }

  function displayTodos(todos) {
    const list = buildHtmlList(todos);
    displayListInPage(list);
  }

  fetch(apiUrl)
    .then((res) => res.json())
    .then(displayTodos);

  // sa adaugam un todo nou via form din html
  // listen to a submit event on the form -> addEventListener('submit')
  // trebuie sa aflam valoarea pe care a introdus-o utilizatorul -> querySelector(<input>).value
  // trimitem valoarea la server -> fetch(url, {method: POST, body:, headers:})
  // we need to refresh the list
  const addTodoForm = document.querySelector('[data-add-todo-form]');
  const errorMessageContainer = document.querySelector('[data-error-message]');
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
      .then(console.log);
  }
}

todoList();
