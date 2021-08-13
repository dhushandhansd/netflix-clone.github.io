let emailInput = document.querySelector('.email-address')
let passwordInput = document.querySelector('.password')

let signInButton = document.querySelector('#sign-in-btn')

let invalidEmailText = document.querySelector('.invalid-email-text')
let invalidPasswordText = document.querySelector('.invalid-password-text')

// localStorage.setItem('authorized',false)
document.cookie = 'authorized=false'

signInButton.addEventListener('click', () => {
  if(emailInput.value === '' || emailInput.value === null &&
    passwordInput.value === '' || passwordInput.value === null) {
    invalidEmailText.innerHTML = 'Please enter a valid email address or phone number'
    invalidEmailText.style.display = 'block'
    invalidPasswordText.innerHTML = 'Your password must contain between 4 to 60 characters'
    invalidPasswordText.style.display = 'block'
    document.cookie = 'authorized=false'
    // localStorage.setItem('authorized',false)
  } else {
    invalidEmailText.style.display = 'none'
    invalidPasswordText.style.display = 'none'
  }
  
  if(emailInput.value == 'dhushandhan.sd@gmail.com' && passwordInput.value == 'shree@123') {
    invalidEmailText.style.display = 'none'
    invalidPasswordText.style.display = 'none'
    document.cookie = 'authorized=true'
    // localStorage.setItem('authorized',true)
    location.href = 'https://dhushandhansd.github.io/netflix-clone.github.io/dashboard.html'
  } else {
    invalidEmailText.innerHTML = 'Invalid Email or Phone Number'
    invalidEmailText.style.display = 'block'
    invalidPasswordText.innerHTML = 'Password does not Match'
    invalidPasswordText.style.display = 'block'
    // localStorage.setItem('authorized',false)
    document.cookie = 'authorized=true'
  }
})

function onChangeFunction() {
  if(!(emailInput.value == null) && !(passwordInput.value)) {
    invalidEmailText.innerHTML = 'none'
    invalidPasswordText.innerHTML = 'none'
  }
}