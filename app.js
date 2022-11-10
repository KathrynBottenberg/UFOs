// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// function to build a table
function buildTable(data) {
    //clear the table
    tbody.html("");
    //Next, loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");
        // loop through each field in the dataRow and add
        // each value as a table cell <td />
        Object.values(dataRow).forEach((val) => {
            //set up the action of appending data into a table data tag (<td>)
            let cell = row.append("td");
            //add only the text values to the cells
            cell.text(val);
            }
        );

    });
};