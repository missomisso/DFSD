const seatingChart = [
    ['Alice', 'Bob', 'Charlie', 'David'],
    ['Emily', 'Fiona', 'George', null], 
    ['Henry', 'Isabella', 'Jack', 'Kevin'],
    ['Lily', 'Michael', 'Noah', 'Olivia'],
    ['Peter', 'Quinn', 'Ryan', 'Sophia']
  ];
  
  
  console.log("Initial Seating Chart:");
  printChart(seatingChart);
  
  
  seatingChart[2][3] = 'Sophia';
  seatingChart[4][3] = null; 
  
  
  console.log("Updated Seating Chart:");
  printChart(seatingChart);
  
 
  function printChart(chart) {
    for (let row of chart) {
      console.log(row);
    }
  }
  
