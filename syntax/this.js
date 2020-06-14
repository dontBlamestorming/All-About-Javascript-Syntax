/*
    this는 함수 내에서 함수 호출 맥락(context)을 의미한다. 함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라진다는 뜻이다. 함수와 객체의 관계가 느슨한 자바스크립트에서 this는 
    이 둘을 연결시켜주는 실질적인 연결점의 역할을 한다. 함수 '안'에서 사용되는 키워드이다. 
    this는 함수 안에서 그 함수가 소속되어 있는 객체를 가리킨다가 본질이다. 
*/


//  함수 호출
function func() {
    if(window === this) {
        document.write("window === this"); // window === this
    }
};


//  메소드 호출
var o = {
    func : function() {
        if(o === this) {
            document.write("o === this");
        }
    }
}
o.func(); // o === this

/*
    일반 함수를 호출하는 것과 메소드를 호출하는 것이 다르게 느껴질 수 있지만 사실은 같은 작동원리를 갖고 있다. 첫번 째 예제에서 func()의 this는 window이다. 두번째 예제에서는 o라는 객체 안에서의 메소드로서 function의 this를 호출하는 것이기 때문에 객체 o가 호출 되는 것은 결국 같은 결과인 것이다. 
*/

// 생성자의 호출 

var funcThis = null;

function Func() { // 생성자 함수 선언
    funcThis = this; // var이 앞에 없기 때문에 전역변수 funcThis를 가리킴
}

var o1 = Func(); // 생성자 없이 함수 호출
if(funcThis === window) {
    document.write('window </br>'); 
}
// this는 windw 

var o2 = new Func(); // 생성자로 호출
if(funcThis === o2) {
    document.write('o2 </br>')
}
// this는 o2

var funcThis = null;

function Func() {
    if(o2 === this) {   // 이 시점에서 o2는 객체로서 존재하지 않는다. o2는 undefinded이 될 것이고 조건문 내의 코드는 절대로 실행되지 않는다. 
        funcThis = this;
    }
}

var o2 = new Func();    // 생성자는 생성자 함수를 모두 실행시킨 후(초기화) 객체를 생성하기 때문에 이 이후로부터 o2는 어떤 함수의 this가 될 수 있다. 
if(funcThis === o2) {
    document.write('o2 </br>');
}

/*
    함수는 객체이다. 어떠한 문법적인 체계는 리터럴(Literal)이라고 부른다. 흔히 사용하는 function() {} 또한 함수를 보기좋게, 쉽게 사용하기 위해 고안된 리터럴이다. 함수는 객체라는 말이 이해가 어려운 이유는 함수리터럴과 객체를 구분해서 이해하고 있기 때문이다. 예제를 보자.
*/

function sum(x,y) {
    return x+y;
} 
sum(1,2) // 3 

var sum2 = new Function('x', 'y', 'return x+y;')
sum2(1,2) // 3

/*
    생성자를 이용하여 인자로서 매개변수를 사용하고 본문을 뒤에 입력하여도 자바스크립트는 연산을 한다. 즉 함수리터럴이 함수자체를 일컫는 것은 아닌 것이다. 함수를 쉽게 작성하기 위해서 함수리터럴로 코딩을 한 후 자바스크립트 해석기에 제출하면 자바스크립트는 객체를 리턴한다. 이것은 배열과 객체를 선언할 때에도 같다.
*/
var o = {};
var o = new Object(); // 객체 리터럴

var a = [val1, val2, val3];
var a = new Array[val1, val2, val3]; // 배열 리터럴

// apply, vall
var o = {};
var p = {};

function func() {
    switch(this) {
        case o:
            console.log('현재 this는 객체 o야');
            break;
        case p:
            console.log('현재 this는 객체 p야');
            break;
        case window:
            console.log('현재 this는 전역객체 window야');
            break;
    }
}

func(); //  현재 this는 전역객체 window야
func.apply(o);  // 현재 this는 객체 o야
func.apply(p);  //현재 this는 객체 p야

/*
    전통적인 객체지향에서 메소드라고 하는 것은 어떠한 객체에 강하게 소속되어 있다. 그래서 이 메소드는 다른곳에 가지 못한다. 마치 객체가 주인(Master)이고 메소드는 노예(Slave)와 같다. 실제로 사용하는 비유이다. 그리고 이것은 일반적인 형태의 객체지향이다. 
    
    하지만 자바스크립트는 전통적인 객체지향에서 유연함을 추구하고 있다. 왜냐하면 함수 또한 객체이기 때문이다. 함수와 객체는 대등하며 함수를 어떻게 호출하느냐에 따라 주인과 노예의 관계가 빈번히 바뀔 수 있다는 것이다. 즉 주인과 노예가 아니라 '개인'이 된 것이다. 
*/


















