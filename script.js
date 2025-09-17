// Global variable
let globalCounter = 0;

// Reusable function with parameters
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function demonstrating local vs global scope
function incrementCounter() {
  let localCounter = 5;
  globalCounter++;
  console.log("Global:", globalCounter); // can be updated
  console.log("Local:", localCounter);   // resets every time
}

// Reusable logic for DOM changes
function toggleVisibility(element) {
  if (element.classList.contains("visible")) {
    element.classList.remove("visible");
    element.classList.add("hidden");
  } else {
    element.classList.remove("hidden");
    element.classList.add("visible");
  }
}

// Call functions
console.log("Total: $" + calculateTotal(19.99, 3));
incrementCounter();
