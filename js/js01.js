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

const introduceFinds = () => {
  const obj = { key: 'value' };
  const arr = ['a', 'b', obj];
  const conditionfunc = v => {
    return v.key === 'value';
  };
  console.log('findIndex: ', arr.findIndex(conditionfunc));
  console.log('find     : ', arr.find(conditionfunc));
};

const introduceArraysEtc = () => {
  const arr = [[[['A'], 'B'], 'C'], 'D', 'E'];
  const colors = [{ color: 'red' }, { color: 'blue' }, { color: 'green' }];
  const conditionfunc = v => {
    return v.color === 'blue';
  };
  const arr2 = ['A', 'B', 'C'];
  const arr3 = [1, 2, 3];

  console.log('arr.flat():         ', arr.flat());
  console.log('arr.flat(1):        ', arr.flat(1));
  console.log('arr.flat(2):        ', arr.flat(2));
  console.log('arr.flat(Infinity): ', arr.flat(Infinity));

  console.log('arr.indexOf("D"):   ', arr.indexOf('D'));
  console.log('arr.indexOf("A"):   ', arr.indexOf('A'));

  console.log('arr.slice(0,2):     ', arr.slice(0, 2));
  console.log('arr.slice(-2,-1):   ', arr.slice(-2, -1));
  console.log('arr.slice(-2):      ', arr.slice(-2));

  console.log('arr.includes("D"):  ', arr.includes('D'));
  console.log('colors.some({color:"blue"}): ', colors.some(conditionfunc));

  console.log('arr2:              ', arr2);
  arr2.push('D');
  console.log('arr2.push("D"):    ', arr2);
  arr2.pop();
  console.log('arr2.pop():        ', arr2);
  arr2.unshift('S');
  console.log('arr2.unshift("S"): ', arr2);
  arr2.shift();
  console.log('arr2.shift():      ', arr2);

  const newArr2 = arr2.concat(['D', 'E']);
  console.log('newArr2 = arr2.concat(["D","E"]): ', newArr2);

  const deleted = newArr2.splice(1, 3, 'X', 'Y');
  console.log('deleted = newArr2.splice(1,3,"X","Y") => ');
  console.log(' newArr2: ', newArr2);
  console.log(' deleted: ', deleted);

  // 反復処理
  // forEach
  arr2.forEach((v, i, arr) => {
    console.log(v, i, arr);
  });

  // map
  const newArr2_2 = arr2.map((v, i, arr) => {
    return v + String(i);
  });
  console.log(newArr2_2);

  // filter
  const filteredArr3 = arr3.filter((v, i, arr) => {
    return v % 2 === 1;
  });
  console.log(filteredArr3);

  //reduce
  const total = arr3.reduce((accumulator, v, i, arr) => {
    return accumulator + v;
  }, 0); // 初期値 0
  console.log(total);
};

const introduceArrayLikeObject = () => {
  const print = v => {
    console.log(v);
  };
  // arrow関数にするとarguments は使えない様子。
  function func() {
    // arguments は array-like であって array ではない
    console.log('arguments is Array:      ', Array.isArray(arguments));
    // arguments.forEach(print); // TypeError: arguments.forEach is not a function
    const argumentsArray = Array.from(arguments);
    console.log('argumentsArray is Array: ', Array.isArray(argumentsArray));
    argumentsArray.forEach(print);
  }
  func('A', 'B', 'C');
};

const introduceStringEtc = () => {
  // ()で囲まれた部分はキャプチャしたい部分
  // キャプチャの例は後述の capture1, capture2 参照
  const regex = /([a-zA-Z]+)\s(\d+)/;
  const regexg = /([a-zA-Z]+)\s(\d+)/g;
  const str = 'This is 999 ECMAScript 5';
  const matchresult = str.match(regex);
  const matchresultg = str.match(regexg);
  const matchallresultg = str.matchAll(regexg);
  console.log(
    // result には index と input を持つ配列が入る（=> length = 2 となる)
    `match /[a-zA-Z]+(\s)(\d+)/: 
  result:  ${matchresult[0]} 
    .index: ${matchresult.index}
    .input: ${matchresult.input}
  capture1: ${matchresult[1]}
  capture2: ${matchresult[2]}`,
  );
  console.log(
    // gオプションがあるため match 結果は複数となる（=> index = undefined, input = undefined となる）
    `match /[a-zA-Z]+(\s)(\d+)/g: 
  result:  ${matchresultg[0]} 
    .index: ${matchresultg.index}
    .input: ${matchresultg.input}
  capture1: ${matchresultg[1]}
  capture2: ${matchresultg[2]}`,
  );
  // match の挙動をまとめると...
  // マッチしない場合は、null を返す
  // マッチした場合は、マッチした文字列を含んだ特殊な配列を返す
  // 正規表現にgフラグがある場合は、マッチしたすべての結果を含んだただの配列を返す
  console.log(`matchAll /[a-zA-Z]+(\s)(\d+)/g: `);
  for (const m of matchallresultg) {
    console.log(
      `  result:  ${m[0]} 
    .index: ${m.index}
    .input: ${m.input}
  capture1: ${m[1]}
  capture2: ${m[2]}`,
    );
  }
  // 結論：
  // 正規表現でgフラグを使うときは matchAll を使う
  // 正規表現でgフラグを使わないときは match を使う
};

const introduceRegExpEtc = () => {
  const regex = /([a-zA-Z]+)\s(\d+)/g;
  const str = 'This is 999 ECMAScript 5!';
  console.log(regex.test(str));

  const newStr1 = str.replace(regex, '');
  console.log(newStr1);

  const newStr2 = str.replace(regex, (all, cap1, cap2) => {
    return cap2 + ' ' + cap1 + '(<- ' + all + ')';
  });
  console.log(newStr2);
};

const introduceTemplateWithTagFunction = () => {
  const a = 'AAA';
  const b = 'BBB';

  const fn1 = str => {
    console.log(str);
  };
  console.log('fn1:');
  fn1(`template (${a}) literal (${b})!`);

  const fn2 = (strings, ...values) => {
    console.log(strings);
    console.log(values);
  };
  console.log('fn2:');
  fn2`template (${a}) literal (${b})!`;

  const fn3 = (strings, ...values) => {
    return strings.reduce((result, str, i) => {
      console.log([result, values[i - 1] ?? '', str]);
      return result + (values[i - 1] ?? '') + str;
    }, '');
  };
  console.log('fn3:');
  console.log(fn3`template (${a}) literal (${b})!`);

  console.log('String.raw:');
  console.log(String.raw`template (${a}) literal (${b})!`);

  const fn4 = (strings, ...values) => {
    return strings.reduce((result, str, i) => {
      return result + encodeURIComponent(values[i - 1] ?? '') + str;
    });
  };
  console.log('fn4:');
  const input = 'テスト';
  const escapedURL = fn4`https://google.com/search?q=${input}&sort=desc`;
  console.log(escapedURL); // => "https://example.com/search?q=A%26B&sort=desc"
};

const introduceCodePoint = () => {
  // code point: 文字のID。桁数に限りはない。
  // code unit:  utf-16 は code point を16bitのcode unitで表現するもの。
  //             16bit で表現できる範囲は 65,536種類しかなくて、unicodeに登録されているcode point の100,000種類に及ばない。
  //             そのため、一部のcode pointは2つのcode unitで表現する。
  const apple = '🍎';
  const codePointOfApple = apple.codePointAt(0);

  function convertCodeUnits(str) {
    const codeUnits = [];
    for (let i = 0; i < str.length; i++) {
      codeUnits.push(str.charCodeAt(i).toString(16));
    }
    return codeUnits;
  }

  console.log(apple, ' code point: ', codePointOfApple.toString(16));
  console.log('\u{1f34e}');
  const codeUnits = convertCodeUnits(apple);
  console.log(apple, ' code units: ', ...codeUnits);
  console.log('\ud83c\udf4e');
  console.log(apple, ' length: ', apple.length);

  const sentence = apple + 'パイ';
  // code unit 単位で調べる
  const regex = /(.)パイ/;
  // code point 単位で調べる(こっちにしておけば間違いない)
  const regexu = /(.)パイ/u;
  const [result, capture] = sentence.match(regex);
  const [resultu, captureu] = sentence.match(regexu);
  console.log(result, capture);
  console.log(resultu, captureu);

  console.log('code unit count:  ', sentence.length);
  // Array.from() や for...of はcode point ごとに処理をする。
  console.log('code point count: ', Array.from(sentence).length);
  for (const s of sentence) {
    console.log(s);
  }
  // でもfor...in はコードユニットごとに処理をする
  for (const index in sentence) {
    console.log(sentence[index]);
  }
};

const introduceScopeChain = () => {
  {
    let x = 1;
    const y = 2;
    {
      let x = 10;
      const y = 20;
      console.log(x);
      console.log(y);
    }
  }
};

const introduceClass1 = () => {
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

const introduceClass2 = () => {
  class SomeClass {
    constructor() {
      // instance method
      this.method1 = () => {
        return this;
      };
    }

    // prototype method (arrow function)
    method2 = () => {
      return this;
    };

    // prototype method (method)
    method3() {
      return this;
    }
  }
  const instance1 = new SomeClass();
  const instance2 = new SomeClass();
  console.log(instance1.method1 === instance2.method1);
  console.log(instance1.method2 === instance2.method2);
  console.log(instance1.method3 === instance2.method3);
  let some = instance1.method1;
  console.log('this of instance method in constructor:     ', some());
  some = instance1.method2;
  console.log('this of instance method out of constructor: ', some());
  some = instance1.method3;
  console.log('this of prototype method:                   ', some());
};

const introduceAccessor = () => {
  class SomeClass {
    constructor(x, y) {
      // プライベートプロパティに _ をつけるのはただの慣習。
      // 外部からのアクセスは普通にできる。
      this._x = x;
      this._y = y;
      this._i = 0;
    }
    // 変数名とアクセサ名は合わせる必要はないし、getterとsetterも合わせる必要はない。
    // でも普通は合わせる。
    // getter
    get g() {
      return this._x + this._i++;
    }
    // setter
    set s(value) {
      this._x = value[0];
    }

    test() {
      // getter を使うこともできる。
      return this.g;
    }
    static make(x, y) {
      return new this(x, y);
    }
  }
  // new の代わりに作ったstatick method
  const instance = SomeClass.make('X', 'Y');
  // get
  console.log(instance.g);
  // get, set
  instance.s = instance.g.toLowerCase();
  // get
  console.log(instance.g);
  console.log(instance._i);
  console.log(instance.test());
  // test()でgetter を使っているからさらにincrement されている
  console.log(instance._i);
};

const introduceExtends = () => {
  class Parent {
    constructor(...args) {
      console.log('Parent: ', args.join(', '));
      this._x = args[0];
      this._y = args[1];
    }

    test = () => {
      console.log('Parent().test was called.');
    };
  }

  class Child extends Parent {
    constructor(...args) {
      super(...args);
      console.log('Child:  ', args.join(', '));
    }
  }

  const instance = new Child(1, 2, 3, 4, 5);
  instance.test();
  console.log(instance._x);
  console.log(instance._y);
};

// ---------------------------------------------------
const main = () => {
  introduceExtends();
};
main();
