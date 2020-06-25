class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}

class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second); // 부모클래스의 constructor
    this.third = third; // 자식클래스에서만 사용하는 property 추가
    // this.name = name;
    // this.first = first;
    // this.second = second;
  }
  _sum() {
    return super.sum() + this.third;
  }

  avg() {
    return (this.first + this.second) / 2;
  }
}

var kim = new PersonPlus("kim", 10, 20, 30);
console.log(kim._sum()); // 60
console.log(kim.avg()); // 15

/*
    여러가지 기능을 도입하면서 우리는 보이지 않는 지출을 하게 된다. 그것은 바로 '복잡성'이다. 상속이라는 것을 도입했을 때 겪게되는 자잘한 문제, 예를들면자식클래스와 부모클래스 관계, 그리고 super라는 키워드를 보자.

    var ex = new PersonPlus('kim', 10, 20, 30)과 같이 객체를 생성할 때 인자를 하나 더 넣고싶다고 하자. 이럴 때는 어떻게 할 것인가? super를 이용하면 부모클래스를 불러서 일을 시키고, 부모가 하지 못하는 것을 자식에게 넘기는 기능을 할 수 있다. 

    

*/
