//Get variables
const newDashBoardSection = document.getElementById('new-dashboard');
const panelDashboardSection = document.getElementById('panel-dashboard');
const viewOne = document.getElementById('view-one');
const viewTwo = document.getElementById('view-two');
const newRegisterForm = document.getElementById('new-register');
const alert = document.querySelector('.alert');

//Function to get form values
const getInputVal = id => document.getElementById(id).value;

//Fuction to submit form
const submitForm = e => {
  e.preventDefault();

  //Get values
  const newPurchases = getInputVal('new-purchases');
  const purchasePercentage = getInputVal('purchase-percentage');
  const newUsers = getInputVal('new-users');
  const visitors = getInputVal('visitors');
  const date = getInputVal('date');

  //Call function
  saveData(newPurchases, purchasePercentage, newUsers, visitors, date);

  //Show alert
  alert.style.display = 'block';

  //Hide alert after 3 seconds
  setTimeout(() => {
    alert.style.display = 'none';
  }, 3000);

  //Clean form
  newRegisterForm.reset();
};

//Function that shows section to register new dashboard
const showForm = () => {
  newDashBoardSection.style.display = 'block';
  panelDashboardSection.style.display = 'none';
};

//Function that shows section of dashboards' panel
const showDashboard = () => {
  panelDashboardSection.style.display = 'block';
  newDashBoardSection.style.display = 'none';
};

/* DOM EVENTS */
viewOne.addEventListener('click', showForm);
viewTwo.addEventListener('click', showDashboard);
newRegisterForm.addEventListener('submit', submitForm);