/*
    Object of Object
    기존의 예제에서 Sub()는 Super()를 상속받고 이것은 Ultra()를 상속받은 것인데 Ultra()는 사실 Object()라는 객체를 상속받은 것이다. 즉, 아무것도 상속받지 않는 순수한 객체이다.

    바꾸어 말하면 자바스크립트에서의 모든 객체는 Object()라는 객체의 prototype을 갖고 있다는 것이다.
    
    Object API의 사용법
    공식 문서를 보면 Object.method가 있고 Object.prototype.method가 있다. 이 두개의 차이점은 무엇일까? 
*/

// Object.key() - 객체의 key값만을 배열로 만들어서 reaturn한다.(배열또한 객체이기 때문에 index가 key값이 되것지?)
var arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // Object.key(arr) ["0", "1", "2"]

var o = {
    name : "dave",
    age : 20,
    city : "seoul"
}
console.log('Object.key(o)', Object.keys(o)); // Object.key(o) ["name", "age", "city"]

/*
    Object.prototype.toString() - method만 설명하자면 배열이나 객체의 상태 등을 사람이 읽기 좋게 string으로 바꿔주는 method이다. 하지만 지금 시점에서 method의 기능보다는 prototype의 method라는 점에 집중해보자. 
*/

var arr = ["a", "b", "c"];
var o = new Object();

console.log(o.toSring());   // [object Object]
console.log(arr.toString()); // "a, b, c" 

/*
    keys() - Object.keys()
    toSring() - Object.prototype.toString()
    keys()의 경우 Object라는 객체에서 바로 메소드를 사용하지만, toString()의 경우 생성자 함수로서 prototype을 복제하여 식별자 o에 대입하고 사용한다. 

    즉, keys()는 Object라는 생성자 안에 이렇게 정의 되어 있을 것이다.
    Object.keys = function () {statement}
    하지만 toString은 Object.prototype.toString = function() {statement} 이렇게 정의되어 있을 것이다.

    그러니까 객체의 일반 메소드와 prototype이라는 property안에 들어있는 메소드와 구분해라 이말이다.
    Object라는 객체는 모든 객체의 부모이지만 어쨌든 객체이다. 객체는 property와 method를 가진다는 것을 생각하고 구분하면 된다. 또한 존재하는 모든 객체에 사용자 정의 메소드를 정의하는 것은 Object의 일반 메소드에서는 native code를 까야한다. 즉 Object라는 생성자 함수 내에 접근해야 한다는 것이다. 하지만 prototype은 일반 코드 내에서도 접근이 가능한 것 같다. 

    Object : 모든 객체가 상속하는 조상 객체.
    - object가 가진 메소드는 두가지 형태가 있다. Object.메소드이름()과 Object.prototype.메소드이름()인데 첫 번째
    형태는 Object 자신만 쓸 수 있고 두 번째 형태는 모든 객체가 쓸 수 있는데 그 이유는 모든 객체가 Object를
    상속하기 때문이다.
    - 역으로 Object의 prototype을 이용해서 메소드를 만들면 모든 객체가 쓸 수 있는 강력한 메소드를 만들 수
    있지만 그만큼 위험해서 의도하지 않은 결과를 초래할 수 있기 때문에 되도록 권장하진 않는다. /
*/

/*
    Object의 확장 - 어느 객체에서나 사용할 수 있는 메소드를 만드는 방법
    기능 - 어떤 배열이나 객체에 특정한 값이 있는지 없는지를 검사하는 메소드
        Tip : 어떤 사용자정의의 메소드를 만들 때 그 기능에만 집중하지말고 어떻게 사용될 것인지에 대한 설계를 하는 것이 좋다. 공부를 할 때에도 대상의 기능에만 집중하지 말고 그 기능의 취지 또는 사용되는 맥락을 이해하는 것이 좋다.
    
*/

Object.prototype.contain = function(needle) {
    for(var name in this) {
        if(this[name] === needle) {
            return true;
        }
    }
    return false;
}

var o = {
    name : 'egoing',
    city : 'seoul'
}
console.log(o.contain('egoing')); // true

var a = ['egoing', 'leezche', 'graphittie'];
console.log(a.contain('egoing')); // true

/*
    객체 Object는 모든 객체의 부모이기 때문에 어떠한 형태의 객체든(배열, 객체) 객체 Object의 prototype을 갖고 있기 때문에 메소드를 들면 공유하고 있다. 하지만 이렇게 하면 위험할 수 있다.
    
    왜냐하면 모든 property와 method를 공유하고 있기 때문에 의도치 않은 결과가 나올 수 있다.
*/

var a = ["a", "b", "c"];
var o = {
    name : "dave",
    age : 20,
    city : "seoul"
}

for(var name in a){
    // a의 property를 다 출력
    console.log(name);  // a,b,c,contain 
}

/*
    이는 어떤 객체가 기본적으로 갖고 있을 것으로 예상하고 있는 객체 외에 다른 객체를 갖고 있게 되는 것이기 때문에 다른 개발자들에게 혼란을 준다. 따라서 어떤 기능을 만들어 사용하고 싶다면, 그 기능의 최소단위에서 구현하는 것이 바람직하고 만약 어떤 객체의 프로퍼티가 그 객체의 직접적인 소유인 것인지, 상속받은 것인지 확인하기 위해서는 hasOwnProperty라는 Object객체의 메소드를 살펴보면 된다. 
*/

for(var name in a) {
    if(a.hasOwnProperty(name)) {    // 만약 false라면 그 property는 prototype으로부터 상속받은 것이다. 
        console.log(name); // a,b,c
    }
}

//  hasOwnProperty는 인자로 전달된 속성의 이름이 해당 객체의 속성인지의 여부를 판단한다. 