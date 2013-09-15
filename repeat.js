
module.exports = function(limit, val) {
	var ar = [], push_it;

	if (typeof val === 'function')
		push_it = function(i) { ar.push(val(i)); };
	else
		push_it = function(i) { ar.push(val); };

	for (var i = 0; i < limit; ++i) push_it(i);
	return ar;
};
