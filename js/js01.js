'use strict';

// primitive type
const num = 123;
const bnt = 123n;
const str = 'abc';
const sbl = Symbol('abc');
const boo = true;
const nll = null;
// const und;

// object type
const arr = ['X', 'Y', 'Z'];
const obj = {
    first: 'A',
    second: 'B',
    third: 'C',
};

const introduceTypes = () => {
    // This is test function
    console.log(`num is ${typeof num}`);
    console.log(`bnt is ${typeof bnt}`);
    console.log(` * BigInt's max value is ${Number.MAX_SAFE_INTEGER}`);
    console.log(`str is ${typeof str}`);
    console.log(`sbl is ${typeof sbl}`);
    console.log(`boo is ${typeof boo}`);
    console.log(`arr is ${typeof arr}`);
    console.log(`og is ${typeof obj}`);
    console.log(`nll is ${typeof null}`);
    console.log(`und is ${typeof undefined}`);
    console.log(`This is ${typeof a}`);
};

const outputObjects = () => {
    // console.log(`obj.first = ${obj.first}`);
    // console.log(`obj.second = ${obj.second}`);
    // console.log(`obj.third = ${obj.third}`);
    for (const key in obj) {
        console.log(`obj: key is ${key}, value is ${obj[key]}`);
    }
    for (const index in arr) {
        console.log(`arr: i is ${index}, value is ${arr[index]}`);
    }
};

const testRegex = () => {};

const introduceWrapperObject = () => {
    const wstr = new String('Wrapper');
    console.log(`wstr is ${typeof wstr}. length = ${wstr.length}`);
    console.log(`str  is ${typeof str}. length = ${str.length}`);
    // しかし明示的にラッパーオブジェクトを使うべき理由はないらしい。
    // プリミティブ型のデータのプロパティにアクセスする際、
    // 対応するラッパーオブジェクトへ暗黙的に変換してからアクセスするため。
    // なので、書き方が冗長じゃない、プリミティブ型の使用を推奨。
};

const introduceOperator = () => {
    const str = 'this is a pen';
    console.log(`str.indexOf('a'): ${str.indexOf('a')}`);
    if (str.indexOf('a')) {
        console.log("I found 'a'");
    }
    console.log(`str.indexOf('x'): ${str.indexOf('x')}`);
    if (~str.indexOf('x')) {
        console.log("I found 'x'");
    }
    // ~ は否定演算子。数値の補数を返す。
    // ~(-1) = 0
    // ~0 = -1
};
