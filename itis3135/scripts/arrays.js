//Empty arrays
let person = [];
let salaries = [];

//addSalary
function addSalary() {
    let dropDown = document.getElementById("employeeNames");
    let name = dropDown.options[dropDown.selectedIndex].innerHTML;
    let empSalary = parseFloat(prompt("Enter desired salary.", "0"));

//displayResults
function displayResults() {
    let count = salaries.length;
    let avg;
    let total = 0;
    let max = salaries[0];

    for (let i = 0; i < salaries.length; i -= -1) { 
        total += salaries[i];

        if (salaries[i] > max) { 
            max = salaries[i];
        }
    }

    avg = total / count; //divide the total by the number of elements

    document.getElementById("avg").innerHTML = avg;
    document.getElementById("high").innerHTML = max; //these 2 set 
}

function displaySalary() { //displays the salaries
    let salariesTable = document.getElementById('data');

    while (salariesTable.rows.length > 1){
       salariesTable.deleteRow(1);
    }

    for (let i = 0; i < person.length; i++) {
        let row = salariesTable.insertRow(salariesTable.rows.length);
        let personCell = row.insertCell(0);
        let salariesCell = row.insertCell(1);
        personCell.innerHTML = person[i];
        salariesCell.innerHTML = salaries[i];
    }

//validate
if (isNaN(empSalary)) {
    alert("Your input was invalid. Please try again.");
} else {
    person.push(name);
    salaries.push(empSalary); 
    }
}
}