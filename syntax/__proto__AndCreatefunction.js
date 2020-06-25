/*
    주류 객체지향 언어(Java 등)의 상속
    sub class가 super class의 자식이 됨으로써 기능을 불려받는다. 그렇게 만들어진 subclass를 통해 '객체'를 생성한다. 따라서 이 객체가 어떤 기능을 갖게 될 것인지는 class단에서 결정된다. 객체 자체로서 다른 객체의 상속을 받는다는 것은 불가능하다. 

    물론 자바스크립트에서도 class와 extends라는 키워드가 있지만 이름이 같다고해서 주류 객체지향 언어와 내부적으로 동작하는 방법이 같지는 않다. 자바스크립트에서 타 언어를 사용하다 들어오는 사람들을 위해(?) 편하게 사용하라고 마련한 일종의 배려라고 생각하자. 생긴지 얼마 안됬다. 

    자바스크립트의 상속
    주류 객체지향에 비해 매우 자유롭다. 클래스가 아닌 객체가 다른 객체에게 상속을 해줄 수 있으며 이 관계는 필요에따라 바뀐다. 이 때 상속을 하는 객체를 prototype ojbect라고 하며 상속을 받는 객체와 prototype link로 연결되어 있다. 

*/
var superObj = {
  superValue: "super"
};

var subObj = {
  subValue: "sub"
};

subObj.__proto__ = superObj;

console.log(subObj.subValue); //     sub
console.log(subObj.superValue); //   super, subObj에서 superObj의 값을 읽어오는 것을 알 수 있다. superValue의 값을 subObj에서 찾고 없는경우 링크를 타고 올라가서 superObj에서 찾는다. 그렇다면 sub에서 super의 값을 바꿀 수 있을까?

subObj.superValue = "sub"; // 상속받는 객체에서 superValue값 변경
console.log(superObj.superValue); // 그대로 super이다.

/*
    왜냐하면 subObj.superValue = 'sub'는 subObj(상속받는 객체)의 값을 바꾼 것이지 superObj(원형)의 값을 바꾼 것이 아니다.
    자바스크립트에서는 __proto__라는 것을 표준으로 인정하지 않지만 많은 브라우저에서 지원하기 때문에 사실상 표준이다. 하지만 정석은 아니기 때문에 같은 역할을 하는 다른 상속방법을 살펴보자.
*/

var superObj = {
  superValue: "super"
};
/*
var subObj = {
  subValue : 'sub'
}
subObj.__proto__ = superObj;
와 같은 code*/
var subObj = Object.create(superObj);
// debugger;
/*
  이 시점에서 웹브라우저의 inspect를 통해 현재 subObj의 __proto__와 할당된 값을 확인할 수 있다. 적극적으로 활용하자. 
*/

subObj.subValue = "sub";
console.log(subObj.subValue); // sub

/*
  Object.create(부모객체)라는 메서드를 통해 __proto__와 같은 기능을 쓸 수 있다. 이 방법은 공식방법이기 때문에 사용을 권장한다. __proto__의 경우는 복잡도가 매우 올라가서 위험도가 높다. 디버거를 통해 확인하면 위의 메서드가 똑같은 기능을 한다는 것을 알 수 있다. 
  
*/

var kim = {
  name: "dave",
  first: 10,
  second: 20,
  sum: function() {
    return this.first + this.second;
  }
};

// var lee = {
//   name : 'brad',
//   first : 30, second : 30,
//   avg : function() {
//            return (this.first + this.second) / 2
//         }
// }

lee.__proto__ = kim; // kim안의 this는 객체 lee를 가리키게 된다.
console.log(kim.sum()); // 30

var lee = Object.create(kim);
lee.name = "lee";
lee.first = 10;
lee.second = 20;
lee.avg = function() {
  return (this.furst + this.second) / 2;
};
console.log(lee.sum()); // 30
console.log(lee.avg()); // 15
