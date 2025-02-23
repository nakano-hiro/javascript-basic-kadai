/*
console.log(1500 * 0.1);
console.log((800 + 500) + (800 + 500)* 0.1);
console.log(328 % 6);
console.log(Math.round(3.8));

tuki = 2;
console.log(tuki);

str = 'nakano';
num = str;
console.log(num);

hankei = 10;
menseki = hankei * hankei * 3.14;
console.log(menseki);

month = 2;
today = 19;
console.log('今日は' + month + '月'　+ today + '日です');

enshu = 40000;
hankei = enshu / (2 * 3.14);
console.log(hankei);

num = 'abc';
if ( num == 'abc') {
  console.log(num);
}

// prpmpt = 入力画面の呼び出し
// consol.log と似たような感じ
// Math.floor = 切り捨て
*/

/*
【練習１】
tr1 = prompt('商品名を入力してください','');
str2 = prompt('価格を入力してください','');

kakaku = parseInt(str2)
tax = kakaku * 0.1;
zeikomi = (kakaku + tax);
console.log(str1 + 'は' + kakaku + '円、消費税は' + tax + '円、合計' + zeikomi + '円');

【練習２】
str = prompt('半径を入力してください','');

hankei = parseInt(str)

menseki = Math.floor( hankei * hankei * 3.14);
enshu = Math.floor(2 * hankei * 3.14);

console.log('半径' + hankei + 'の円の面積は' + menseki + '、円周は' + enshu);
*/

/*
【if文１】
str = prompt('値を入力してください','');

if (str == 'abc') {
  console.log(str);
}

【if文２】
str = prompt('年齢を入力してください','');
if (str >= 20) {
  console.log('お酒が飲めます、免許が取れます');
} else if (str >= 18) {
  console.log('免許が取れます');
} else {
  console.log('未成年です');
}

【if文３】
str = prompt('大人なら１を、子供なら２を入力してください','');
num = parseInt(str)

if (num == 2) {
  console.log('200円です');
} else if (num == 1) {
  str2 = prompt('お酒なら１を、ソフトドリンクなら２を入力してください','');
  num2 = parseInt(str2)
  if (num2 == 1) {
    console.log('500円です');
    } else if (num2 == 2) {
      console.log('200円です');
      } 
  }
*/

/*【for文】
sum = 0;
for( i=1; i<=30; i=i+2 ) {
    sum = sum + i;
}
console.log(sum);
*/

const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文の場合
// for (１.カウンタ変数; ２.条件式; ３.カウンタ変数の増減値)｛
//      カウンタ変数が条件式によって決まった値まで繰り返す処理
//      ｝
// イメージ：カウンタ変数でスタート⇒
// 　　　　　条件式に当てはまらないので処理⇒
//          カウンタ変数の増減⇒
//          条件式に当てはまらないので処理⇒
//          カウンタ変数の増減⇒
//          条件式に当てはまったので処理を終了・・・
// 以上のように、２と３を、条件式に当てはまるまで繰り返す。

for ( let i=0; i < holidays.length; i++ ) {
  console.log(holidays[i]);
}

// while文の場合
// while(条件式)｛
//       条件を満たしている間行われる処理
//       }
//イメージ：let ● = ● などで、変数を設定（宣言する）
//　　　　　条件式を入力
//　　　　　｛｝内の記載内容を、条件に当てはまるまで繰り返す。
// 文章などで決める。
// セーブするまで終わらないなど、終わりがわからないときに使う

let i = 0
while ( i < holidays.length) {
  console.log(holidays[i]);
  i++;
}


// foreach文が現場ではよく使う
// const numbers = [10, 20, 30, 40];

// numbers.forEach((num) => {
//   console.log(num);
// });