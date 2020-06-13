function a(arg1) {} // arg1은 매개변수(parameter)
a(1) // 1은 인자

function sum() {
    var _sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        document.write(i+' : '+arguments[i]+'<br />');
        _sum += arguments[i];
    }
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));

/* 
    arguments는 함수안에서 사용할 수 있도록 그 이름이나 특성이 약속되어 있는 일종의 배열
    arguments는 사용자가 전달한 인자가 들어가있다.  
*/

function zero(){
    console.log(
        'zero.length', zero.length, // 0
        'arguments', arguments.length   // 0
    );
}
function one(arg1){
    console.log(
        'one.length', one.length,   // 1
        'arguments', arguments.length   // 2
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,   // 2
        'arguments', arguments.length   // 1
    );
}
zero();
one('val1', 'val2');  
two('val1');

/*
    함수명.length는 해당 함수에서 정의한 매개변수의 개수
    특정 함수 안에서의 arguments.length는 그 함수로 들어가는 인자의 개수
*/