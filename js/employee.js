class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = Number.parseInt(salary);
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (salary > this._salary) {
            this._salary = salary;
        }
    }

    toString = () => super.toString() + `\nSALARY: ${this.salary}`;

}

const checkSalary = (salaryStr) => {
    const salary = Number.parseInt(salaryStr)
    if (isNaN(salary)) throw new Error('Wrong salary format')
    if (salary <  Company.MIN_SALARY) throw new Error ('Be cautious! You are being fooled!')
}
