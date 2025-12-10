const stringInput1 = document.getElementById('stringInput1')
const removeSpaceBtn = document.getElementById('removeSpaceBtn')
const resultLabel1 = document.getElementById('resultLabel1')

removeSpaceBtn.addEventListener('click', function() {
    const string = stringInput1.value
    resultLabel1.style.display = "block"
    resultLabel1.textContent = string.replaceAll(' ', '')
})