const AGE_LIMIT = 120

class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
        this._isEmployed = false;
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get birthDate() {
        return this._birthDate;
    }

    set isEmployed(isEmployed) {
        this._isEmployed = isEmployed;
    }

    get age() {
        const ageDiffMs = (new Date()) - this._birthDate;
        const ageDate = new Date(ageDiffMs);
        return ageDate.getUTCFullYear() - 1970;
    }

    fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    toString() {
        return `ID: ${this.id}\nFULL NAME: ${this.fullName()}\n` +
        `AGE: ${this.age} (${this.birthDate.toLocaleDateString()})`;
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
    const currentYear = new Date().getFullYear()
    if (isNaN(date.valueOf())) throw Error('Date format is incorrect')
    if (date >= Date.now()) throw Error('Must not insert future dates!')
    if (currentYear - date.getFullYear() > AGE_LIMIT) throw Error(`Age must be less than ${AGE_LIMIT} years`)
}
