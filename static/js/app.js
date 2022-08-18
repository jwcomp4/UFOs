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
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            // at this point this function will loop through each object in the array
            // it will append a row to the HTML table
            // it will add each value from the object into a cell.

        });
    });


}