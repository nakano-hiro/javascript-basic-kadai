// アロー関数
// const 定数名 = () => {
//  一連の処理  
// }

// functionの方法。昔からあるらしい
// function 関数名() {
//   一連の処理
// }

// 朝の挨拶を出力する関数を定義する
const sayGoodMorning = () => {
  console.log('おはようございます！');
  console.log('昨日はよく眠れましたか？');
  console.log('今日も一日頑張りましょう！');
}

// 夜の挨拶を出力する関数を定義する
const sayGoodEvening = () => {
  console.log('こんばんは！');
  console.log('今日も一日お疲れさまでした。');
}

// 朝の挨拶を出力する関数を呼び出す
sayGoodMorning();
// 夜の挨拶を出力する関数を呼び出す
sayGoodEvening();

// 処理の内容	                      関数名    例
// ○○を追加する	                    add○○	    addProduct（商品を追加する）
// ○○を削除する	                    remove○○  removeProduct（商品を削除する）
// ○○が存在するかチェックする	       has○○     hasProduct（商品が存在するかチェックする）
// ○○の状態になっているかチェックする is○○      isPurchased（購入されたかどうかチェックする）
// ○○が起こったときに処理を行う      on○○      onPushedButton（ボタンが押されたときに処理を行う）


// 引数：決まっていない値
// アロー関数などの()内に引数名を定義することで、決まっていない値を使うことができる

// 与えられた引数priceと引数shippingFeeを加算し、その値を出力する関数を定義する
const addTwoArguments = (price, shippingFee) => {
  console.log(price + shippingFee + '円');
}
// 関数を呼び出し、引数として購入金額を渡す
addTwoArguments(1200, 500);


// 戻り値
// アロー関数内で、returnを記述すれば戻り値を返せる

// 与えられた引数numを2倍にし、その値を戻り値として返す関数を定義する
const double = (num) => {
  return num * 2;
}
// 関数の戻り値を出力する
console.log(double(30));


// スコープ：変数や定数を使える有効範囲のこと
// スコープ外で使うとエラーが発生する
// 以下の例でいくと、アロー関数内で定数を宣言しているため、
// 関数外で定数を使おうとするとわからない状況になっている。
// 関数＝家で例えると、家の外の他人たちにとっては知らない人ってこと。

// 関数の中で定数を宣言し、関数の中で定数を使う
const useVariable = () => {
  const userName = '侍太郎';
  console.log(userName);
}
// 関数を呼び出す
useVariable();
// 関数の中で宣言した定数を関数の外で使う
// ※エラーが発生している
console.log(userName);