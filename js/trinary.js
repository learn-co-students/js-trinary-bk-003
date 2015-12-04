'use strict';

var Trinary = function(num) {
	this.num = num;	
};

Trinary.prototype.toDecimal = function(){
	var digits = (""+this.num).split("").map(function(item) {
    	return parseInt(item, 10);
	});
	var arr = [];
	var total = 0;
	for(var i = 1; i < (digits.length + 1); i++) {
		arr.push((digits[i-1] * Math.pow(3, digits.length - i)));
	}
	$.each(arr,function() {
	    total += this;
	});
	if (total) {
		return total;
	} else {
		return 0;
	};
}