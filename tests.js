test('is._ engine', function() {
	
	A = function(){};
	B = function(){};
	C = function(){};

	A.C = function(){};
	B.C = function(){};
		
	is._('A');
	is._('B');
	is._('C', B);
	
	expect(9);
	
	equal(is.A(new A), true, 'is.A(new A)');
	equal(is.A(new B), false, 'is.A(new B)');
	equal(is.B(new A), false, 'is.B(new A)');
	equal(is.B(new B), true, 'is.B(new B)');
	equal(is.C(new B.C), true, 'is.C(new C)');
	equal(is.C(new A.C, A), true, 'is.C(new A.C, A)');
	equal(is.C(new C, A), false, 'is.C(new C, A)');
	equal(is.C(new A.C, window), false, 'is.C(new A.C, window)');
	equal(is.C(new C, window), true, 'is.C(new C, window)');
});

test('is.Object', function() {
	expect(7);
	equal(is.Object(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.Object({}), true, 'Object test');
	equal(is.Object([]), false, 'Array test');
	equal(is.Object(function(){}), false, 'function test');
	equal(is.Object(''), false, 'string test');
	equal(is.Object(1), false, 'number test');
	equal(is.Object(true), false, 'boolean test');
	
});

test('is.Array', function() {
	expect(7);
	equal(is.Array(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.Array({}), false, 'Object test');
	equal(is.Array([]), true, 'Array test');
	equal(is.Array(function(){}), false, 'function test');
	equal(is.Array(''), false, 'string test');
	equal(is.Array(1), false, 'number test');
	equal(is.Array(true), false, 'boolean test');
	
});

test('is.Function', function() {
	expect(7);
	equal(is.Function(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.Function({}), false, 'Object test');
	equal(is.Function([]), false, 'Array test');
	equal(is.Function(function(){}), true, 'function test');
	equal(is.Function(''), false, 'string test');
	equal(is.Function(1), false, 'number test');
	equal(is.Function(true), false, 'boolean test');
});

test('is.String', function() {
	expect(7);
	equal(is.String(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.String({}), false, 'Object test');
	equal(is.String([]), false, 'Array test');
	equal(is.String(function(){}), false, 'function test');
	equal(is.String(''), true, 'string test');
	equal(is.String(1), false, 'number test');
	equal(is.String(true), false, 'boolean test');
});

test('is.Number', function() {
	expect(7);
	equal(is.Number(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.Number({}), false, 'Object test');
	equal(is.Number([]), false, 'Array test');
	equal(is.Number(function(){}), false, 'function test');
	equal(is.Number(''), false, 'string test');
	equal(is.Number(1), true, 'number test');
	equal(is.Number(true), false, 'boolean test');
});

test('is.Boolean', function() {
	expect(7);
	equal(is.Boolean(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.Boolean({}), false, 'Object test');
	equal(is.Boolean([]), false, 'Array test');
	equal(is.Boolean(function(){}), false, 'function test');
	equal(is.Boolean(''), false, 'string test');
	equal(is.Boolean(1), false, 'number test');
	equal(is.Boolean(true), true, 'boolean test');
});

test('is.RegExp', function() {
	expect(7);
	equal(is.RegExp(new RegExp('abc|bcd')), true, 'RegExp test');
	equal(is.RegExp({}), false, 'Object test');
	equal(is.RegExp([]), false, 'Array test');
	equal(is.RegExp(function(){}), false, 'function test');
	equal(is.RegExp(''), false, 'string test');
	equal(is.RegExp(1), false, 'number test');
	equal(is.RegExp(true), true, 'boolean test');
});