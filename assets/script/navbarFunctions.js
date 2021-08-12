let langSelect = document.getElementById('langSelect')
let selectIndex = 0;
function langSelection() {
  let langOptions = langSelect.options[langSelect.selectedIndex].value;

  localStorage.setItem('language',langOptions)
  console.log(langOptions)
}

if(localStorage.getItem('language') === 'English') {
  selectIndex = 1;
  langSelect.selectedIndex = selectIndex;
} else if(localStorage.getItem('language') === 'Tamil') {
  selectIndex = 2;
  langSelect.selectedIndex = selectIndex;
} else if(localStorage.getItem('language') === 'Hindi') {
  selectIndex = 3;
  langSelect.selectedIndex = selectIndex;
}