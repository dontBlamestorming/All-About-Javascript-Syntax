/*
    prototype VS __proto__

    먼저, 함수란 무엇인가?
    function Person(){} 와 var Person = new Function();는 같다. 함수는 자바스크립트에서는 객체이다. 따라서 prop을 가질 수 있다. 
*/

function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}
/*
    위의 함수는 Person이라는 객체이다. 이 객체는 prototype이라는 prop을 갖고 있다. 이 prototype은 굳이 이름을 붙이자면 Person's prototype이라는 객체를 가리키고 있다. Person's prototype은 Person의 소속임을 표시하기 위해서 construtor라는 prop을 만들고 이것은 Person(함수=객체)를 가리키고 있다. 즉, 서로 상호참조를 하고있다. 
*/
Person.prototype.sum = function() {};

var kim = new Person("kim", 10, 20);

/*
    생성자 함수를 통해서 객체를 만들면 kim이라는 객체의 property는 name, first, second, 그리고 __proto__가 있을 것이다. 이 __proto__는 'new Person'이라는 생성자 함수를 통해서 만들어졌기 때문에 Person함수의 prototype인 Person's prototype을 가리키고 있다. 
*/

var lee = new Person("lee", 20, 20);
// 이 또한 Person's prototype을 가리키고 있다.

console.log(kim.name);
console.log(kim.sum());
/*
    자바스크립트는 kim객체의 name property를 찾아간다. 만약 이 값이 없다면? __proto__에 들어가서 name 값을 찾기 시작한다. sum() 또한 일단 kim 객체에 해당 메서드가 있는지 찾고 없으면 __proto__를 찾는데 이건 Person's property를 가리키고 있다. 이 객체에 sum을 찾아 들어간다. 만약 이 객체에도 해당 메서드가 없다면? 위에서 언급은 안했지만 Person's property도 객체기 때문에 __proto__가 있다. 여기에 해당 메서드를 찾아 들어갈 것이다. 
*/
