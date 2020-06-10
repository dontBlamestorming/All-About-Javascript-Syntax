// function a() {
//     console.log('A');
// }

var a = function () {   //익명 함수를 변수에 담았다.
    console.log('A');   //함수는 '값'이다.
}

function slowfucn(callback) {
    callback();
}

slowfucn(a);

//a(); - 변수 a의 ()를 실행해라.

var callback = slowfucn(function() {
    console.log('A');
});