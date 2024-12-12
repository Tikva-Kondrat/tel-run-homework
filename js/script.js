const personArr = new PersonArray()

// возвращать массив ошибок
// добавить возможность дефиса для имен и фамилий, а также русский и иврит

addPerson.onclick = () => {
    try {
        checkId(personId.value)
        checkName(firstName.value)
        checkName(lastName.value)
        checkBirthDate(birthDate.value)

        const person = new Person(
            personId.value,
            firstName.value,
            lastName.value,
            birthDate.value
        )

        personArr.push(person)
        displayPerson(person)
        updateStatistics()

    } catch (e) {
        alert(e.message)
    } finally {
        clearInputs()
    }
}

const displayPerson = (person) => {
    const item = document.createElement('li')
    item.style.fontSize = '1.2em'
    item.style.marginBottom = '5px'

    const deleteBtn = createDeleteBtn(() => {
        personArr.deletePerson(person)
        updateStatistics()
    });

    const item_text = document.createElement('pre')
    item_text.style.marginBottom = '0px'
    item_text.textContent = person.toString()
    item.append(item_text, deleteBtn)

    personsList.append(item)

}

const updateStatistics = () => {
    removeAllChildren(stats)

    if (!personArr.length) return

    stats.append(
        createStatisticsItem('Total', personArr.length),
        createStatisticsItem('Min age', personArr.minAge()),
        createStatisticsItem('Max age', personArr.maxAge()),
        createStatisticsItem('Average age', personArr.averageAge())
    )
}

const createStatisticsItem = (caption, data) => {
    const statisticItem = document.createElement('li')
    statisticItem.append(`${caption}: ${data}`)
    return statisticItem
}

clearInputs = () => {
    personId.value = firstName.value = lastName.value = birthDate.value = '';
}