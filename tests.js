test('is._', function() {
	
	A = function(){};
	B = function(){};
		
	is._('A');
	is._('B');
	
	equal(is.a(new A), true, 'is.a(new A)');
	equal(is.a(new B), false, 'is.a(new B)');
	equal(is.b(new A), false, 'is.b(new A)');
	equal(is.b(new B), true, 'is.b(new B)');
});
	
test('is.object', function() {
	expect(6);
	equal(is.object({}), true, 'object test');
	equal(is.object([]), false, 'array test');
	equal(is.object(function(){}), false, 'function test');
	equal(is.object(''), false, 'string test');
	equal(is.object(1), false, 'number test');
	equal(is.object(true), false, 'boolean test');
	
});

test('is.array', function() {
	expect(6);
	equal(is.array({}), false, 'object test');
	equal(is.array([]), true, 'array test');
	equal(is.array(function(){}), false, 'function test');
	equal(is.array(''), false, 'string test');
	equal(is.array(1), false, 'number test');
	equal(is.array(true), false, 'boolean test');
	
});

test('is.function', function() {
	expect(6);
	equal(is.function({}), false, 'object test');
	equal(is.function([]), false, 'array test');
	equal(is.function(function(){}), true, 'function test');
	equal(is.function(''), false, 'string test');
	equal(is.function(1), false, 'number test');
	equal(is.function(true), false, 'boolean test');
});

test('is.string', function() {
	expect(6);
	equal(is.string({}), false, 'object test');
	equal(is.string([]), false, 'array test');
	equal(is.string(function(){}), false, 'function test');
	equal(is.string(''), true, 'string test');
	equal(is.string(1), false, 'number test');
	equal(is.string(true), false, 'boolean test');
});

test('is.number', function() {
	expect(6);
	equal(is.number({}), false, 'object test');
	equal(is.number([]), false, 'array test');
	equal(is.number(function(){}), false, 'function test');
	equal(is.number(''), false, 'string test');
	equal(is.number(1), true, 'number test');
	equal(is.number(true), false, 'boolean test');
});

test('is.boolean', function() {
	expect(6);
	equal(is.boolean({}), false, 'object test');
	equal(is.boolean([]), false, 'array test');
	equal(is.boolean(function(){}), false, 'function test');
	equal(is.boolean(''), false, 'string test');
	equal(is.boolean(1), false, 'number test');
	equal(is.boolean(true), true, 'boolean test');
});