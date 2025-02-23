// イベント処理を理解しよう

// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('クリックされました！');
});


// イベント処理でフォームを操作しよう

// add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');
// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list');

addBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'これはリスト要素です';
  parentList.appendChild(li);
});


// count-btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');

// HTML要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener('click', () => {
  // テキストボックスに入力された文字列を取得する
  const text = document.forms.textForm.textBox.value;
  // 取得した文字列の文字数を出力する
  console.log(text.length + '文字');
});

const areaBtn = document.getElementById('area-btn');

areaBtn.addEventListener('click', () => {
  const area = document.forms.areaForm.area.value;
  console.log(area);
});

// os-btnというidを持つHTML要素を取得し、定数に代入する
const osBtn = document.getElementById('os-btn');

// HTML要素がクリックされたときにイベント処理を実行する
osBtn.addEventListener('click', () => {
  // すべてのチェックボックスを配列風のデータで取得する
  const items = document.forms.osForm.os;

  // 繰り返し処理でチェックボックスを1つずつ取り出し、もし選択されていれば値を出力する
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      console.log(items[i].value);
    }
  }
});