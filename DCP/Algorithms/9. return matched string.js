// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

function autoComplete(queryString, setOfString) {
    return setOfString.filter(string => {
        if (string[0] == queryString[0] && string[1] === queryString[1]) {
            return string
        }
    })
}

const result = autoComplete('de', ['dog', 'deer', 'deal'])
console.log('result', result)