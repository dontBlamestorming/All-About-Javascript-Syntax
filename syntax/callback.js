function a() {}

var a = {
    a : function() {},
    b : "value"

}

/*
    자바스크립트에서 함수는 일종의 값이기 때문에 '값'이 갖는 특징을 갖고 있다. 예를들면 객체에 넣을 수 있다. 이 때, 하나의 키값에 대응되는 함수는 메소드(Method)라고 명명한다.
    이 메소드에 대응되는 키값은 속성(Property)라고 명명한다. 또한 함수는 값으로서 다른 함수의 인자(Argument)로 활용되기도 한다.
*/

function cal(func, num){
    return func(num)
    // var func = increase(num) {
    //     return num+1
    // }
}
function increase(num){
    return num+1
}
function decrease(num){
    return num-1
}
alert(cal(increase, 1));
alert(cal(decrease, 1));

function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];     // 함수의 리턴값으로 함수를 사용할 수도 있다. 
}
alert(cal('plus')(2,1));
alert(cal('minus')(2,1));   


function sortNumber(a,b){
    return b-a;
}
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
alert(numbers.sort(sortNumber)); // result : array, [20,10,9,8,7,6,5,4,3,2,1]
/*
    sort 메소드의 공식문서를 보면 매개변수로 정렬의 기준을 정하는 함수가 오기로 약속되어 있다. 부가적인 지식이고 중요한 것은 인자의 값으로도 함수를 활용할 수 있다는 것이다.
    이때 호출되는 함수를 Callback 함수라고 한다. 
*/