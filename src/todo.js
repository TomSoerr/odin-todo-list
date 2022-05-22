import deleteImage from './img/delete.svg';

const todo = (project, publish, deleteTodo) => {
  const create = (type) => document.createElement(type);

  let done = false;
  let priority = '-';
  let date = 'no date';
  const id = Symbol('id of todoObj');

  const checkbox = create('input');
  checkbox.type = 'checkbox';
  checkbox.checked = done;
  checkbox.classList.add('done-checkbox');
  checkbox.addEventListener('change', () => {
    done = !done;
    setTimeout(() => {
      checkbox.checked = done;
      publish('shownTodoChanged');
    }, 200);
  });

  const priorityDiv = create('div');
  priorityDiv.classList.add('priority-box');
  const prioritySpan = create('span');
  prioritySpan.textContent = priority;
  const setPriority = (level) => {
    priority = level;
    prioritySpan.textContent = priority;
    publish('shownTodoChanged');
  };
  const priorityPopup = create('div');
  priorityPopup.classList.add('priority-popup');
  const nonePriority = create('div');
  nonePriority.classList.add('priority-btn');
  nonePriority.textContent = '-';
  nonePriority.addEventListener('click', () => setPriority('-'));
  const lowPriority = create('div');
  lowPriority.classList.add('priority-btn');
  lowPriority.textContent = '!';
  lowPriority.addEventListener('click', () => setPriority('!'));
  const mediumPriority = create('div');
  mediumPriority.classList.add('priority-btn');
  mediumPriority.textContent = '!!';
  mediumPriority.addEventListener('click', () => setPriority('!!'));
  const highPriority = create('div');
  highPriority.classList.add('priority-btn');
  highPriority.textContent = '!!!';
  highPriority.addEventListener('click', () => setPriority('!!!'));
  priorityPopup.append(
    nonePriority,
    lowPriority,
    mediumPriority,
    highPriority,
  );
  priorityDiv.append(prioritySpan, priorityPopup);
  priorityDiv.addEventListener('click', () => {
    priorityPopup.classList.toggle('show');
  });

  const titleDiv = create('div');
  titleDiv.classList.add('title-box');
  const titleSpan = create('span');
  titleSpan.textContent = 'New todo';
  const titleInput = create('input');
  titleInput.type = 'text';
  titleDiv.append(titleSpan);
  titleSpan.addEventListener('click', () => {
    titleDiv.firstChild.remove();
    titleInput.value = titleSpan.textContent;
    titleDiv.append(titleInput);
    titleInput.focus();
  });
  titleInput.addEventListener('blur', () => {
    titleDiv.firstChild.remove();
    titleSpan.textContent = titleInput.value;
    titleDiv.append(titleSpan);
  });
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
  noteText.textContent = '';
  const noteInput = create('textarea');
  noteDiv.append(noteText);
  noteText.addEventListener('click', () => {
    noteDiv.firstChild.remove();
    noteInput.value = noteText.textContent;
    noteDiv.append(noteInput);
    noteInput.focus();
  });
  noteInput.addEventListener('blur', () => {
    noteDiv.firstChild.remove();
    noteText.textContent = noteInput.value;
    noteDiv.append(noteText);
  });

  const dueDateDiv = create('div');
  dueDateDiv.classList.add('due-date-box');
  const dueDateSpan = create('span');
  dueDateSpan.textContent = 'no date';
  const dueDateInput = create('input');
  dueDateInput.type = 'date';
  dueDateDiv.append(dueDateSpan);
  dueDateSpan.addEventListener('click', () => {
    dueDateDiv.firstChild.remove();
    dueDateDiv.append(dueDateInput);
    dueDateInput.focus();
  });
  dueDateInput.addEventListener('blur', () => {
    dueDateDiv.firstChild.remove();
    const { value } = dueDateInput;
    date = (value)
      ? `${value.split('-')[2]}.${value.split('-')[1]}.${value.split('-')[0]}`
      : 'no date';
    dueDateSpan.textContent = (date);
    dueDateDiv.append(dueDateSpan);
  });

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

  const getDate = () => date;
  const getDone = () => done;
  const getPriority = () => priority;
  const render = () => todoObj;

  return {
    project,
    id,
    render,
    getDate,
    getDone,
    getPriority,
  };
};

export default todo;
