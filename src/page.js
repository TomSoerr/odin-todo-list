const page = () => {
  const create = (tagName) => document.createElement(tagName);

  let currentProject = 'Bababoi';

  const logoHeader = create('div');
  logoHeader.classList.add('header');
  logoHeader.append('Do', (() => {
    const tmp = create('span');
    tmp.textContent = 'Zen';
    return tmp;
  })());
  const allTab = create('div');
  allTab.classList.add('tab');
  allTab.textContent = 'All';
  const todayTab = create('div');
  todayTab.classList.add('tab');
  todayTab.textContent = 'Today';
  const thisWeekTab = create('div');
  thisWeekTab.classList.add('tab');
  thisWeekTab.textContent = 'This Week';
  const projectHeader = create('div');
  projectHeader.classList.add('header');
  projectHeader.textContent = 'Projects';
  const defaultProject = create('div');
  defaultProject.classList.add('tab');
  defaultProject.textContent = 'Todo List';
  const addProject = create('div');
  addProject.classList.add('tab');
  addProject.id = 'add-project';
  addProject.textContent = 'New Project +';
  addProject.addEventListener('click', () => {
    alert('add project');
  });
  const sidebarDiv = create('div');
  sidebarDiv.id = 'sidebar';
  sidebarDiv.append(
    logoHeader,
    allTab,
    todayTab,
    thisWeekTab,
    projectHeader,
    defaultProject,
    addProject,
  );

  const currentProjectDiv = create('div');
  currentProjectDiv.id = 'current-project';
  currentProjectDiv.textContent = currentProject;

  const mainDiv = create('div');
  mainDiv.id = 'main';
  mainDiv.append(currentProjectDiv);

  const render = () => [sidebarDiv, mainDiv];

  const appendTodo = (todo) => mainDiv.append(todo.render());

  const clearTodo = () => {
    while (mainDiv.children[1]) {
      mainDiv.children[1].remove();
    }
  };

  return {
    render,
    appendTodo,
    clearTodo,
  };
};

export default page;
