window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            new EmployeePayrollApp().name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });



    //UC8 salary Range
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    //in range button the output shown should always be equal to value the user is updating
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;

    });
});

//new uc3
const save = () => {
    console.log("outside save function");
    try {
        console.log("save function");
        let employeePayrollApp = createEmployeePayroll();
    } catch (e) {
        return;
    }
}
//new uc4-save employee to local storage only for function
function createAndUpdateStorage(employeePayrollApp) {
    let EmployeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (EmployeePayrollList != undefined) {
        EmployeePayrollList.push(employeePayrollApp);
    }
    else {
        EmployeePayrollList = [employeePayrolData]

    }
    alert(EmployeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(EmployeePayrollList));
}

//here uc4 is end



const createEmployeePayroll = () => {

    let employeePayrollApp = new EmployeePayrollApp();
    try {
        employeePayrollApp.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollApp.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollApp.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollApp.department = getSelectedValues('[name=department]');
    employeePayrollApp.salary = getInputValueById('#salary');
    employeePayrollApp.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " +
        getInputValueById('#year');
    employeePayrollApp.date = Date.parse(date);
    alert(employeePayrollApp.toString());
    return employeePayrollApp;
}

const getSelectedValues = (propertyValue) => {
    console.log(propertyValue);
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) selItems.push(item.value);
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

// new uc5-reset emp payroll form
const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', '');
    setValue('#notes', '');
    setValue('#day', '1');
    setValue('#month', 'January');
    setValue('#year', '2020');
}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
