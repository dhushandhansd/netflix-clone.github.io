// let auth = localStorage.getItem('authorized')
let auth = document.cookie
let value = ''

for(let i = 0; i< auth.length; i++) {
  if(auth.charAt(i) == '=') {
    value += auth.substring(i+1,auth.length)
  }
}

function authorized() {
  if(value === 'false') {
    location.href = 'https://dhushandhansd.github.io/netflix-clone.github.io/404.html'
  }
}