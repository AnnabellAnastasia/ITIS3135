// Define the function to be called when the button is clicked
function scriptTest() {
    alert("Hey my script is running");
  }
  
  // Get a reference to the button element
  var button = document.getElementById("myButton");
  
  // Set the onclick attribute to call the scriptTest function
  button.onclick = scriptTest;
  