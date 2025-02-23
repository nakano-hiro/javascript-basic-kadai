const btnOn = document.getElementById('btn');

btnOn.addEventListener('click', () => {
  let text = document.getElementById('text');
  text.innerHTML = 'ボタンをクリックしました';
});