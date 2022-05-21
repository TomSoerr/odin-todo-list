import deleteImage from './img/delete.svg';

const todo = (project, publish, deleteTodo) => {
  const create = (type) => document.createElement(type);

  let done = false;
  let priority = '!';
  const id = Symbol('id of todoObj');

  const checkbox = create('input');
  checkbox.type = 'checkbox';
  checkbox.checkbox = 'checked';
  checkbox.classList.add('done-checkbox');
  checkbox.addEventListener('change', () => {
    done = !done;
    // debugger
    setTimeout(() => {
      publish('shownTodoChanged');
    }, 500);
  });

  const priorityDiv = create('div');
  priorityDiv.classList.add('priority-box');
  const prioritySpan = create('span');
  prioritySpan.textContent = priority;
  priorityDiv.append(prioritySpan);

  const titleDiv = create('div');
  titleDiv.classList.add('title-box');
  const titleSpan = create('span');
  titleSpan.textContent = 'New todo';
  titleDiv.append(titleSpan);

  const deleteBtn = create('button');
  deleteBtn.classList.add('delete-btn');
  const deleteImg = create('img');
  deleteImg.src = deleteImage;
  deleteBtn.append(deleteImg);
  deleteBtn.addEventListener('click', () => {
    deleteTodo(id);
    publish('shownTodoChanged');
  });

  const noteDiv = create('div');
  noteDiv.classList.add('note-box');
  const noteText = create('div');
  noteText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur aliquet, nisl nunc aliquet nunc, eget tincidunt nisl nunc ';
  noteDiv.append(noteText);

  const dueDateDiv = create('div');
  dueDateDiv.classList.add('due-date-box');
  const dueDateSpan = create('span');
  dueDateSpan.textContent = '4.2.69';
  dueDateDiv.append(dueDateSpan);

  const todoObj = create('div');
  todoObj.classList.add('todo-obj');
  todoObj.append(
    checkbox,
    priorityDiv,
    titleDiv,
    deleteBtn,
    noteDiv,
    dueDateDiv,
  );

  const render = () => {
    checkbox.checked = true;
    return todoObj;
  };

  return {
    project,
    render,
    done,
    priority,
    id,
  };
};

export default todo;
