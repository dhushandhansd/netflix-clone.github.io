let auth = localStorage.getItem('authorized')

function authorized() {
  if(auth === 'false') {
    window.push('https://dhushandhansd.github.io/netflix-clone.github.io/404.html','_self')
  }
}