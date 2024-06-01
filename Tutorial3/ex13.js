function calculateCircleArea(radius) {

    const area = Math.PI * radius * radius;
  
    return area;
  }
  
  radius = 5;
  const circleArea = calculateCircleArea(radius);
  
  console.log("The area of the circle with radius", radius, "is:", circleArea);
  