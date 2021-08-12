let emailInput = document.querySelector('.email-address')
let passwordInput = document.querySelector('.password')

let signInButton = document.querySelector('#sign-in-btn')

let invalidEmailText = document.querySelector('.invalid-email-text')
let invalidPasswordText = document.querySelector('.invalid-password-text')

signInButton.addEventListener('click', () => {
  if(emailInput.value === '' || emailInput.value === null &&
    passwordInput.value === '' || passwordInput.value === null) {
    invalidEmailText.innerHTML = 'Please enter a valid email address or phone number'
    invalidEmailText.style.display = 'block'
    invalidPasswordText.innerHTML = 'Your password must contain between 4 to 60 characters'
    invalidPasswordText.style.display = 'block'
  }  else {
    invalidEmailText.style.display = 'none'
    invalidPasswordText.style.display = 'none'
  }
})