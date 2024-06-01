const buttonSound = new Audio('C:\Users\laure\OneDrive\Documents\DFSD\Project.mp3'); 

function playButtonSound() {
  buttonSound.play();  
}



function fetchCatHistoryFacts() {
  fetch('https://cat-fact.herokuapp.com/facts?animal_type=cat&category=history')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const dataLength = data.length;

      const randomIndex = Math.floor(Math.random() * dataLength);

      const randomFact = data[randomIndex].text;

      console.log(randomFact); 
      document.getElementById('catFact').textContent = randomFact;
    })
    .catch(error => {
      console.error('Error fetching cat fact:', error);
      document.getElementById('catFact').textContent = 'An error occurred while fetching the cat fact.';
    });
}
