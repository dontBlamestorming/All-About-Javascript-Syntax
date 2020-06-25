function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function() {
  return "prototype : " + (this.first + this.second);
};

var kim = new Person("kim", 10, 20);
kim.sum = function() {
  return "this : " + (this.first + this.second);
};

var lee = new Person("lee", 10, 10);

console.log("kim.sum()", kin.sum());
console.log("lee.sum()", lee.sum());

/*
    Review
    1. 함수 앞에 new를 붙이면 생성자 함수이고 이것은 객체를 return한다. 즉, 객체를 만들고 그것의 초기화를 담당하는 것이다. 이 초기화는 해당 함수를 읽으면서 할당한다.
    2. 
    3. 
*/

/*
    apply review 
    1. 객체를 만드는 기능 -> class {}, 그럼 초기화는 ?
    2. 객체가 생성될 때 초기화를 담당하는, 객체가 만들어지기 직전에 실행되도록 약속된 메서드가 constructor이다. 이것을 정의하면 초기화가 된다. 
    3. 즉 기존에는 생성자 함수를 통해 객체생성과 초기화를 동시에 해줬다면 class에서는 구분한다. 
    4. 클래스를 통해 사용자정의 메서드를 만드는 것은 전통적인 방법의 prototype을 그대로 써도 된다(class 밖에서). 
    5. 메서드(함수)가 호출될 때 JS가 찾아가는 우선순위(해당 함수 상위 객체 -> prototype) 또한 동일하다. 즉, class에서 아래 예제의 sum()이 prototype에 소솓된 메서드이다. 
*/

class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum() {
    return "prototype : " + (this.first + this.second);
  }
}

// Person.prototype.sum() = function() {
//     return 'prototype :' + this.first + this.second;
// }

var kim = new Person("kim", 10, 20);
console.log(kim); // { name : kim, first : 10, second : 20 }

var lee = new Person("lee", 20, 20);
lee.sum = function() {
  return "this : " + this.first + this.second;
};
