function getMonth(month, small = true) {
    switch (month) {
        case "01": return small ? "january" : "January"
        case "02": return small ? "february" : "February"
        case "03": return small ? "march" : "March"
        case "04": return small ? "april" : "April"
        case "05": return small ? "may" : "May"
        case "06": return small ? "june" : "June"
        case "07": return small ? "july" : "July"
        case "08": return small ? "august" : "August"
        case "09": return small ? "september" : "September"
        case "10": return small ? "october" : "October"
        case "11": return small ? "november" : "November"
        case "12": return small ? "december" : "December"
    }
}

export function parseDate(dateString) {
    const year = dateString.slice(0, 4)
    const month = dateString.slice(5, 7)
    return {
        year, month
    }
}

export function sortByDate(a, b) {
    const parsedA = parseDate(a)
    const parsedB = parseDate(b)
    if (parsedA.year < parsedB.year) { return -1 }
    return 1
}

export function formatDate(dateString) {
    const { year, month } = parseDate(dateString)
    return `${getMonth(month)} ${year}`
}

export function filterByArr(filterArr, searchTerm) {
    for (let filter of filterArr) {
        if (filter.includes(searchTerm))
            return true
    }
    return false
}