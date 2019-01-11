// Initialize Firebase
const config = {
  apiKey: "AIzaSyDptd3g5VBSPCFkGEx-1Jw2c0TdS2uVLOA",
  authDomain: "dashboard-test-28ce5.firebaseapp.com",
  databaseURL: "https://dashboard-test-28ce5.firebaseio.com",
  projectId: "dashboard-test-28ce5",
  storageBucket: "dashboard-test-28ce5.appspot.com",
  messagingSenderId: "1082576058460"
};
firebase.initializeApp(config);


//Get references collection
const dashboardRef = firebase.database().ref('dashboards');

//Save messages to Firebase
const saveData = (newPurchases, purchasePercentage, newUsers, visitors, date) => {
  const newDashboardRef = dashboardRef.push();
  newDashboardRef.set({
    newPurchases,
    purchasePercentage,
    newUsers,
    visitors,
    date
  })
};