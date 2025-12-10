const stringInput3 = document.getElementById('stringInput3')
const substringInput3 = document.getElementById('substringInput3')
const replaceInput = document.getElementById('replaceInput')
const replaceBtn = document.getElementById('replaceBtn')
const resultLabel = document.getElementById('resultLabel3')

replaceBtn.addEventListener('click', function() {
    const string = stringInput3.value
    const substring = substringInput3.value
    const replacement = replaceInput.value

    resultLabel3.style.display = "block"
    resultLabel.textContent = string.includes(substring) ? 
                            string.replace(substring, replacement) : 
                            "Substring not found!"
})

// Author: Joshua Frell Te
