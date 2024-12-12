const CURRENT_YEAR = new Date().getFullYear()
const AGE_LIMIT = 120

class Person {
    constructor(id, name, lastName, birthDate) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.birthDate = new Date(birthDate);
    }

    getAge = () => {
        let age = CURRENT_YEAR - this.birthDate.getFullYear()
        const tempDate = new Date(this.birthDate.valueOf())
        tempDate.setFullYear(CURRENT_YEAR)
        // check if birthday has already passed this year
        if (Date.now() < tempDate) {
            age--
        }
        return age
    }

    toString = () =>
        `ID: ${this.id}\nFULL NAME: ${this.name} ${this.lastName}\n` +
        `AGE: ${this.getAge()} (${this.birthDate.toLocaleDateString()})`;
}

class PersonArray extends Array {
    averageAge = () =>
        (this.reduce((accum, person) => accum += person.getAge(), 0) / this.length)
            .toFixed(2)

    minAge = () => this
        .sort((a, b) => a.getAge() - b.getAge())[0]
        .getAge()

    maxAge = () => this
        .sort((a, b) => a.getAge() - b.getAge())[this.length - 1]
        .getAge()

    deletePerson = ({id: id}) => {
        const index = this.findIndex(person => id === person.id)
        if (index >= 0)
            this.splice(index, 1)
        else
            throw new Error('ID is not found')
    }
}

const checkId = (id) => {
    if (!id.trim()) throw Error('Id must not be empty')
    if (id.length < 7) throw Error('Id must be at least 7 characters long')
    if (!/^[A-Za-z0-9]+$/.test(id)) throw Error('Id must contain only numbers or letters')
}

const checkName = (name) => {
    if (!name.trim()) throw Error('Name and last name must not be empty')
    if (name.length < 2) throw Error('Name and last name must be at least 2 characters long')
    if (!/^[A-Z]+(-)?( )?[A-Z]+$/i.test(name))
        throw Error('Name and last name must contain letters and hyphen/space for double names')
}

const checkBirthDate = (dateStr) => {
    const date = new Date(dateStr)
    if (isNaN(date.valueOf())) throw Error('Date format is incorrect')
    if (date >= Date.now()) throw Error('Must not insert future dates!')
    if (CURRENT_YEAR - date.getFullYear() > AGE_LIMIT) throw Error(`Age must be less than ${AGE_LIMIT} years`)
}