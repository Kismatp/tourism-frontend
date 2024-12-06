// Define the API URL
const apiUrl = 'http://localhost:5000/api/skills';

// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
    const skillsList = document.getElementById('skills-list');

    // Loop through the data and create list items
    data.forEach(skill => {
      const listItem = document.createElement('li');
      listItem.textContent = `${skill.name}: ${skill.description} ($${skill.price})`;
      skillsList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));