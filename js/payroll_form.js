window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) 
        {
            textError.textContent = "";
            return;
        }
        try 
        {
            new EmployeePayrollApp().name = name.value;
            textError.textContent = "";
        } catch (e) 
        {
            textError.textContent = e;
        }
    });



    //UC8 salary Range
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    //in range button the output shown should always be equal to value the user is updating
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;

   });
});

// uc3
const save = () => {
    console.log("save the function outside");
    try {
        console.log("save function");
        let employeePayrollData = createEmployeePayroll();
    } catch (e) {
        return;
   }
}

const createEmployeePayroll = () => {
    
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
            employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    
            employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
            employeePayrollData.department = getSelectedValues('[name=department]');
            employeePayrollData.salary = getInputValueById('#salary');
            employeePayrollData.note = getInputValueById('#notes');
            let date = getInputValueById('#day') +" "+ getInputValueById('#month') +" "+ getInputValueById('#year');
            employeePayrollData.date = Date.parse(date);
            alert(employeePayrollData.toString());
            return employeePayrollData;

            }

            const getSelectedValues = (propertyValue) => {
                console.log(propertyValue);
            let allItems = document.querySelectorAll(propertyValue);
            let selItems = [];
            allItems.forEach(item => {
                if (item.checked) selItems.push(item.value)
            });
            return selItems;
            }

            const getInputValueById = (id) => {
            let value = document.querySelector(id).value;
            return value;
            }
            const getInputElementValue = (id) => {
                let value = document.getElementById(id).value;
                return value;
                }