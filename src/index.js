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

  const deleteProject = (id) => {
    const tmp = JSON.parse(localStorage.getItem(projectKey));
    // find index of id in tmp and splice it
    const index = tmp.indexOf(id);
    tmp.splice(index, 1);
    localStorage.setItem(projectKey, JSON.stringify(tmp));
  };

  const addProject = () => {
    const newProject = pageUI.project(publish, deleteProject);
    pageUI.appendProject(newProject);
  };

  const init = () => {
    const setDefaultTodo = () => {
      const defaultTodo = todo('Default Project', publish, deleteTodo);
      const today = new Date();
      defaultTodo.set(
        true,
        '!!!',
        'Todo Name',
        'You can add a note here',
        `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`,
      );
      allTodo.push(defaultTodo);
    };

    const setDefaultProject = () => {
      const newProject = pageUI.project(publish, deleteProject);
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
          const tmpProject = pageUI.project(publish, deleteProject);
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

  const renderTodo = () => {
    pageUI.clearTodo();
    console.log(`currentOrder: ${currentOrder}`);
    console.log(localStorage.getItem(projectKey))
    shownTodo = [...allTodo]; // here needs to be a sorting function
    shownTodo.forEach((obj) => pageUI.appendTodo(obj));
    console.info(JSON.parse(localStorage.getItem(allTodoKey)));
  };
  subscribe('shownTodoChanged', renderTodo);

  publish('init');
}());
