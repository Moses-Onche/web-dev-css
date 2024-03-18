let bigbox = document.getElementById('cssbox');

bigbox.addEventListener('click', function(){
  if (this.style.width == '250px') {
    this.style.width = 'min-content';
  } else {
    this.style.width = '250px';
  }
});