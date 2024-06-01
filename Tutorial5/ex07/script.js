//
/*
to start with q1. we can
getElementsByClassName
querySelectorAll
think about live nodelist and static node lists (refer to slide deck)
run a loop
in the loop
--> modify the className to cool
*/
//console.log("hi");


// Exercise 1: Change all li.hot elements to cool
function changeHotToCool() {
    const hotElements = document.querySelectorAll("li.hot"); // Select all li.hot elements
  
    for (let i = 0; i < hotElements.length; i++) {
      hotElements[i].classList.remove("hot"); // Remove "hot" class
      hotElements[i].classList.add("cool");  // Add "cool" class
    }
  }
  
  // Exercise 2: Change the 3rd li.hot element to cool (if there are at least 3)
  function changeThirdHotToCool() {
    const hotElements = document.getElementsByClassName("hot");
  
    if (hotElements.length >= 3) {
      hotElements[2].classList.remove("hot");
      hotElements[2].classList.add("cool");
    } else {
      console.log("There are less than 3 elements with class 'hot'");
    }
  }
  
  // Exercise 3: Change the 1st li.hot element to cool (if there's at least one)
  function changeFirstListItemHotToCool() {
    const hotListItems = document.getElementsByTagName("li").namedItem("hot"); // More specific: select by tag and name (assuming "hot" is the ID)
  
    if (hotListItems) {
      hotListItems.classList.remove("hot");
      hotListItems.classList.add("cool");
    } else {
      console.log("There are no list items (li) with the ID 'hot'");
    }
  }
  