//Almacenando las variables para la selección de DOM
const newDashBoardSection= document.getElementById('new-dashboard');
const panelDashboardSection= document.getElementById('panel-dashboard');
const viewOne = document.getElementById('view-one');
const viewTwo = document.getElementById('view-two');


//Función muestra la sección de registro para nuevo dashboard.
const showForm = () => {
  newDashBoardSection.style.display = 'block';
  panelDashboardSection.style.display = 'none';
};

//Función que muestra la sección de lista de dashboard.
const showDashboard = () => {
  panelDashboardSection.style.display = 'block';
  newDashBoardSection.style.display = 'none';
};

/* DOM EVENTS */
viewOne.addEventListener('click', showForm);
viewTwo.addEventListener('click', showDashboard);
