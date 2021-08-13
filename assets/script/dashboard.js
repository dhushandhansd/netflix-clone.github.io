let auth = localStorage.getItem('authorized')

function authorized() {
  if(auth === 'false') {
    location.href = 'https://dhushandhansd.github.io/netflix-clone.github.io/404.html'
  }
}