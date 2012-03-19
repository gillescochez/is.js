is = function(a, o) {

	var l = a.length, i = 0;
	
	o._ = function(t) {
		this[t.toLowerCase()] = function(i) {
			return i.constructor == window[t]
		}
	}
	
	for (; i < l; i++) o._(a[i])
	
	return o
	
}(['Object','Array','Function','String','Number','Boolean'], {})