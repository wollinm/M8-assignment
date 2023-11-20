//Magdalena Wollin
let storage
//let list
let employee = []
employees = []  //defined in script-array-practice
let empId = ""
let name = ""
let email = ""
let extension = ""
let department = ""

//let deleteBtn
let employeeCount = 0;
let empTable = document.getElementById("empTable");
let row = empTable.insertRow(0);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
let cell5 = row.insertCell(4);
let cell6 = row.insertCell(5);   //use to display delete button

//Create delete button
let deleteBtn = document.createElement('button')
deleteBtn.className = 'btn btn-sm btn-danger delete'
let textDelete = document.createTextNode('X')
deleteBtn.appendChild(textDelete)
//let cellDelete.appendChild(deleteBtn)

//const deleteEmployee = "<button class='btn btn-sm btn-danger delete' onclick='deleteEmployee()'>X</button>";

//new employee list to load if stored employees list is empty
newEmployeesList = [
  [12345671,'Molly Wollin',1111,'molly@hotmail.com','Engineering'],
  [12345672,'Paul Vogel',2222,'paul@hotmail.com','Marketing'],
  [12345673,'Kevin Colegrove',3333,'kevin@hotmail.com','Administrative'],
  [12345674,'Tho Nguyen',4444,'tho@hotmail.com','Engineering'],
  [123456715,'Louis Chen',555,'louis@hotmail.com','Engineering']
]

// DOM handler function
const $ = (id) => document.getElementById(id)

// Get form and employee list from DOM
let form = document.getElementById('addForm')
let empList = document.getElementById('employees')

//check if there are employees stored
if (employees.length === 0) {
  // get employeeS from storage
  storage = localStorage.getItem('employees') || ''
  // if not empty, convert to array and store in empList variable
  if (storage.length > 0) {
      console.log('load employee list from storage')
      employees = JSON.parse(localStorage.getItem('employees'))
      for (let i = 0; i < employees.length; i++) {
          console.log('employees from json' + employees[i])
          storedEmployee = employees[i]
          console.log('storedEmp0: ' + storedEmployee[0])
          console.log('storedEmp1: ' + storedEmployee[1])
          console.log('storedEmp2: ' + storedEmployee[2])
          console.log('storedEmp3: ' + storedEmployee[3])
          console.log('storedEmp4: ' + storedEmployee[4])
          empId = storedEmployee[0]
          empName = storedEmployee[1]
          extension = storedEmployee[2]
          email = storedEmployee[3]
          department = storedEmployee[4]
            //set cells
      row = empTable.insertRow(0)    
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell4 = row.insertCell(3);
      cell5 = row.insertCell(4);
      cell6 = row.insertCell(5);
      cell1.innerHTML = empId
      cell2.innerHTML = empName
      cell3.innerHTML = extension
      cell4.innerHTML = email
      cell5.innerHTML = department
      const deleteEmployee = "<button class='btn btn-sm btn-danger delete' onclick='deleteEmployee() '>X</button>";
      cell6.innerHTML = deleteEmployee;
      //let cellDelete = appendChild(deleteBtn);
      //cell6.appendChild(cellDelete);
      //cell6.innerHTML = cellDelete;
      //add employee  to table
      empTable.appendChild(row);
      //add employee to employees 
      //employee = [empId,empName,extension,email,department]
      //employees.push(employee);
  
      }
      employeeCount = employees.length;
  } else {
    console.log('load new employee list')
    localStorage.setItem('employees',JSON.stringify(newEmployeesList))
    //empList = newEmployeesList;
    //console.log['empList' + empList]
    employeeCount = newEmployeesList.length;
    console.log['employeeCount' + employeeCount]
    let empTable = document.getElementById("empTable");
    console.log('empTable:' + empTable)
    for (let i = 0; i < newEmployeesList.length; i++) {
      //load from storage
      empId = newEmployeesList[i][0]
      empName = newEmployeesList[i][1]
      extension = newEmployeesList[i][2]
      email = newEmployeesList[i][3]
      department = newEmployeesList[i][4]
      //set cells
      row = empTable.insertRow(0)    
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell4 = row.insertCell(3);
      cell5 = row.insertCell(4);
      cell6 = row.insertCell(5);
      cell1.innerHTML = empId
      cell2.innerHTML = empName
      cell3.innerHTML = extension
      cell4.innerHTML = email
      cell5.innerHTML = department
      const deleteEmployee = "<button class='btn btn-sm btn-danger delete' onclick='deleteEmployee() '>X</button>";
      cell6.innerHTML = deleteEmployee;
      //cell6.innerHTML = cellDelete;
      //cell6.appendChild(deleteBtn)
      //cellDelete.appendChild(deleteBtn);
      //cell6.appendChild(cellDelete);
      //add employee  to table
      empTable.appendChild(row);
          //add employee to employees 
      employee = [empId,empName,extension,email,department]
      employees.push(employee);
    }
    //empTable = newEmployeesList;
    //console.log('empTable' + empTable)
    
  }
}

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

$('empCount').value = employeeCount;
$('empCount').innerHTML = $('empCount').value

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    empId = $('id').value
    empName = $('empName').value
    email = $('email').value
    extension = $('extension').value
    department = $('department').value



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
    cell2.innerHTML = empName;
    cell3.innerHTML = extension;
    cell4.innerHTML = email;
    cell5.innerHTML = department;
    //
    //cellDelete.appendChild(deleteBtn);
    //cell6.appendChild(cellDelete);
    //cell6.innerHTML = cellDelete;
    //cell6.innerHTML = appendChild(textDelete) 
    //cell6.innerHTML = textContent;
    const deleteEmployee = "<button class='btn btn-sm btn-danger delete' onclick='deleteEmployee() '>X</button>";
    cell6.innerHTML = deleteEmployee;
    // insert new row at the end of table
    //add employee  to table
    empTable.appendChild(row);
    //add employee to employees 
    employee = [empId,empName,extension,email,department]
    employees.push(employee);
    console.log('employee: ' + employee)
    console.log('employees: ' + employees)
    //
    localStorage.setItem('employees',JSON.stringify(employees))
    //reset form values 
    //$('addForm').resetForm
    $('id').value = ""
    $('empName').value = ""
    $('extension').value = ""
    $('email').value = ""
    $('id').innerHTML = ""
    $('empName').innerHTML = ""
    $('extension').innerHTML = ""
    $('email').innerHTML = ""

    //set focus back to id text box
    $('id').focus()

      // Reset form and set focus back to id text box
      const resetForm = () => {
        console.log('resetting form....');
        $('id').value = ""
        $('empName').value = ""
        $('email').value = ""
        $('extension').value = ""
        $('id').innerHTML = ""
        $('empName').innerHTML = ""
        $('email').innerHTML = ""
        $('extension').innerHTML = ""
        $('id').focus()
      } 


})

function addEmpToTable () {

}
const updateCount = () => {
    //console.log('updating count...');
    employeeCount = employeeCount + 1;
    $('empCount').value = employeeCount;
    $('empCount').innerHTML = $('empCount').value
    $('empCount').innerHTML= $('empCount').innerHTML ;
    console.log('increment employee count: ' + $('empCount').value);

  }

const deleteEmployee = (e) => {
    //console.log('Delete employee...');
    //console.log('e ' + e.target)
    //if (confirm('1Are you sure you want to delete this employee?')) {
    //    // remove employee
    //    //deleteRow(e.target.empTable.rowIndex)
    //    //console.log('row selected to delete: ' + e.target.parentElement.parentElement.rowIndex)
    //   let rowIndex = empTable.length;
    //   console.log('row Index: ' + rowIndex)
    //   //empTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
    //   empTable.deleteRow(rowIndex)
    //    //decrement employee count
    //    employeeCount = employeeCount - 1;
    //    $('empCount').value = employeeCount;
    //    $('empCount').innerHTML = $('empCount').value
    //    $('empCount').innerHTML= $('empCount').innerHTML ;
    //    console.log('decrement employee count: ' + $('empCount').value);
    //}
  }

//console.log('addForm event listener....');      
$('addEmployee').addEventListener('click', updateCount)
//$('deleteButton').addEventListener('click', deleteEmployee)

// DELETE EMPLOYEE
// HANDLE THE CLICK EVENT OF THE DELETE BUTTON
empTable.addEventListener('click', (e) => {
    console.log('Deleting employee selection...');
    // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
    if (e.target.classList.contains('delete')) {
        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this employee?')) {
            // get index to delete from table and from storage
            let rowToDelete = e.target.parentElement.parentElement.rowIndex - 1
            console.log('row selected to delete from table: ' + rowToDelete)
            let rowToDeleteFromStorage = rowToDelete -1;
            console.log('row selected to delete from employees storage: ' + rowToDeleteFromStorage)
            // remove the selected employee
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
            employeeCount = employeeCount - 1;
            $('empCount').value = employeeCount;
            $('empCount').innerHTML = $('empCount').value
            $('empCount').innerHTML= $('empCount').innerHTML ;
            console.log('increment employee count 2: ' + $('empCount').value);
            console.log('employeeCount 2: ' + employeeCount)
            //delete from local storage too
            employees.splice(rowToDeleteFromStorage, 1);
            // Put the object into storage
            localStorage.setItem('employees', JSON.stringify(employees));
        }
    }
})
