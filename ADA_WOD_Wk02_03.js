function isPrime(){
	//var i=1;
	var x=document.getElementById('testNumber').value;								//locate html input and extract value
	if (x==2) { 																	// 2 is the only even prime number
	//return true;
	document.getElementById('answer').innerHTML = x + " is a Prime number!";		//locate 'answer' html element and modify
	document.getElementById('divisible').innerHTML = '';
	return 
	} else if (x%2==0 || x==1) { 													// eliminate all even numbers and number 1
	//return false;
	document.getElementById('answer').innerHTML = x + " is not a Prime number!";
	document.getElementById('divisible').innerHTML = x + " is divisible by 2." ;
	return 
	} else {   																		// starting with 2, test all numbers (i) between i and x
	for (i=2; i<x; i++) {
	  //if (x%i==0) return false;
		if (x%i==0) {
		document.getElementById('answer').innerHTML = x + " is not a Prime number!";
		document.getElementById('divisible').innerHTML = x + " is divisible by " + i;
		return   																	// if at any point in the loop x becomes divisible by i, end the loop and return false
		}
	}
	//return true;
	document.getElementById('answer').innerHTML = x + " is a Prime number!";
	document.getElementById('divisible').innerHTML = '';
	return 																			// if the loop ends without x ever being divisible by i (all numbers from 2 to x-1), 
																					// means x is only divisible by itself and therefore is prime
  }   																				// *all numbers can be divisible by 1, so there's no need to test against 1
}

//console.log(isPrime(421));
//document.write(isPrime(115223));










