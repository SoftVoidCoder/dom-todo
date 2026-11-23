const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');
const counter = document.querySelector('#counter');

function updateCounter() {
  counter.textContent = list.children.length;
}

function addTask() {
  const task = input.value.trim();
  if (!task) return;

  const item = document.createElement('li');
  const text = document.createElement('span');
  const removeButton = document.createElement('button');

  text.className = 'task-text';
  text.textContent = task;
  text.addEventListener('click', () => item.classList.toggle('done'));

  removeButton.textContent = 'Удалить';
  removeButton.addEventListener('click', () => {
    item.remove();
    updateCounter();
  });

  item.append(text, removeButton);
  list.append(item);
  input.value = '';
  updateCounter();
}

document.querySelector('#theme-btn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
document.querySelector('#add-btn').addEventListener('click', addTask);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') addTask();
});
