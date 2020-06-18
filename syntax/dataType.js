/*
    원시 데이터 타입(기본) VS 객체 데이터 타입(참조)
    여러개의 데이터 타입이 존재하는데, 이를 분류하여 공통점과 차이점을 보자
*/

var str = 'coding';
// str = new String('coding);
console.log(str.length);    // 6
console.log(str.charAt(0));     // "C"

/*
    '.'은 영어로는 Object Access Operator이다. 
    string은 원시데이터로서 객체가 아닌데 위의 코드를 보면 객체의 property와 method를 쓰는 방식이다. 이는 객체지행 프로그래밍의 어느정도 일관성을 유지하기 위한 문법적 통일성이다. str.length는 어떻게 실행되냐면 순간적으로 str = new String('coding')이라는 생성자 함수가 암묵적으로 실행된다. 

    이렇게 해서 사용이 끝난 객체는 원래의 원시데이터로 돌려준다. 
*/

var str = 'coding';
str.porp = 'everybody';     // 문자열을 객체처럼 사용하려고 하면 자바스크립트가 그것을 내부적으로 객체화 시킨다. 프로퍼티를 마치 저장할 수 있는 것처럼 에러가 발생하지 않는다.
console.log(str.prop);      // 하지만 결국 undefined이다. 즉, 객체 내부에 프로퍼티를 저장할 수 없다.

/*
    원시 데이터 타입을 객체처럼 사용하려고 할 때 자바스크립트 내부적으로 자동으로 만들어 지는 객체를 wrapper object라고 한다. 자바스크립트는 이 과정을 자동으로 처리해주기 때문에 개발자가 명시적으로 wrapper객체를 지정할 필요가 없다. 

    primitive type이외는 모두 객체 데이터 타입
    숫자 -> Number
    문자열 -> String
    불리언(true/false) -> Boolean
    null -> X
    undefined -> X

    null.porp = 'dave'는 type error가 발생한다. wrapper 객체가 없기 때문
*/
