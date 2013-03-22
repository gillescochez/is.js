is.js is a tiny (~200 bytes) strict type checker/engine which offer a little API to test JavaScript types as well as allows the creation of custom type checkers.

Basic API explained below see tests.js for more test cases.

Builder
-------------

 is._(string [, context]);
  - create one custom type checker function
  - example:
  
```javascript

	var C = function(){},
		D = function(){};
		
	D.E = function(){};
		
	is._('C');
	is._('D');
	is._('E', D);
	
	console.log(is.C(new C) === true);
	console.log(is.D(new D) === true);
	console.log(is.E(new D.E) === true);
	
```

JS Types
--------
  
```javascript

var anything = '';

console.log(is.Object(anything)); // return true if anything was created by the object constructor

console.log(is.Array(anything)); // return true if anything was created by the array constructor

console.log(is.Function(anything)); // return true if anything was created by the function constructor

console.log(is.String(anything)); // return true if anything was created by the string constructor

console.log(is.Number(anything)); // return true if anything was created by the number constructor

console.log(is.Date(anything)); // return true if anything was created by the date constructor

console.log(is.RegExp(anything)); // return true if anything was created by the RegExp constructor

```