/*
    자바스크립트는 언어 그 자체로 제공하는 표준 내장 객체의 수는 타 언어에 비해 상대적으로 적다. 하지만 자바스크립트 엔진이 돌아가는 호스트 환경에 따라 이 표준 내장 객체는 많아질 수 있다. 빌트인(Built-in)이라고 하는 객체는 언어가 기본적으로 제공하는, 그러니까 미리 만들어진 객체이다. 이와 대비되는 개념에서 사용자 정의 객체가 있다. 기본적으로 제공하지 않는 기능을 구현하기 위해 사용자가 개인적으로 개발하는 것이다. 

    표중 내장 객체의 확장이라 함은, 자바스크립트가 기본적으로 제공하는 객체에 사용자 정의 객체를 가미하는 약간의 하이브리드 방식이다. 이렇게 빌트인 객체에 사용자정의 객체를 가미하는데 있어서 prototype이라는 기술이 중용된다.  
*/

var arr = new Array('초코파이', '웨하스', '허니버터', '새우깡', '썬칩');

function getRandomValueFromArray(arr) {
    var index = Math.floor(arr.length * Math.random());
    return arr[index];
}

console.log(getRandomValueFromArray(arr));

// 조금 더 세련된 방법은 이 함수를 빌트인 되어 있는 배열 객체에 포함시키는 것이다. 그렇게 하면 마치 내장된 메소드인 것처럼 위의 기능을 사용할 수 있다.

Array.prototype.random = function() {
    var index = Math.floor(this.length * Math.random()); 
    return this[index];
}

var arr = new Array('초코파이', '웨하스', '허니버터', '새우깡', '썬칩');
console.log(arr.random());

/*
    위에서는 getRandomValueFromArray에 arr을 인자로 전달했지만 내장객체를 확장하는데 있어서는 this를 사용하는 것에 주목하자. new Array라는 생성자를 통해 어차피 배열객체가 만들어지고 그 메서드 내부에서 this는 배열객체를 가리키고 있다. 따라서 this.length는 생성된 배열객체의 배열의 원소의 길이를 일컫는다.

    위와같이 내장객체에 메서드를 추가하는 방식은 필요할 때마다 그냥 불러내 쓰기만 하면 되고, 인자를 줄 필요가 없기 때문에 읽기도 편하다. 
*/
