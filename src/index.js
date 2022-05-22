import todo from './todo';
import { subscribe, publish } from './pubsub';
import page from './page';
import './style.css';

(function main() {
  const content = document.querySelector('#content');
  let allTodo = [];
  let shownTodo = [];
  const pageUI = page();
  const currentProject = 'Bababoi';

  const deleteTodo = (id) => {
    allTodo = allTodo.filter((i) => i.id !== id);
  };

  const addTodo = () => {
    const newTodo = todo(currentProject, publish, deleteTodo);
    allTodo.push(newTodo);
    publish('shownTodoChanged');
  };

  const buildUI = () => {
    const defaultTodo = todo(currentProject, publish, deleteTodo);
    defaultTodo.set(
      true,
      '!!!',
      'Todo Name',
      'You can add a note here',
      'no date',
    );
    allTodo.push(defaultTodo);
    content.append(...pageUI.render());
    publish('shownTodoChanged');
  };
  subscribe('init', buildUI);

  const storeData = () => {
    console.log('store data');
  };
  subscribe('storeData');
  subscribe('sownTodoChanged');

  // when the data is loaded from localStorage and the allTodo is set,
  // the localStorage should be updated with the new allTodo
  // because the id of the todo is not the same as the id of the todo in the
  // localStorage
  // localStorage allTodo key: 1459333224678674
  // localStorage project key: 8637207312324280

  const render = () => {
    pageUI.clearTodo();
    shownTodo = [...allTodo]; // here needs to be a sorting function
    shownTodo.forEach((obj) => pageUI.appendTodo(obj));
  };
  subscribe('shownTodoChanged', render);

  publish('init');
}());
