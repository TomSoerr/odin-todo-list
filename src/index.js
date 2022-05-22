import todo from './todo';
import { subscribe, publish } from './pubsub';
import './style.css';

(function main() {
  const content = document.querySelector('#content');
  let allTodo = [];
  let shownTodo = [];
  const currentProject = 'Bababoi';

  const deleteTodo = (id) => {
    // debugger;
    allTodo = allTodo.filter((i) => i.id !== id);
  };

  const addTodo = () => {
    const newTodo = todo(currentProject, publish, deleteTodo);
    allTodo.push(newTodo);
    publish('shownTodoChanged');
  };
  subscribe('init', addTodo);

  const render = () => {
    while (content.firstChild) {
      content.firstChild.remove();
    }
    shownTodo = [...allTodo];
    shownTodo.forEach((obj) => {
      console.log(obj.getDone());
      content.append(obj.render());
    });
  };
  subscribe('shownTodoChanged', render);

  publish('init');
}());
