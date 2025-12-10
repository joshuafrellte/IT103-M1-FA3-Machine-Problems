const stringInput4 = document.getElementById('stringInput4')
const resultLabel4 = document.getElementById('resultLabel4')
const countBtn = document.getElementById('countBtn')

countBtn.addEventListener('click', function() {
    const string = stringInput4.value.trim()
    const length = string.length

    resultLabel4.style.display = "block"
    resultLabel4.textContent = `Count: ${length}`
})

// Author: Joshua Frell Te