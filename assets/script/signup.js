let emailField = document.querySelector('.email-address-field')
let getStartedButton = document.querySelector('.get-started-btn')

let invalidEmailText = document.querySelector('.invalid-email-text')

getStartedButton.addEventListener('click', () => {
  if(emailField.value === 'null' || emailField.value === '') {
    invalidEmailText.innerText = 'Email is required.'
    invalidEmailText.style.display = 'block'
  } else if ( emailField.value.includes('@') == false || emailField.value.includes('.com') == false) {
    invalidEmailText.innerText = 'Please enter a valid email address.'
    invalidEmailText.style.display = 'block'
  } else {
    invalidEmailText.style.display = 'none'
  }
})

let subscriptionInput = document.querySelector('#subscription-input')
let subscriptionButton = document.querySelector('#subscription-btn')
let validationText = document.querySelector('.email-validation-text')


subscriptionButton.addEventListener('click', () => {
  if(subscriptionInput.value === 'null' || subscriptionInput.value === '') {
    validationText.innerText = 'Email is required.'
    validationText.style.display = 'block'
  } else if ( subscriptionInput.value.includes('@') == false || subscriptionInput.value.includes('.com') == false) {
    validationText.innerText = 'Please enter a valid email address.'
    validationText.style.display = 'block'
  } else {
    validationText.style.display = 'none'
  }
})