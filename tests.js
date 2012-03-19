test('is._', function() {
	
	A = function(){};
	B = function(){};
		
	is._('A');
	is._('B');
	
	equal(is.A(new A), true, 'is.a(new A)');
	equal(is.A(new B), false, 'is.a(new B)');
	equal(is.B(new A), false, 'is.b(new A)');
	equal(is.B(new B), true, 'is.b(new B)');
});
	
test('is.Object', function() {
	expect(6);
	equal(is.Object({}), true, 'Object test');
	equal(is.Object([]), false, 'Array test');
	equal(is.Object(function(){}), false, 'function test');
	equal(is.Object(''), false, 'string test');
	equal(is.Object(1), false, 'number test');
	equal(is.Object(true), false, 'boolean test');
	
});

test('is.Array', function() {
	expect(6);
	equal(is.Array({}), false, 'Object test');
	equal(is.Array([]), true, 'Array test');
	equal(is.Array(function(){}), false, 'function test');
	equal(is.Array(''), false, 'string test');
	equal(is.Array(1), false, 'number test');
	equal(is.Array(true), false, 'boolean test');
	
});

test('is.Function', function() {
	expect(6);
	equal(is.Function({}), false, 'Object test');
	equal(is.Function([]), false, 'Array test');
	equal(is.Function(function(){}), true, 'function test');
	equal(is.Function(''), false, 'string test');
	equal(is.Function(1), false, 'number test');
	equal(is.Function(true), false, 'boolean test');
});

test('is.String', function() {
	expect(6);
	equal(is.String({}), false, 'Object test');
	equal(is.String([]), false, 'Array test');
	equal(is.String(function(){}), false, 'function test');
	equal(is.String(''), true, 'string test');
	equal(is.String(1), false, 'number test');
	equal(is.String(true), false, 'boolean test');
});

test('is.Number', function() {
	expect(6);
	equal(is.Number({}), false, 'Object test');
	equal(is.Number([]), false, 'Array test');
	equal(is.Number(function(){}), false, 'function test');
	equal(is.Number(''), false, 'string test');
	equal(is.Number(1), true, 'number test');
	equal(is.Number(true), false, 'boolean test');
});

test('is.Boolean', function() {
	expect(6);
	equal(is.Boolean({}), false, 'Object test');
	equal(is.Boolean([]), false, 'Array test');
	equal(is.Boolean(function(){}), false, 'function test');
	equal(is.Boolean(''), false, 'string test');
	equal(is.Boolean(1), false, 'number test');
	equal(is.Boolean(true), true, 'boolean test');
});