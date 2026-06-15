const employees = [
    {id :1,name: 'John Doe', age : 30,department : 'IT',salary : 50000,specialization : 'JavaScript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000,specialization : 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000,specialization : 'Java' },    
]
let totalEmployees =''

function displayEmployees(){
    for(const employee of employees){
        totalEmployees += 
        `
        <p>${employee.id} : ${employee.name} - ${employee.age} - ${employee.salary} </p>
        <br>   
        `;
    }
    document.getElementById('employeeDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce
        ((total , employee) => employee.salary + total , 0);
    alert(`Total Salaries: ${totalSalaries}`)
}
let hrEmployeesDisplay = ''
function displayHREmployees(){

    for(const employee of employees){
        if (employee.department === 'HR'){
            hrEmployeesDisplay += 
            `
            <p>${employee.id} : ${employee.name} - ${employee.age} - ${employee.salary}</p>   
            `;
        }
    }
    document.getElementById('employeeDetails').innerHTML = hrEmployeesDisplay
}

function findEmployeeById(employeeId){
    for(const employee of employees){
        if(employeeId === employee.id){
            alert(`employee found`)
            const foundemployee = `<p>${employee.id} : ${employee.name} - ${employee.age} - ${employee.salary}</p>`;
            document.getElementById('employeeDetails').innerHTML = foundemployee
        }
    }


}

function findbySpecialization(employeeSpecn){
    for(const employee of employees){
        if(employeeSpecn === employee.specialization){
            const empspc = `<p>${employee.id} : ${employee.name} - ${employee.age} - ${employee.salary} - ${employee.specialization}</p>`
            document.getElementById('employeeDetails').innerHTML = empspc
        }
    }
    

}