var c = true;

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
	expect(8);
	equal(is.Object(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.Object({}), true, 'Object test');
	equal(is.Object([]), false, 'Array test');
	equal(is.Object(function(){}), false, 'function test');
	equal(is.Object(''), false, 'string test');
	equal(is.Object(1), false, 'number test');
	equal(is.Object(true), false, 'boolean test');
	equal(is.Object(new Date()), false, 'date test');
	
});

test('is.Array', function() {
	expect(8);
	equal(is.Array(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.Array({}), false, 'Object test');
	equal(is.Array([]), true, 'Array test');
	equal(is.Array(function(){}), false, 'function test');
	equal(is.Array(''), false, 'string test');
	equal(is.Array(1), false, 'number test');
	equal(is.Array(true), false, 'boolean test');
	equal(is.Array(new Date()), false, 'date test');
	
});

test('is.Function', function() {
	expect(8);
	equal(is.Function(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.Function({}), false, 'Object test');
	equal(is.Function([]), false, 'Array test');
	equal(is.Function(function(){}), true, 'function test');
	equal(is.Function(''), false, 'string test');
	equal(is.Function(1), false, 'number test');
	equal(is.Function(true), false, 'boolean test');
	equal(is.Function(new Date()), false, 'date test');
});

test('is.String', function() {
	expect(8);
	equal(is.String(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.String({}), false, 'Object test');
	equal(is.String([]), false, 'Array test');
	equal(is.String(function(){}), false, 'function test');
	equal(is.String(''), true, 'string test');
	equal(is.String(1), false, 'number test');
	equal(is.String(true), false, 'boolean test');
	equal(is.String(new Date()), false, 'date test');
});

test('is.Number', function() {
	expect(8);
	equal(is.Number(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.Number({}), false, 'Object test');
	equal(is.Number([]), false, 'Array test');
	equal(is.Number(function(){}), false, 'function test');
	equal(is.Number(''), false, 'string test');
	equal(is.Number(1), true, 'number test');
	equal(is.Number(true), false, 'boolean test');
	equal(is.Number(new Date()), false, 'date test');
});

test('is.RegExp', function() {
	expect(8);
	equal(is.RegExp(new RegExp('abc|bcd')), true, 'RegExp test');
	equal(is.RegExp({}), false, 'Object test');
	equal(is.RegExp([]), false, 'Array test');
	equal(is.RegExp(function(){}), false, 'function test');
	equal(is.RegExp(''), false, 'string test');
	equal(is.RegExp(1), false, 'number test');
	equal(is.RegExp(true), true, 'boolean test');
	equal(is.RegExp(new Date()), false, 'date test');
});

test('is.Date', function() {
	expect(8);
	equal(is.Date(new RegExp('abc|bcd')), false, 'RegExp test');
	equal(is.Date({}), false, 'Object test');
	equal(is.Date([]), false, 'Array test');
	equal(is.Date(function(){}), false, 'function test');
	equal(is.Date(''), false, 'string test');
	equal(is.Date(1), false, 'number test');
	equal(is.Date(true), false, 'boolean test');
	equal(is.Date(new Date()), true, 'date test');
});