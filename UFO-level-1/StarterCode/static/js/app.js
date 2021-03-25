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