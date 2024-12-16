const company = new Company()

addEmployee.onclick = () => {
    try {
        checkId(personId.value)
        checkName(firstName.value)
        checkName(lastName.value)
        checkBirthDate(birthDate.value)
        checkSalary(salary.value)

        const employee = new Employee(
            personId.value,
            firstName.value,
            lastName.value,
            birthDate.value,
            salary.value
        )

        company.addEmployee(employee)
        displayEmployee(employee)
        updateStatistics()
        clearInputs()

    } catch (e) {
        alert(e.message)
    }
}

const displayEmployee = (employee) => {
    const item = document.createElement('li')

    const deleteBtn = createDeleteBtn(() => {
        company.removeEmployee(employee)
        updateStatistics()
    });

    const item_text = document.createElement('pre')
    item_text.style.marginBottom = '0px'
    item_text.textContent = employee.toString()
    item.append(item_text, deleteBtn)

    employeeList.append(item)

}

const updateStatistics = () => {
    removeAllChildren(stats)

    if (!company.size) return

    stats.append(
        createInfoElement('li', 'Total', company.size),
        createInfoElement('li', 'Min employee age', company.getMinEmployeeAge()),
        createInfoElement('li', 'Max employee age', company.getMaxEmployeeAge()),
        createInfoElement('li', 'Average employee age', company.getEmployeesAverageAge()),
        createInfoElement('li', 'Total salary', company.getTotalSalary()),
        createInfoElement('li', 'Average salary', company.getAverageSalary())
    )
}

clearInputs = () =>
    personId.value = firstName.value = lastName.value = birthDate.value = salary.value = ''