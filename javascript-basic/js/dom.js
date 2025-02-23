// DOM:HTMLドキュメントをオブジェクトのように扱える仕組み

// documentオブジェクト
// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);

// 補足：windowオブジェクト
// windowオブジェクトの中身を出力する
// これにより、大量のプロパティ（キーと値のセット）が呼び出される。
// この中にdocumentオブジェクトも存在している。
// プロパティにある「f」は、function(関数)のこと＝メソッドが定義されていること。
console.log(window);


// getElementById()：HTML要素をidで取得する
// HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'));
// HTML要素をclassで取得し、中身を出力する
console.log(document.getElementsByClassName('heading'));


// getElementsByClassName()：HTML要素をclassで取得する
// 複数のHTML要素を取得し、定数に代入する
const headings = document.getElementsByClassName('heading');
// for文を使い、複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
}

// querySelector()：HTML要素をCSSセレクタで取得する（最初の1つ）
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));


// querySelectorAll()：HTML要素をCSSセレクタで取得する（すべて）
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));


// 複数のHTML要素を取得し、定数に代入する
const cssHeadings = document.querySelectorAll('.heading');
const cssLists = document.querySelectorAll('li');
// 複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < cssHeadings.length; i++) {
  console.log(cssHeadings[i]);
}
for (let i = 0; i < cssLists.length; i++) {
  console.log(cssLists[i]);
}



// 【javascriptでHTMLに追加】
// １.createElement()メソッド:HTML要素を新しく作成する
// ２.textContent / innerHTMLプロパティ:作成したHTML要素にテキストを追加
// textcontent:文字列を追加
// innerHTML:文字列に加えてタグも記述可能
// ３.appendChild()メソッド:documentオブジェクトに子要素として末尾に追加。

// １.新しくli要素を作成し、定数に代入する
const li = document.createElement('li');
// ２.作成したli要素にテキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3';
// ３.ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);