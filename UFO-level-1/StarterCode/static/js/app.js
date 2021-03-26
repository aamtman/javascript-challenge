// from data.js
var tableData = data;
var tableBody = d3.select("tbody");
function buildData(data){
    tableBody.html("");
    data.forEach((tableRow)=>{
        var Row= tableBody.append("tr");
        Object.values(tableRow).forEach((Value)=>{
            var tableCell=Row.append("td");
            tableCell.text(Value);
        })
    })
}
// YOUR CODE HERE!
buildData(tableData)

function filterData(){
    var tableDate = d3.select ("#datetime").property("value");
    var filterData = tableData;
    filterData= filterData.filter(datarow=>datarow.datetime===tableDate);
    buildData(filterData);
}

d3.selectAll("#filter-btn").on("click",filterData);

var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "comments"]

// Inputing the data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Creating an Event Listener for the Button
// Setting up the Filter Button for Date and City
button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)
    // trim the inputs 
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // add comment if not sightings
    
        else {
            $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})