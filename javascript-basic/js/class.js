// class Product {
  //  constructor() {
  //    初期化の内容
  //  }
  // メソッドを定義する
  //  メソッド名() {
  //    一連の処理
  //  }
// }


// クラス:class⇒オブジェクトの設計図
// オブジェクト:配列における、プロパティの固まりの一つ
// プロパティ:キーと値のセットのこと
// const オブジェクト名⇒personalData = { キー⇒name: 値⇒'侍太郎', キー⇒age: 値⇒36};
// オブジェクトの取得・更新・追加↓
// 例：personalData.age

// インスタンス:クラスを元に作られたオブジェクト

// メソッド:オブジェクトに持たせることができる関数のこと
// ⇒任意のタイミングで処理を行わせることができる

// クラス名を定義する
class Product {
  // コンストラクタ:最初の処理
  // ⇒インスタンス化すると同時に処理を実行（初期化）する
  constructor(name, price, category) {
    // this:オブジェクト名の部分を置き換えている。
    // ⇒置き換えているのでどんなオブジェクト名にも対応できる。
    this.name = name;
    this.price = price;
    this.category = category;
  }
  // メソッドを定義する
  describe() {
    console.log('この商品名は' + this.name + 'です。');
  }
}
// インスタンス化する
const shampoo = new Product('シャンプー', 500, '生活雑貨');
const coffee = new Product('コーヒー', 1500, '飲料');
// インスタンス（オブジェクト）の値を出力する
console.log(shampoo);
console.log(coffee);

// メソッドを呼び出す（実行する）
shampoo.describe();

// 通常のオブジェクトにメソッドを定義することもできる
// 通常のおジェクトにメソッドを定義する
const user = {
  name: '侍太郎',
  age: 36,
  gender: '男性',
  greet: () => {
    console.log('よろしくお願いします！');
  }
}
// メソッドを呼び出す（実行する）
user.greet();