// CREATE AN ARRAY OF EMPLOYEES
//remove let - was defined in script-array-practice
employees = [
    'Molly Wollin',
    'Paul Vogel',
    'Kevin Colegrove',
    'Tho Nguyen',
    'Louis Chen'
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

// GET ADD EMPLOYEE FORM AND EMPLOYaddFormEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let empList = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;
$('empCount').value = employeeCount;
$('empCount').innerHTML = $('empCount').value
//$('empCount').value = empCount;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let empId = $('id').value
    let name = $('name').value
    let email = $('email').value
    let extension = $('extension').value
    let department = $('department').value

    //Create delete button
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    let empTable = document.getElementById("empTable");
    let row = empTable.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cell1.innerHTML = empId;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = extension;
    cell5.innerHTML = department;
    //cell6.innerHTML = appendChild(textDelete) 
    //cell6.innerHTML = textContent;
    const deleteEmployee = "<button class='deleteButton' onclick='deleteEmployee()'>X</button>";
    cell6.innerHTML = deleteEmployee;

    //add employee  to table
    empTable.appendChild(row);

    //reset form values 
    //$('addForm').resetForm
    $('id').value = ""
    $('name').value = ""
    $('email').value = ""
    $('extension').value = ""
    $('id').innerHTML = ""
    $('name').innerHTML = ""
    $('email').innerHTML = ""
    $('extension').innerHTML = ""

    //set focus back to id text box
    $('id').focus()

      // Reset form and set focus back to id text box
      const resetForm = () => {
        console.log('resetting form....');
        $('id').value = ""
        $('name').value = ""
        $('email').value = ""
        $('extension').value = ""
        $('id').innerHTML = ""
        $('name').innerHTML = ""
        $('email').innerHTML = ""
        $('extension').innerHTML = ""
        $('id').focus()
      } 


})

const updateCount = () => {
    //console.log('updating count...');
    employeeCount = employeeCount + 1;
    $('empCount').value = employeeCount;
    $('empCount').innerHTML = $('empCount').value
    $('empCount').innerHTML= $('empCount').innerHTML ;
    console.log('increment employee count 2: ' + $('empCount').value);

  }


const deleteEmployee = (e) => {
    console.log('delete employee...');
    //alert(document.getElementById("empTable").childNodes[1].childElementCount);
    //alert(e.rowIndex)
    //alert(getElementById("empTable").row)
    if (confirm('Are you sure you want to delete this employee?')) {
        // remove employee
        //deleteRow(e.target.empTable.rowIndex)
        document.getElementById("empTable").deleteRow(1);
        //decrement employee count
        employeeCount = employeeCount - 1;
        $('empCount').value = employeeCount;
        $('empCount').innerHTML = $('empCount').value
        $('empCount').innerHTML= $('empCount').innerHTML ;
        console.log('decrement employee count 2: ' + $('empCount').value);
    }
  }

//console.log('addForm event listener....');      
$('addEmployee').addEventListener('click', updateCount)
//$('deleteButton').addEventListener('click', deleteEmployee)

// DELETE EMPLOYEE
// HANDLE THE CLICK EVENT OF THE DELETE BUTTON
empTable.addEventListener('click', (e) => {
    // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
    if (e.target.classList.contains('delete')) {
        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this employee?')) {
            // remove the selected employee
            //row.removeChild(e.target.parentElement)
            employeeCount = employeeCount - 1;
            $('empCount').value = employeeCount;
            $('empCount').innerHTML = $('empCount').value
            $('empCount').innerHTML= $('empCount').innerHTML ;
            console.log('increment employee count 2: ' + $('empCount').value);
            console.log('employeeCount 2: ' + employeeCount)
        }
    }
})
