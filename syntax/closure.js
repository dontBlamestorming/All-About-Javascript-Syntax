// 클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다.
// lexical scoping 에 따라 함수는 선언할 때 스코프가 생성

function outter(){      // 외부함수
    var title = 'coding everybody';

    function inner(){       // 내부함수      
        alert(title);
    }
    inner();
}
outter();

/*
    비공개 변수를 가질 수 있는 환경에 있는 함수가 클로져이다.
    비공개 변수는 클로저 함수 내부에 생선한 변수도 아니고 매개변수도 아닌 변수이다.
    클로저를 말할때는 스코프/컨텍스트/비공개 변수와 함수의 관계를 항상 같이 말해줘야 한다.
    내부함수는 외부함수의 지역변수에 접근할 수 있다. 
    외부함수가 더이상 사용되지 않을 때도 내부함수가 외부함수에 접근할 수 있다.
    내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성이 있다.
*/


var makeClosure = function() {
    var name = 'zero';

    return function() { console.log(name); }
};

/*
    "전역 컨텍스트": {
        변수객체: {
        arguments: null,
        variable: [{ makeClosure: Function }, 'closure'],
        },
        scopeChain: ['전역 변수객체'],
        this: window,
    }
    "makeClosure 컨텍스트": {
        변수객체: {
        arguments: null,
        variable: [{ name: 'zero' }],
        },
        scopeChain: ['makeClosure 변수객체', '전역 변수객체'],
        this: window,
    }
*/

var closure = makeClosure(); // function () { console.log(name); }
closure(); // 'zero';

/*
    "closure 컨텍스트":  {
        변수객체: {
        arguments: null,
        variable: null,
        scopeChain: ['closure 변수객체', 'makeClosure 변수객체', '전역 변수객체'],
        this: window,
    }
*/



function factory_movie(title) { // title은 매개변수로서 함수 안에서 지역변수로 사용. 즉, 지역변수이며 내부함수에서 접근이 가능함
    return {
        get_title : function() {
            return title;
        },
        set_title : function(_title) {
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

alert(ghost.get_title());
alert(matrix.get_title());
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title());
alert(matrix.get_title());

/*
    1. 클로저는 객체의 메소드에서도 사용할 수 있다. 위의 예제는 함수의 리턴값으로 객체를 반환하고 있다. 이 객체는 메소드 get_title과 set_title을 가지고 있다. 이 메소드들은 외부함수인 factory_movie의 인자값으로 전달된 지역변수 title을 사용하고 있다.

    2. 동일한 외부함수 안에서 만들어진 내부함수나 메소드는 외부함수의 지역변수를 공유한다. 17행에서 실행된 set_title은 외부함수 factory_movie의 지역변수 title의 값을 '공각기동대'로 변경했다. 19행에서 ghost.get_title();의 값이 '공각기동대'인 것은 set_title와 get_title 함수가 title의 값을 공유하고 있다는 의미다.

    3. 그런데 똑같은 외부함수 factory_movie를 공유하고 있는 ghost와 matrix의 get_title의 결과는 서로 각각 다르다. 그것은 외부함수가 실행될 때마다 새로운 지역변수를 포함하는 클로저가 생성되기 때문에 ghost와 matrix는 서로 완전히 독립된 객체가 된다.

    4. factory_movie의 지역변수 title은 2행에서 정의된 객체의 메소드에서만 접근 할 수 있는 값이다. 이 말은 title의 값을 읽고 수정 할 수 있는 것은 factory_movie 메소드를 통해서 만들어진 객체 뿐이라는 의미다. JavaScript는 기본적으로 Private한 속성을 지원하지 않는데, 클로저의 이러한 특성을 이용해서 Private한 속성을 사용할 수 있게된다.
*/

var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}