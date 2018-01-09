{
  let a, b, rest;
  [a, b] = [1, 2];
  console.log(a, b);
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, rest);
}
//解构赋值的默认值
{
  let a,b,c;
  [a,b,c=3]=[1,2];
  console.log(a,b,c);
}

{
  function f(){
    return [1,2];
  }
  let a,b;
  [a,b] = f();
  console.log(a,b);
}

{
  function f() {
    return [1, 2, 3, 4,5,6];
  }
  let a,b;
  [a,,,b] = f();
  console.log(a,b);//a=1;b=4;
}

{
  function f(){
    return [1, 2, 3, 4,5,6];
  }
  let a,b;
  [a,...b] = f();
  console.log(a,b);//a=1;b=[2, 3, 4,5,6];
}

{
  function f(){
    return [1, 2, 3, 4,5,6];
  }
  let a,b;
  [a,,...b] = f();
  console.log(a,b);//a=1;b=[3, 4,5,6];
}

{
  let o= {a:5,b:true};
  let {a, b} = o;
  console.log(a, b);
}

{
  let o= {a:5,b:true};
  let {a=10, b, c} = o;
  console.log(a, b,c);//a=5;b=true;c=undefined
}

{
  let metadata={
    title:'sdfasdf',
    test:[
      {
        title:'sdfasdfbbbbbbbbbbbbb',
        desc:'describe'
      }
    ]
  };

  let {title:mTitle,test:[{title:sTitle,desc}]}=metadata;
  console.log(mTitle, sTitle, desc);

}
