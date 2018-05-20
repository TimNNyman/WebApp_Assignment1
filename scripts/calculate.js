window.onload = function() {
    setup();
}

function setup() {

    var rows = document.getElementById("pricetable").getElementsByTagName("tr").length;
    var columns = document.getElementById("pricetable").getElementsByTagName("thead")[0].getElementsByTagName("th").length;

    //Adds the button
    var newBtn = document.createElement("input");
    newBtn.setAttribute("type", "button");
    newBtn.setAttribute("value", "Calculate");
    newBtn.onclick = function() {
        calculate();
    }
    document.getElementById("content").appendChild(newBtn);

    //Adds a new column
    var headRow = document.getElementById("pricetable").rows[0];
    var newHeadCell = headRow.insertCell(columns);
    newHeadCell.innerHTML = "Total";

    for (i = 1; i < rows; i++) {
        var row = document.getElementById("pricetable").rows[i];
        var newCell = row.insertCell(columns);
        newCell.className = 'sumColumn';
        newCell.innerHTML = "0";
    }

    //Adds a new row
    var newRow = document.getElementById("pricetable").insertRow(rows);
    newRow.id = "sumrow";

    var newSumCell = newRow.insertCell(0);
    newSumCell.className = 'totalSum';
    var newTotalCell = newRow.insertCell(0);
    newTotalCell.className = 'totalAmount';

    for (i = 0; i < columns - 1; i++) {
        var newCell = newRow.insertCell(0);
    }

    calculate();
}

function calculate() {

    var totalSumInt = 0;
    var totalAmountInt = 0;
    var itemPrice = document.getElementsByClassName('sumColumn');
	
	//Updates the price column and sums up the total sum and the total amount.
    for (var i = 0; i < itemPrice.length; i++) {

        var table = document.getElementById('pricetable');
        var price = parseInt(table.rows[i + 1].cells[3].innerHTML) * parseInt(table.rows[i + 1].cells[4].children[0].value);
        itemPrice[i].innerHTML = price.toString();

        totalAmountInt += parseInt(table.rows[i + 1].cells[4].children[0].value);
        totalSumInt += price;
    }

	//Updates the total amount and the total price.
	var sumRow = document.getElementById("sumrow");
	sumRow.cells[4].innerHTML = totalAmountInt.toString();
    sumRow.cells[5].innerHTML = totalSumInt.toString();
}