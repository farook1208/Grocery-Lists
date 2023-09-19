// Array to store the grocery list items
let groceryItems = [];

// Function to add an item to the list
function addItem() {
  const itemInput = document.getElementById('itemInput');
  const item = itemInput.value.trim();

  if (item !== '') {
    groceryItems.push(item);
    itemInput.value = '';
    updateGroceryList();
  }
}   

// Function to update the grocery list displayed on the page
function updateGroceryList() {
    const groceryList = document.getElementById('groceryList');
    groceryList.innerHTML = '';
  
    groceryItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      groceryList.appendChild(listItem);
    });
  }
  
  // Event listener to handle adding items when the "Add Item" button is clicked
  document.getElementById('itemInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addItem();
    }
  });

  
  