'use strict';
const memo = new Map();//memoという変数のマップ
memo.set(0, 0);//0は0
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) {//has持ってるかどうか。知ってるならそれを返して終わり。ないなら計算が必要。
        return memo.get(n);//もしｎが０，１なら知ってるので終わり
    }
    const value = fib(n - 1) + fib(n - 2);//n知らなければ計算する
    memo.set(n, value);//(n,一行上で出た値)をmemoに追加していく
    return value;//計算結果を返す。
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}