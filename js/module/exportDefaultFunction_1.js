const func = () => {
  console.log('default function 1');
};
export default func;

const subfunc1 = () => {
  console.log('sub function 1');
};
const subfunc2 = () => {
  console.log('sub function 2');
};
export { subfunc1, subfunc2 };
