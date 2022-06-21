
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Expense tracker</title>
    

</head>
<body>

    <h1>Expense Tracker</h1>
    <container id="container-grid">
        
        <div id="box-1">
            <h2>Date:</h2>
            <input type="date" name="date" id="inpDate">
        </div>

        <div id="box-2">
            <h2>Name:</h2>
            <input type="text" name="Type" id="inpName">
        </div>

        <div id="box-3">
            <h2>Type:</h2>
            <input list="expense" id="inpType" name="myExpense" /></label>
        </div>

        <!-- Drop down menu for "type" of expense -->
            <datalist id="expense">
              <option value="Credit Card">
              <option value="Debit Card">
              <option value="Cash">
              <option value="eTransfer">
              <option value="other">
            </datalist>

        <div id="box-4">
            <h2>Amount:</h2>
            <input type="text" name="" id="inpAmount">
        </div>
    </container>

    <button id="expenseButton">Add Expense</button>

    <table id="expenseTable">
        <caption>Expense Table</caption>
        <tr>
            <th>Date:</th>
            <th>Name:</th>
            <th>Type:</th>
            <th>Amount:</th>
        </tr>
        <tr>
            <td id="tableData"></td>
        </tr>
    </table>

    <ul id="ul"></ul>

<script>

let inpAmount = document.getElementById("inpAmount");
let inpDate = document.getElementById("inpDate");
let inpType = document.getElementById("inpType");
let inpName = document.getElementById("inpName");
let expenseButton = document.getElementById("expenseButton");
let expenseTable = document.getElementById("expenseTable");

// Adding the input fields to a table element on button click //
expenseButton.addEventListener("click", function(){

    let tableData = document.createElement('td');

        tableData.innerText = inpName.value + " ";
        expenseTable.appendChild(tableData);

    
})


</script>

</body>
</html>
