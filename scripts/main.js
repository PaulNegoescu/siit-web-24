'use strict';

// luam lista de todos pentru userul cu id-ul 1 => fetch
// iteram prin lista de todos => for
// sa se creeze un nou element li pentru fiecare todo din lista
// in li trebuie sa facem si celelalte elemente

function todoList() {
  function buildHtmlList(todos) {
    const list = document.createDocumentFragment();

    for (const todo of todos) {
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

  fetch('http://localhost:3005/todos')
    .then((res) => res.json())
    .then(displayTodos);
}

todoList();
