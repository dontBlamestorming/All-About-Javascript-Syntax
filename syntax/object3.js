var object = {
    v1 : 'v1',
    v2 : 'v2',
    f1 : function() {
        console.log(object.v1);
    },
    f2 : function() {
        console.log(object.v2);
    }
}

object.f1();
object.f2();