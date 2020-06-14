/*
    - javascript계열의 객체지향은 Prototype-based Programming이라고 한다.
    - 전통적인 함수형 언어의 특성을 그대로 갖고 있는 것이 아닌 객체지향의 문법을 그대로 비슷하게 사용하면서 함수형 언어의 특성을 갖고 있어서 헷갈린다.
    - 연관되어 있는 변수와 메소드를 하나의 객체라는 그릇에 넣는 것. 연관되어 있지 않은 것은 별도의 객체에다가 분리를 시키는 것.
    - 각 객체는 독립적인 성격을 띈다. 그래서 재활용 가능한 부품을 만든다고 생각하면 그렇게 추상적으로 느껴지지 않을 것이다. 
*/

// 객체를 만드는 가장 간단하고 보편적인 방법

var person = {};
person.name = "dave";
person.introduce = function() {
    return "My name is " + this.name;
}
document.write(person.introduce());

// 위와 같은 방법은 객체를 만드는 과정이 분산되어 있다. 응집성이 떨어지기 때문에 중간에 다른 코드가 끼면 헷갈린다.

var person = {
    name : "dave",
    introduce : function() {
        return "My name is " + this.name;
    }
}
document.write(person.introduce());

// 보다 응집력있게 코드를 바꾸었다. 어떤게 좋다라고 할 수는 없지만 코드를 읽는데 있어서 가독성이 높아진 것은 분명하다. 하지만 만약 중복이 발생한다면? 아래를 보자

var person = {
    name : "dave",
    introduce : function() {
        return "My name is " + this.name;
    }
}
document.write(person.introduce());

var person2 = {
    name : "brad",
    introduce : function() {
        return "My name is " + this.name;
    }
}
document.write(person2.introduce());

// name property의 이름값만 제외하면 거의 대부분에서 중복이 발생한다. 이런것을 막기 위한 것이 생성자(constructor) new이다. 생성자란 객체를 만드는 역할을 하는 함수이다. 자바스크립트는 함수형 언어이다. 자바스크립트를 이해하는 가장 큰 축은 객체 이전에 함수이다. 함수에 대한 부분이 흔들리면 객체 또한 흔들린다. 

// 자바스크립트에서 함수는 단순히 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자라고 할 수 있다.

function Person(){}
var p0 = Person();
console.log(p0) // undefined

var p = new Person(); // 함수를 호출할 때에 'new'를 붙이면 객체를 리턴한다. 
/*
    'new Person()'에 해당하는 부분이 생성자이다. 즉, 함수가 객체의 시중을 드는 것이 아닌 객체를 리턴해주고 있다는 것을 알 수 있다. new를 안쓰면 그냥 함수를 호출한 것이고, new를 쓰면 그 함수를 객체의 생성자로서 호출한 것이다. 그 결과 값은 객체가 된다. 이것은 단지 약속일 뿐이다.
*/
console.log(p) // Person {}

// Java는 클래스 내부에 소속된 생성자를 호출하는 것을 통해서 해당 클래스의 인스턴스(객체)를 만들어 낸다. 그러나 Javascript는 생성자가 소속되어 있지 않고 단순히 함수일 뿐이고 class라는 것이 존재하지 않는다. 거기에 new를 호출하면 객체를 만들어내는 것이다. 

function Person() {};

var p1 = new Person();
p1.name = "dave";
p1.introduce = function() {
    return "My name is " + this.name;
}

var p2 = new Person();
p2.name = "brad";
p2.introduce = function() {
    return "My name is " + this.name;
}

document.write(p1.introduce());
document.write(p2.introduce());

// 조금 더 개선시켜 보자. 

function Person(name) { // 생성자 함수(첫 글자는 대문자)
    this.name = name;
    this.introduce = function() {
        return "My name is " + this.name;
    }
}

var p1 = new Person('dave');
var p2 = new Person('brad');

// 생성자는 객체에 대핸 초기화를 한다. 즉, 'new Person'이 만들어 놓은 빈 객체에다가 어떠한 프로퍼티를 가져야 하는지(this.name), 어떠한 메소드를 가져야 하는지(this.introduce) 생성자 함수 내부에 기술하는 것을 통해 그 객체가 할 수 있는 일 등을 지정해줄 수 있는 것이다. 위의 예에서 본다면 변수 p1, p2에 들어간 객체에 대한 초기화를 담당하는 것이라 할 수 있다. 