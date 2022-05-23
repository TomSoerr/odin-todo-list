import addImage from './img/add.svg';
import todayImage from './img/today.svg';
import allImage from './img/all.svg';
import thisWeekImage from './img/week.svg';
import removeImage from './img/remove.svg';
import projectImage from './img/project.svg';

const page = (addTodo, addProject, setCurrentOrder) => {
  const create = (tagName) => document.createElement(tagName);
  const projectKey = '863720731232428';

  let currentProject = 'Default Project';

  const currentProjectDiv = create('div');
  currentProjectDiv.id = 'current-project';
  const projectImg = create('img');
  projectImg.src = projectImage;
  currentProjectDiv.append(projectImg, currentProject);

  const addTodoDiv = create('div');
  addTodoDiv.id = 'add-todo';
  const addImg = create('img');
  addImg.src = addImage;
  const addText = create('div');
  addText.textContent = 'Add Todo';
  addTodoDiv.append(addText, addImg);
  addTodoDiv.addEventListener('click', () => {
    addTodo(currentProject);
  });

  const mainDiv = create('div');
  mainDiv.id = 'main';
  mainDiv.append(currentProjectDiv, addTodoDiv);

  const sidebarDiv = create('div');
  sidebarDiv.id = 'sidebar';

  const removeAllActive = () => {
    [...sidebarDiv.children].forEach((child) => {
      child.classList.remove('active');
    });
    addTodoDiv.classList.remove('active');
  };

  const logoHeader = create('div');
  logoHeader.classList.add('header');
  logoHeader.append((() => {
    const tmp = create('span');
    tmp.textContent = 'Zen';
    return tmp;
  })(), 'Do');
  const allTab = create('div');
  allTab.classList.add('tab');
  const allImg = create('img');
  allImg.src = allImage;
  allTab.append(allImg, 'All');
  allTab.addEventListener('click', () => {
    removeAllActive();
    allTab.classList.add('active');
    setCurrentOrder('All');
  });
  const todayTab = create('div');
  todayTab.classList.add('tab');
  const todayImg = create('img');
  todayImg.src = todayImage;
  todayTab.append(todayImg, 'Today');
  todayTab.addEventListener('click', () => {
    removeAllActive();
    todayTab.classList.add('active');
    setCurrentOrder('Today');
  });
  const thisWeekTab = create('div');
  thisWeekTab.classList.add('tab');
  const thisWeekImg = create('img');
  thisWeekImg.src = thisWeekImage;
  thisWeekTab.append(thisWeekImg, 'Week');
  thisWeekTab.addEventListener('click', () => {
    removeAllActive();
    thisWeekTab.classList.add('active');
    setCurrentOrder('This Week');
  });
  const projectHeader = create('div');
  projectHeader.classList.add('header');
  projectHeader.textContent = 'Projects';
  const addProjectDiv = create('div');
  addProjectDiv.classList.add('tab');
  addProjectDiv.id = 'add-project';
  const addProjectImg = create('img');
  addProjectImg.src = addImage;
  addProjectDiv.append('New Project', addProjectImg);
  addProjectDiv.addEventListener('click', () => {
    addProject();
  });
  sidebarDiv.append(
    logoHeader,
    allTab,
    todayTab,
    thisWeekTab,
    projectHeader,
    addProjectDiv,
  );

  const project = () => {
    let name;

    const projectDiv = create('div');
    projectDiv.classList.add('tab');
    const projectInput = create('input');
    projectInput.type = 'text';
    projectInput.focus();
    const removeImg = create('img');
    removeImg.src = removeImage;
    removeImg.addEventListener('click', () => {
      addTodoDiv.classList.remove('active');
      projectDiv.remove();
      // delete all todos in this project
      // setCurrentOrder('All');
      alert('Project removed');
    });
    projectDiv.append(projectInput, removeImg);

    const activate = () => {
      removeAllActive();
      projectDiv.classList.add('active');
      addTodoDiv.classList.add('active');
      currentProject = name;
      setCurrentOrder(currentProject);
    };

    projectInput.addEventListener('blur', () => {
      if (projectInput.value === '') {
        projectDiv.remove();
      } else {
        name = projectInput.value;
        projectDiv.replaceChildren(name, removeImg);
        activate();
        const tmp = JSON.parse(localStorage.getItem(projectKey));
        tmp.push(name);
        localStorage.setItem(projectKey, JSON.stringify(tmp));
      }
    });

    projectDiv.addEventListener('click', () => {
      if (projectDiv.children[0].tagName !== 'INPUT') {
        activate();
      }
    });

    const set = (newProjectName) => {
      name = newProjectName;
      projectDiv.replaceChildren(newProjectName, removeImg);
      activate();
    };

    const render = () => projectDiv;
    return {
      render,
      set,
      projectInput,
    };
  };

  const appendProject = (newProject) => {
    sidebarDiv.insertBefore(newProject.render(), addProjectDiv);
    newProject.projectInput.focus();
  };

  const render = () => [sidebarDiv, mainDiv];

  const appendTodo = (todo) => mainDiv.append(todo.render());

  const clearTodo = () => {
    while (mainDiv.children[2]) {
      mainDiv.children[2].remove();
    }
  };

  return {
    render,
    appendTodo,
    clearTodo,
    project,
    appendProject,
  };
};

export default page;
