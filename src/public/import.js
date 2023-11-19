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
      const bookTile = document.getElementsByClassName('tileContainer');
      console.log(bookTile)

      // Loop through the data and create list items
      data.forEach((item) => {
        const book = document.createElement('div');
        book.classList.add('bookBox');

        const title = item.title;

        const name = document.createElement('p');
        const text = document.createTextNode(title);
        name.appendChild(text);
        book.appendChild(name);

        console.log(book)

        bookTile[0].appendChild(book);
      });

    })
    .catch((error) => {
      console.error('Error fetching or parsing CSV data:', error);
    });
}

// Call the function to fetch and parse the CSV data
fetchCSVData();
