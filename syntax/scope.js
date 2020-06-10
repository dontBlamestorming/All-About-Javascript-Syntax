var vscope = "global";
function fscope() {
    vscope = "local";
}
fscope();
alert(vscope);  // result : "local" 

/*
    'var'라는 키워드를 붙이지 않으면 위의 코드에서는 fscope함수 안에서 전역변수 vscope의 값을 바꾼 것이다.
    fcope 함수 안에서 'var'키워드를 붙이고 동일한 변수명을 선언하면 그것은 지역변수로서 선언된 것이다.
*/


var vscope = "global";
function fscope() {
    var vscope = "local";
    vscope = "local";
}
fscope();
alert(vscope);  // result : "global"

/*
    함수 내의 vscope는 자신과 가장 가까이에 선언되어 있는 값을 찾는다.
    위의 코드에서는 함수 내에 할당된 vscope의 값을 바꾸는 역할을 한다.
    따라서 전역변수로 지정된 global이 출력된다.
*/

function a() {
    var i = 0;  // 만약 'i = 0;'이라면 무한루프, 왜냐하면 전역변수 i가 0으로 계속 초기화되기 때문이다.
}
for(var i = 0; i < 5; i++) {    //  for문은 함수가 아니다. 내부에 선언된 변수는 전역변수이다.
    a();
    document.write(i);
}   // result = 01234

/*  (혼동주의)
    위의 코드가 무한루프가 될 것이라 생각했지만 '01234'가 출력되었다. 왜냐하면 for문 내부의 i는 전역변수로서, 그리고 함수 내의 i는 지역변수이기 때문이다.
    즉 같은 변수명이라 할지라도 scope가 다르기 때문에 i값이 초기화되지 않고 전역변수의 i가 정상적으로 for문은 돌고 출력한다.
    이것은 함수의 언어인 자바스크립트에서만 제한적으로 적용되는 규칙이다. Java에서는 블록에 대한 유효범위를 제공하기 때문에 {} 내부의 코드가 유효범위의 대상이다.
    즉, 만약 Java라면 for문 바깥에서 i를 호출할 시 에러가 난다.
*/


//  불가피하게 전역변수를 사용해야 할 경우
MYAPP = {}; // 전역변수로 사용할 단일객체를 만든다.
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.rigjt = 20;
function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());

/*  
    단 하나의 전역변수도 허용하기 싫다면 전역변수로서 활용하기 위해 만든 객체를 익명함수로 만들어준다.
    수 많은 라이브러리들의 모듈들이 이런식으로 구동되고 있다. 로직을 모듈화시키는 일반적인 방법이다.
*/
(function () {
    MYAPP = {};
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }

    MYAPP.calculator.left = 10;
    MYAPP.calculator.rigjt = 20;
    function sum() {
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}());

// Static scpoing, Lexical scoping(호이스팅과 관련 있을 듯)
var i = 5;

function a() {
    var i = 10;
    b();
}

function b() {
    document.write(i);  // result : 5
}

a();

/*
    함수 b()가 선언된 시점에서 전역변수 i가 사용된다. 전역 컨텍스트가 먼저 실행이 될 때에 전역변수 'var i = 5;'가 입력이 되어 있다.  
    함수 B()가 호출, 즉 사용되는 시점에서의 i가 호출되는 것이 아니다. 
*/

var name = "zero";
