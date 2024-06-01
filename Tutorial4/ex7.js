// Product inventory (rows: product types, columns: name, price, quantity)
const productInventory = [
    ['Shirt', 20.00, 10],
    ['Pants', 30.00, 5],
    ['Hat', 15.00, 8],
  ];
  
  // Function to update product quantity
  function updateQuantity(productName, newQuantity) {
    for (let i = 0; i < productInventory.length; i++) {
      if (productInventory[i][0] === productName) {
        productInventory[i][2] = newQuantity;
        console.log(`Updated quantity for ${productName}.`);
        return; // Exit after finding and updating the product
      }
    }
    console.log(`Product "${productName}" not found in inventory.`);
  }
  
  // Update quantity for "Shirt" (example)
  updateQuantity('Shirt', 15);
  
  // Print the updated inventory
  console.log("Updated Inventory:");
  for (let row of productInventory) {
    console.log(`${row[0]}: ${row[1]} (${row[2]} in stock)`);
  }
  
