'use strict';

function Trinary (num) {
	this.num = num;	
};


Trinary.prototype.toDecimal = function() {
	if (isNaN(parseInt(this.num))) {
		return 0;
	} else{
		var result = 0;
		for (var i = 0, char_index = this.num.length - 1; i < this.num.length; i++ ,char_index--){
			console.log(i);
			console.log(char_index);
			result += Math.pow(3,i)*parseInt(this.num.charAt(char_index))
		};
		return result;
	};
};