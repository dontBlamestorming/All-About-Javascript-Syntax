// inheritance와 prototype

/*
    객체는 소속되어 있는 변수와 메소드를 복사할 수 있다. 상속이란 부모객체의 로직을 그대로 물려받아 자식객체를 복사해 내는 것을 말하는데 자식객체는 자신이 사용될 맥락에 맞게 부모객체의 로직을 변경 또는 수정하여 파생시킬 수 있다. 이는 어떤 로직을 재활용 할 수 있다는 장점이 있다. 변경하지 않은 채 상속을 한다는 것은 의미가 없다. 
*/

function Person(name) {
    this.name = name;
    this.introduce = function() {
        return "My name is " + this.name
    }
}

var p1 = new Person("dave");
document.write(p1.introduce() + "<br />");  // My name is dave

/*
    어떤 객체를 생성할 때 그 객체가 기본적으로 갖고 있어야 할 property를 위에서는 생성자 함수를 통해서 지정했다. 이렇게 property를 지정하는 방법이 다른 것도 있다.
*/

function Person(name) {
    this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
    return "My name is " + this.name;
}

/*
    Person이라는 생성자함수에는 prototype이라고 하는 property가 있는데 그 안에는 어떤 객체가 들어가있다. 그 안에 변수나 함수 등으로 또 다른 property를 줄 수 있다. 위와같은 코드는 일단 상속을 위한 준비가 끝난 것이다.  
*/

function Programmer(name) {
    this.name = name;
}

Programmer.prototype = new Person();
Programmer.prototype.coding = function() {  // 부모 객체에서 복제한 객체에 기능을 추가하는 부분
    return "Hello world!!!";
}

var p1 = new Programmer('dave');
document.write(p1.introduce() + "<br />");
document.write(p1.coding() + "<br />");

/*
    Person이 아닌 Programmer라는 생성자 함수를 정의하고 내부의 prototype이라는 property에 함수를 객체화 시키는 new Person()을 주입한다. 그러면 new Person()은 생성자 함수 Person()의 prototype에 있는 변수와 메소드를 객체화 시켜 Programmer에 복제하는 것이다. 

    상속이 의미를 갖는 것은 부모객체의 로직을 변경하여 복제하는 것이다. 
*/

// prototype - 원형

/*
    자바스크립트의 객체지향에서 핵심을 지탱하고 있다. 
    생성자는 기본적으로 함수이다. 이 함수를 호출할 때에 앞에 new를 붙이게 되면 이 함수는 생성자함수가 되는 것이고(대문자로 시작한다고 생성자 함수가 아니다. 관습일 뿐이다.), 실행하면 새로운 객체를 만들어서 리턴하기 때문에 다른 변수에 넣을 수 있다. 이 때 만들어지는 객체는 prototype이라는 특수한 property가 들어있으며 이 property에 저장된 속성들은 생성자를 통해서 객체가 만들어 질 때 그 객체에 연결된다. 
*/

function Ultra() {
    Ultra.prototype.ultraProp = true;
}

function Super() {
    var t = new Ultra();
    t.ultraProp = 5;    // 5
    Super.prototype = t;    
}

function Sub() {
    Sub.prototype = new Super();
    Sub.prototype.ultraProp = 4; // 4
}

var o = new Sub();
console.log(o.ultraProp); // true
/*
    이러한 것들을 prototype chain이라고 한다. console.log(o.ultraProp)의 값을 찾아보자.
        1. o.prototype.ultraProp
        2. Sub.prototype.ultraProp
        3. Super.prototype.ultraProp
        4. Ultra.prototype.ultraProp
    의 순서대로 값을 찾아 나간다. 

    <주의>
    부모객체의 값을 상속받고 싶다고 '부모.prototype = 자식.prototype'으로 코딩하면 안된다. 상속에 기본은 '복제'이다. 앞의 코드는 복제가 아니라 1:1로 미러링하고 있기 때문에 객체를 상속받은 자식의 로직에서 변경이 일어날 시 부모 또한 그 영향을 직접적으로 당한다. 생성자를 통해 꼭 복제를 해고 상속을 받아야한다. 
*/