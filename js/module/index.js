import func1, { subfunc1, subfunc2 } from './exportDefaultFunction_1.js';
import func2 from './exportDefaultFunction_2.js';
import obj1 from './exportDefaultObject.js';

const main = () => {
  func1();
  subfunc1();
  subfunc2();
  func2();
  console.log(obj1);
};
main();
