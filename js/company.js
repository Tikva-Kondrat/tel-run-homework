class Company {

    static MIN_SALARY = 15_000 // min salary of this company

    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee = function (employee) {
        const e = this._employees.find(e => e.id === employee.id);
        if (!e) {
            this._employees.push(employee);
            employee.isEmployed = true;
        }
        return !e;
    }

    removeEmployee = function (id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            const fired = this._employees.splice(index, 1);
            fired.forEach(person => person.isEmployed = false);
        }
        return index >= 0;
    }

    get size() {
        return this._employees.length;
    }

    getMinEmployeeAge = () =>
        this._employees
            .map(employee => employee.age)
            .sort((a, b) => a - b)[0]

    getMaxEmployeeAge = () =>
        this._employees
            .map(employee => employee.age)
            .sort((a, b) => a - b)[this.size - 1]

    getEmployeesAverageAge = () =>
        getAverageOfNumberArr(this.employees.map(employee => employee.age), 1)

    getTotalSalary = () =>
        getTotalOfNumberArr(this.employees.map(employee => employee.salary))

    getAverageSalary = () =>
        getAverageOfNumberArr(this.employees.map(employee => employee.salary))
}

