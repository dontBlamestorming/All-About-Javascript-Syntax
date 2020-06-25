// 객체는 속성을 갖고 있다. 만약 그 속성에 값이 저장되어 있다면 그것은 속성(Property)라고하고, 값이 아닌 함수가 있다면 그것은 메소드(Method)이다.

// 자바스크립트에서 함수는 하나의 객체이다. 객체는 그 객체에 포함된 메소드를 사용할 수 있다.

function func() {}
func();

// 즉 func.call이나 func.apply를 사용할 수 있는 것이다.

function sum(arg1, arg2) {
  return arg1 + arg2;
}

sum(1, 2); // 3
sum.apply(null, [1, 2]); // 3
sum.apply(null, [4, 2]); // 6

// 왜? 이러한 메소드가 있는 것일까?

o1 = {
  val1: 1,
  val2: 2,
  val3: 3
};

o2 = {
  v1: 10,
  v2: 50,
  v3: 100,
  v4: 25
};

function sum() {
  var _sum = 0;
  // var this = o1; 암시적으로 들어간 것이라 볼 수 있다.
  // var this = o2;
  for (name in this) {
    // sum 함수가 선언될 시점(contaxt)에서 이 this는 정해져있지 않다.
    _sum += this[name];
  }
  return _sum;
}

alert(sum.apply(o1)); // 6
alert(sum.apply(o2)); // 185

/*
    sum.apply(함수가 실행될 맥락) 
    sum.apply(o1)은 함수 sum을 객체 o1의 메소드로 만들고 sum을 호출한 후에 sum을 삭제한다.
    즉, apply는 해당 함수가 구동 될 this를 설정해주는 것과 같다.
     
*/

var kim = {
  name: "kim",
  first: 10,
  second: 20
};

var lee = {
  name: "lee",
  first: 10,
  second: 30
};

function sum(prefix) {
  return prefix + (this.first + this.second);
}
var kimSum = sum.bind(kim, "-> ");

console.log(sum.call(kim, "=>"), sum.call(lee, " : ")); // =>30, : 40
console.log(kimSum()); // -> 30
/*
  실행할때마다(컨텍스트가) 바뀌는 this를 주입.
  apply함수와 비슷한 쓰임새가 있지만 prefix라는 것을 넘길 수 있다. 즉 첫번째 인자로는 this로 역할을 해줄 객체, 그리고 prefix이다.

  call과 같이 호출될 때마다 this를 바꿔주는 것이 아닌, 다른 this를 아예 함수에 주입시키는 방법도 있다. 그것은 bind이다. 이 또한 인자로 prefix값을 줄 수 있다.  
  func.bind( instance ) - 매개변수로 객체를 담게되면 this를 해당 객체로 담은 영구적이고 새로운! function이 리턴된다.
  call과 bind는 기존의 객체를 수정하는 것이 아니라 새로운 객체를 리턴한다.
*/
