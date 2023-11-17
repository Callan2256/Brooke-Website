// Function to fetch and parse CSV data
function fetchCSVData() {
  fetch('import.csv') // Update the path to your CSV file
    .then((response) => response.text())
    .then((csvData) => {
      // Split the CSV data into rows
      const rows = csvData.split('\n');

      // Extract the header (first row) and split it into column names
      const header = rows[0].split(',');

      // Initialize an array to store the parsed data
      const data = [];

      // Iterate through rows and create objects
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        const entry = {};

        // Map values to column names
        for (let j = 0; j < header.length; j++) {
          entry[header[j]] = row[j];
        }

        data.push(entry);
      }

      // Now, 'data' contains the parsed data from the CSV file

      // Display the data as a list on the main page
      const mainContent = document.querySelector('main');

      // Create an unordered list to hold the data
      const ul = document.createElement('ul');

      // Loop through the data and create list items
      data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.title} by ${item.author} (${item.genre}) - Published in ${item.publication_date}`;
        ul.appendChild(li);
      });

      // Append the list to the main content area
      mainContent.appendChild(ul);
    })
    .catch((error) => {
      console.error('Error fetching or parsing CSV data:', error);
    });
}

// Call the function to fetch and parse the CSV data
fetchCSVData();
