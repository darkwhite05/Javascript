const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");
const alertButton = document.getElementById("alertButton");
const counterDSisplay = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
const resetButton = document.getElementById("resetButton");
const usernameInput = document.getElementById("username");
const greetButton = document.getElementById("greetButton");
const greetingMessage = document.getElementById("greetingMessage");
const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

//Toggle the menu visibility when the menu button is clicked
menuButton.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

alertButton.addEventListener("click", function () {
  alert("Hello! This is an alert message");
});

//initialize the counter
let counter = 0;

//increment the counter and update the display when the button is clicked
incrementButton.addEventListener("click", function () {
  counter += 1; //increment the counter by 1
  counterDSisplay.textContent = counter; //Update the counter display
});

//Decrement the counter and update the display when the button is clicked
decrementButton.addEventListener("click", function () {
  counter -= 1; //Decrement the counter by 1
  counterDSisplay.textContent = counter; //Update the counter display
});

//Add an event listener to the Reset Button to refreth the page
resetButton.addEventListener("click", function () {
  location.reload(); //Refresh the page
});
//Function to check if the input constains only letters
function isValidName(name) {
  const namePattern = /^[a-zA-Z\s]+$/; //Regular expression to allow only letters and spaces
  return namePattern.test(name);
}

//Add an event listener to the button
greetButton.addEventListener("click", function () {
  //Get the value of the input
  const username = usernameInput.value.trim();

  //check if the input is not empty and valid
  if (username === "") {
    greetingMessage.textContent = "Please enter your name";
  } else if (!isValidName(username)) {
    greetingMessage.textContent = "Invalid input.Please use only letters!";
  } else {
    //set the greeting message
    greetingMessage.textContent = `Hello, ${username}!`;
  }
});

addParagraphButton.addEventListener('click', function(){
    //create a paragraph element
    const newParagraph = document.createElement('p');
    //set its text content
    newParagraph.textContent = 'Congratulations on learning Practical Javascript';
    //Append the paragraph to the container
    paragraphContainer.appendChild(newParagraph);
});