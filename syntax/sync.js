var fs = require('fs');

// readFileSync(동기적 처리 - 리턴값을 준다)
// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result);
// console.log('C');

//readFile(비동기적 처리, 세번 째 인자로 콜백 함수가 필요하다)
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(error, result) {
    console.log(result);
});
console.log('C');
