const stringInput2 = document.getElementById('stringInput2')
const substringInput2 = document.getElementById('substringInput2')
const resultLabel2 = document.getElementById('resultLabel2')
const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', function() {
    string = stringInput2.value
    substring = substringInput2.value

    resultLabel2.style.display = "block"
    resultLabel2.textContent = 
        string.includes(substring) ? "Found!" : "Not Found :("
})

// Author: Joshua Frell Te