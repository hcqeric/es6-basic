function test(){
  // 使用let注意的两个点：
  //  1.let的作用域为块级作用域
  //  2.es6默认使用严格模式（use strict）
  // for (let i = 0; i < 3; i++){
  //   console.log(i);
  // }
  // console.log(i); //Uncaught ReferenceError: i is not defined

  let b = 1;
  // let b = 2;

  const PI = 3.1415926;
  // const PI;
  // PI = 3;

  const k = {
    a:1
  }
  k.b = 3;
  console.log(k);
}
test();
