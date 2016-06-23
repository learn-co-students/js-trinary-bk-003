function Trinary(number){

  this.toDecimal = function() {
  	let value = 0;
  	let i = number.length - 1;
    number.split("").forEach(function(m){
      if (isNaN(m)){
      	return 0;
      }
      value += (+m * (Math.pow(3,i)));
      i -= 1;
    });
    return value;
	}


}