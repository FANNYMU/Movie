
function showAlert() {
    document.getElementById('alertBox').style.display = 'block'; // Show the alert box
  }
  
  // Added event listener for the hide button
  const hideAlertButton = document.getElementById('hideAlertButton');
  hideAlertButton.addEventListener('click', function() {
    document.getElementById('alertBox').style.display = 'none'; // Hide the alert box
  });
  