let langSelect = document.getElementById('langSelect')
let selectIndex = 0;
function langSelection() {
  let langOptions = langSelect.options[langSelect.selectedIndex].value;

  localStorage.setItem('language',langOptions)
  console.log(langOptions)
}

if(localStorage.getItem('language') === 'English') {
  selectIndex = 0;
  langSelect.selectedIndex = selectIndex;
} else if(localStorage.getItem('language') === 'Tamil') {
  selectIndex = 1;
  langSelect.selectedIndex = selectIndex;
} else if(localStorage.getItem('language') === 'Hindi') {
  selectIndex = 2;
  langSelect.selectedIndex = selectIndex;
}

let signInButton = document.getElementById('#sign-in-btn')

signInButton.addEventListener('click', () => {
  window.location.href = 'https://dhushandhansd.github.io/netflix-clone.github.io/index.html'
  // window.location.href = 'http://127.0.0.1:5500/login.html'
})