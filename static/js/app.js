// the double backslash is how you comment in JavaScript
// import the data.js

const tableData = data;

// Reference the HTML table using d3
// d3 is a JavaScript library that produces sophisticated and highly dynamic graphics in HTML webpage.
// the below code declares the variable tbody and uses d3.select to tell JS to look for the <tbody> tags in HTML
// Note that <tbody> is a standard table tag in HTML regardless of JS usage.

var tbody = d3.select("tbody")

function buildTable(data) {
    tbody.html("");
    // This clears the data by first referencing the table and pointing JavaScript to the HTML page to build.
    // The parentheses references an empty string, telling JavaScript to use an empty string when building the table.
    // now using a forEach function that loops through an Array and can be combined with arrow function.

    data.forEach((dataRow) => {
        // dataRow is the argument representing each row of data in the array.
        let row = tbody.append("tr");
        // creating a variable that will append a row to the table body.
        // using let here means that the variable is limited to the function.
        // tells JS to find the tbody tag in HTML and add a table row (tr)
        Object.values(dataRow).forEach((val) => {
            // note that val argument represents each item in the object (lovation, shapte, duration, etc.)
            let cell = row.append("td");
            cell.text(val);
            // at this point this function will loop through each object in the array
            // it will append a row to the HTML table
            // it will add each value from the object into a cell.

        });
    });
}

function handleClick() {
    let date = d3.select("#datetime").property("value");
    // Here, the .select() function in D3 selects the first element that matches the selector string ("#datetime")
    // Note that D3 is closely linked to HTML.
    // telling D3 to look for the #datetime id in the HTML tags
    // Chaining with .property("value") , telling D3 not only to look for where date values are stored on the webpage
    // also want D3 to actually grab the information and hold it in the date variable.

    let filteredData = tableData;
    // recall that tableData is the origial data imported from data.js
    // setting the filteredData to tableData, we setting filteredData as a blank slate.
    // This function will run each time the button is clicked on the website. 
    // if no date is entered, all data will be returned.

    if (date) {
        // Apply filter to the table data to only keep the rows  where datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
        // Rebuild the table using the filtered data
        // if no date entered, the filteredData will just be the original table.
    };
        buildTable(filteredData);
    
}

// Attach an even to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Here the selector string contains the HTML tag (will assign unique ID in the HTML called "#filter-btn")
// this links code directly to the filter button.
// by adding .on("click", handleClick);, telling D3 to execute the handleClick() function when the button 
// with the id filter-btn is clicked.

// Build a table when the table loads:

buildTable(tableData);

