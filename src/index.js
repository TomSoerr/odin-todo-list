import todo from './todo';
import { subscribe, publish } from './pubsub';
import page from './page';
import storageAvailable from './local-storage-test';
import './style.css';

(function main() {
  const content = document.querySelector('#content');
  const allTodoKey = '145933322467867';
  const projectKey = '863720731232428';

  let allTodo = [];
  let shownTodo = [];
  let pageUI;
  const projectsOnLoad = [];
  let currentOrder;

  // so the page module can change the order of the shown todos
  const setCurrentOrder = (newOrder) => {
    currentOrder = newOrder;
    publish('shownTodoChanged');
  };

  const deleteTodo = (id) => {
    const tmp = JSON.parse(localStorage.getItem(allTodoKey));
    delete tmp[id];
    localStorage.setItem(allTodoKey, JSON.stringify(tmp));
    allTodo = allTodo.filter((i) => i.id !== id);
    publish('shownTodoChanged');
  };

  const addTodo = (projectName) => {
    const newTodo = todo(projectName, publish, deleteTodo);
    allTodo.push(newTodo);
    publish('shownTodoChanged');
  };

  const deleteProject = (projectName) => {
    const tmpProject = JSON.parse(localStorage.getItem(projectKey));
    const index = tmpProject.indexOf(projectName);
    tmpProject.splice(index, 1);
    localStorage.setItem(projectKey, JSON.stringify(tmpProject));
    const tmpAllTodo = JSON.parse(localStorage.getItem(allTodoKey));
    Object.keys(tmpAllTodo).forEach((key) => {
      if (tmpAllTodo[key][0] === projectName) {
        deleteTodo(key);
      }
    });
    allTodo = allTodo.filter((i) => i.project !== projectName);
  };

  const addProject = () => {
    const newProject = pageUI.project(deleteProject);
    pageUI.appendProject(newProject);
  };

  const init = () => {
    // a default todo and a default project will be added on first load
    const setDefaultTodo = () => {
      const defaultTodo = todo('Default Project', publish, deleteTodo);
      const today = new Date();
      const day = (today.getDate().toString().length === 1)
        ? `0${today.getDate()}`
        : today.getDate();
      const month = ((today.getMonth() + 1).toString().length === 1)
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
      const year = today.getFullYear();
      defaultTodo.set(
        true,
        '!!!',
        'Todo Name',
        'You can add a note here',
        `${day}.${month}.${year}`,
      );
      allTodo.push(defaultTodo);
    };

    const setDefaultProject = () => {
      const newProject = pageUI.project(deleteProject);
      newProject.set('Default Project');
      projectsOnLoad.push('Default Project');
      pageUI.appendProject(newProject);
    };

    if (storageAvailable('localStorage')) {
      pageUI = page(addTodo, addProject, setCurrentOrder);
      content.append(...pageUI.render());

      if (localStorage.getItem(projectKey)) {
        projectsOnLoad.push(...JSON.parse(localStorage.getItem(projectKey)));
        projectsOnLoad.forEach((projectName) => {
          const tmpProject = pageUI.project(deleteProject);
          tmpProject.set(projectName);
          pageUI.appendProject(tmpProject);
        });
      } else {
        setDefaultProject();
        localStorage.setItem(projectKey, JSON.stringify(projectsOnLoad));
      }
      if (localStorage.getItem(allTodoKey)) {
        const tmp = JSON.parse(localStorage.getItem(allTodoKey));

        Object.keys(tmp).forEach((key) => {
          const id = key;
          const [project, done, priority, title, note, date] = tmp[key];
          const tmpTodo = todo(project, publish, deleteTodo);
          tmpTodo.id = id;
          tmpTodo.set(done, priority, title, note, date, id);
          allTodo.push(tmpTodo);
        });
      } else {
        setDefaultTodo();
        const allTodoData = {};
        allTodo.forEach((i) => {
          const {
            done, priority, title, note, date,
          } = i.get();
          allTodoData[i.id] = [
            i.project, done, priority, title, note, date,
          ];
        });
        localStorage.setItem(allTodoKey, JSON.stringify(allTodoData));
      }
    } else {
      console.error('Local storage is not available');
      setDefaultProject();
      setDefaultTodo();
    }
    publish('shownTodoChanged');
  };
  subscribe('init', init);

  const WEEK_LENGTH = 604800000;

  const checkThisWeek = (date) => {
    const { day, month, year } = date.match(/(?<day>\d{2})\.(?<month>\d{2})\.(?<year>\d{4})/).groups;
    const todoDate = new Date();
    todoDate.setDate(day);
    todoDate.setMonth(month - 1);
    todoDate.setFullYear(year);

    const lastMonday = new Date();
    lastMonday.setDate(lastMonday.getDate() - (lastMonday.getDay() - 1));
    lastMonday.setHours(0, 0, 0, 0);

    return (lastMonday.getTime() <= todoDate.getTime()
    && todoDate.getTime() < (lastMonday.getTime() + WEEK_LENGTH));
  };

  // to render the todo list every time the order could have changed
  const renderTodo = () => {
    if (currentOrder === 'All') {
      shownTodo = [...allTodo];
    } else if (currentOrder === 'Today') {
      shownTodo = allTodo.filter((i) => {
        const { date } = i.get();
        const today = new Date();
        const day = (today.getDate().toString().length === 1)
          ? `0${today.getDate()}`
          : today.getDate();
        const month = ((today.getMonth() + 1).toString().length === 1)
          ? `0${today.getMonth() + 1}`
          : today.getMonth() + 1;
        const year = today.getFullYear();
        return date === `${day}.${month}.${year}`;
      });
    } else if (currentOrder === 'This Week') {
      shownTodo = allTodo.filter((i) => checkThisWeek(i.get().date));
    } else {
      shownTodo = allTodo.filter((i) => i.project === currentOrder);
    }
    pageUI.clearTodo();
    shownTodo.forEach((obj) => pageUI.appendTodo(obj));
  };
  subscribe('shownTodoChanged', renderTodo);

  publish('init');
}());
