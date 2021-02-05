// strict mode
'use strict';

// primitive type
const num = 123;
const bnt = 123n;
const str = 'abc';
const sbl = Symbol('abc');
const boo = true;
const nll = null;
const und = undefined;

// object type
const arr = ['X', 'Y', 'Z'];
const obj = { first: 'A', second: 'B', third: 'C' };

// nullish value
const nullish = [null, undefined];
// falsy value
const falsy = [false, undefined, null, 0, 0n, NaN, ''];

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

const splitSubstitution = () => {
  const arr = [1, 2, 3];
  const [a, b, c] = arr;
  console.log(a, b, c);

  const obj = {
    key: 'value',
  };
  const { key } = obj;
  console.log(key);
};

const introduceFalsyValues = () => {
  falsy.forEach(v => {
    if (!v) {
      console.log(`${v} is falsy.`);
    }
  });
};

const introduceNullishCoalescing = () => {
  falsy.forEach(v => {
    // if v is nullish, then sample get 'nullish', otherwise v.
    const sample = v ?? 'nullish';
    console.log(`${v} is ${sample}`);
  });
};

const introduceRestParameter = () => {
  const arr = [1, 2, 3];
  const fn1 = (...rest) => {
    rest.forEach(v => {
      console.log(v);
    });
    return;
  };
  fn1(...arr);
};

const introduceArgumentsVariable = () => {
  // arrow関数では使えないし、arguments 変数を使うべき理由はないらしいので忘れよう。
  console.log(arguments[0]);
};

const introduceSpecialSplitSubstitution = () => {
  const user = { id: 'A01' };
  // オブジェクトを引数にとり、その中のid プロパティを変数 id として使用する。
  const fn = ({ id }) => {
    console.log(`id is ${id}`);
  };
  fn(user);

  const arr = [1, 2, 3];
  const fn2 = ([first, second, third]) => {
    console.log(`sum is ${first + second + third}`);
  };
  fn2(arr);
};

const introduceMethod = () => {
  const ob = {
    prop: 123,
    method1: () => {
      return 'this is method1';
    },
    // ↓ syntax sugar
    method2() {
      return 'this is method2';
    },
  };
  console.log(ob.method1());
  console.log(ob.method2());
};

const introduceSome = () => {
  const numbers = [1, 3, 5, 10, 13, 14, 15];
  const isPassed = numbers.some(v => {
    return v % 2 === 0;
  });
  console.log(isPassed);
};

const introduceFilter = () => {
  const array = [1, 2, 3, 4, 5];
  const filtered = array.filter(v => {
    return v % 2 === 0;
  });
  console.log(filtered);
};

const introduceObjectMethods = () => {
  const ob = {
    a: 1,
    b: 2,
    c: 3,
  };
  Object.keys(ob).forEach(key => {
    const value = ob[key];
    console.log(`key:${key}, value:${value}`);
  });
  Object.values(ob).forEach(value => {
    console.log(`value:${value}`);
  });
  Object.entries(ob).forEach(entry => {
    console.log(`entry:${entry}, type:${typeof entry}`);
  });
};

const introduceReduce = () => {
  const sum = numbers => {
    // 変数宣言することなく実装していることに注目。
    // total は前回のリターン結果
    return numbers.reduce((total, num) => {
      return total + num;
    }, 0); // 初期値: 0
  };
  console.log(sum([1, 2, 3, 4, 5]));
};

const natureOfObject = () => {
  const id1 = 'test';
  const obj1 = { [id1]: 'key is "test"', undefined: '???' };
  console.log(obj1[id1]);
  console.log(obj1.undefined);

  const id2 = 'success!';
  const obj2 = {
    id2,
  };
  console.log(obj2[id2] ?? 'failure'); // undefined
  console.log(obj2['id2'] ?? 'failure'); // 'test'
  console.log(obj2.id2 ?? 'failure'); // 'test'

  const obj3 = { a: 1, b: 2, c: 3 };
  delete obj3.b;
  console.log(obj3);
};

const introduceOptionalChaining = () => {
  const ob = {
    a: {
      b: 'value',
    },
  };
  // .?: 左のオペランドが nullish の場合は undefined を返す。
  console.log(ob?.a?.b);
  console.log(ob?.notFound?.notFound);
  console.log(undefined?.notFound?.notFound);
  console.log(null?.notFound?.notFound);

  const printObject = o => {
    // sample の初期値は 'nullish' になる
    const sample = o?.a?.b ?? 'nullish';
    console.log(`o.a.b is ${sample}`);
  };
  printObject(ob);
  printObject({});

  //ブラケット記法とも組み合わせ可能
  console.log(ob?.['a']?.['b']);
  console.log(ob?.['notFound']?.['notFound']);
};

const introduceToStringMethod = () => {
<<<<<<< HEAD
    const obj = {
        key: 'value',
    };
    // object を文字列化すると期待通りにはならない。
    console.log(String(obj));

    const customObject = {
        toString() {
            return 'custom value';
        },
    };
    // 実は String コンストラクタ関数は toString メソッドを呼んでいる。
    console.log(String(customObject));
};

=======
  const obj = {
    key: 'value',
  };
  console.log(String(obj));
  const customObject = {
    toString() {
      return 'custom value';
    },
  };
  // 実は String コンストラクタ関数は toString メソッドを呼んでいる。
  console.log(String(customObject));
};

const introduceMergeAndCopy = () => {
  // assignによるマージの実装
  const ob1 = { a: 'a1', b: 'b1', nest: { level: 2, nest: { level: 3 } } };
  const ob2 = { b: 'b2', c: 'c2' };

  // 直接ob1 にマージするとob1の中身も変わってしまうので、空オブジェクトをtargetにするほうがいい
  // const merged = Object.assign(ob1, ob2);
  const merged = Object.assign({}, ob1, ob2);
  // spread構文によるマージの実装
  console.log('merged: ', merged);
  const merged2 = {
    ...ob1,
    ...ob2,
  };
  console.log('merged2: ', merged2);

  // shallowClone
  const shallowClone = o => {
    return Object.assign({}, o);
  };

  console.log('ob1          : ', ob1);
  const shallowCloned = shallowClone(ob1);
  console.log('shallowCloned: ', shallowCloned);
  console.log(ob1.nest === shallowCloned.nest); // => true: object の比較結果が一致するということは、アドレスが同じということ。
  // アドレス一致の確認
  shallowCloned.nest.level = 99;
  console.log('ob1.nest.level          : ', ob1.nest.level);
  console.log('shallowCloned.nest.level: ', shallowCloned.nest.level);
  ob1.nest.level = 2;

  // deep copy
  const deepClone = obj => {
    const newobj = shallowClone(obj);
    Object.keys(newobj)
      .filter(k => typeof newobj[k] === 'object')
      .forEach(k => (newobj[k] = deepClone(newobj[k])));
    return newobj;
  };
  const deepCloned = deepClone(ob1);
  console.log('ob1        : ', ob1);
  console.log('deepCloned : ', deepCloned);
  console.log(ob1.nest === deepCloned.nest); // => false: object の比較結果が一致しないということは、アドレスが違うということ。
  // アドレス不一致の確認
  deepCloned.nest.nest.level = 99;
  console.log('ob1.nest.nest.level       : ', ob1.nest.nest.level);
  console.log('deepCloned.nest.nest.level: ', deepCloned.nest.nest.level);
};

const differenceBetweenInAndhasOwnProperty = () => {
  const obj = {};
  // in は自身の親までたどるため、Object.prototype の中まで探す
  console.log('in:           ', 'toString' in obj);
  // hasOwnProperty は自身の中しか探さない
  console.log('hasOwnProperty', obj.hasOwnProperty('toString'));

  // ob はObject.prototype を継承する、という宣言方法。
  // const ob = {} と同じ意味
  const ob1 = Object.create(Object.prototype);
  // Object.prototype を継承しないオブジェクトを作ることもできる。
  const ob2 = Object.create(null);
};

const introduceClass = () => {
  const SomeClass = class {
    // 何もしないなら書かなくてもOK
    constructor() {}
  };

  const someClass = new SomeClass();
  console.log('someClass is a instance of SomeClass: ', someClass instanceof SomeClass);

  const Point = class {
    constructor(x, y) {
      // this = インスタンス
      this.x = x;
      this.y = y;
    }
  };

  const point = new Point(3, 4);
  console.log(point.x);
  console.log(point.y);
};

// ---------------------------------------------------
const main = () => {
  introduceClass();
};
main();
