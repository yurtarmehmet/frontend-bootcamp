console.log(true + false)
// true + false
// 1 + false
// 1 + 0
// 1


console.log(12 / "6");
// 12 / 6
// 2

console.log("number" + 15 + 3);
// "number" + "15"
// "number15" + 3
// "number15" + "3"
// "number153"


console.log(15 + 3 + "number");
// 18 + "number"
// "18" + "number"
// "18number"

console.log([1] > null);
// [1].toString = "1";
// "1" > null
// 1 > null
// 1 > 0
// true

console.log([1,2,3] > null)
// "1,2,3" > null
// NaN > null
// false

console.log("foo" + +"bar");
// Number("bar"), +"bar" => NaN
// "foo" + NaN
// "foo" + "NaN"
// "fooNaN";

console.log('true' == true);
// Number('true') => NaN // typeof NaN = Number
// NaN == true
// NaN == 1
// false

console.log(null == '');
// false
// ISTISTNA: null sadece kendine ve undefined a esittir.

console.log(!!"false" == !!"true");
// "false", "hello" "false" !== false
// if("false") { console.log("a")} 
// Boolean("false") => true
// !false == !false
// true == true
// true

console.log(['x'] == 'x')
// ['x'].toString() -- 'x'
// 'x' == 'x'
// true


console.log([] + null + 1);
// '' + null + 1
// 'null' + 1
// 'null1'


console.log(0 || "0" && {});
// (0 || "0") && {};
// (false || true) && {};
// true && {}
// {}

console.log([1,2,3] == [1,2,3]);
// false

{} + [] + {} + [1];
// object literal en basta ise, javascript onu block olarak algilayip yok sayar
// +[] + {} + [1]
// +'' + {} + [1]
// 0 + {} + [1]
// 0 + "[object Object]" + [1]
// "0[object Object]" + [1]
// "0[object Object]" + "1"
// "0[object Object]1"
console.log({} + [] + {} + [1];);
// "[object Object][object Object]1"



console.log(["a"] > null);
// "a" > null
// NaN > 0
// false






