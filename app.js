const addTodoButton = document.getElementById('addTodo');
const todoInput = document.querySelector('input');
const todoList = document.getElementById('todoList');

addTodoButton.addEventListener('click', () => {
  const inputTodo = todoInput.value;
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  listItem.appendChild(checkbox);
  listItem.appendChild(document.createTextNode(inputTodo));
  todoList.appendChild(listItem);

  todoInput.value = '';
});

todoList.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    const listItem = event.target.parentElement;
    if (event.target.checked) {
      listItem.style.textDecoration = 'line-through';
      listItem.style.color = '#ccc';
    } else {
      listItem.style.textDecoration = 'none';
      listItem.style.color = '#000';
    }
  }
});