var f = function() {
    console.log(1+1);
    console.log(1+2);
}

var array = [f];
a[0]();

var object = {
    func : f 
} 

object.func();