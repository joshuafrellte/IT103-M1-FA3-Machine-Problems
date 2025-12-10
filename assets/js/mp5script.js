const emailInput = document.getElementById('emailInput')
const checkBtn = document.getElementById('checkBtn')
const resultLabel5 = document.getElementById('resultLabel5')

checkBtn.addEventListener('click', function() {
    const email = emailInput.value.trim()

    resultLabel5.style.display = "block"
    resultLabel5.textContent = email.includes('@') ? 'Valid' : 'Invalid'
})

// Author: Joshua Frell Te