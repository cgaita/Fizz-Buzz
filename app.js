function fizzBuzz(){
	// for loop from 1-100
	for (var i=1; i<=100; i++){
			// find divisible by 3 and 5
		if(i%3==0 && i%5==0){
			console.log('fizz buzz');
		}
			// find divisible by 3
		else{
			if(i%3===0){
				console.log('fizz');
			}
			// find divisible by 5
			else if(i%5===0){
				console.log ('buzz');
			}
			// find the rest (not div by 3, 5 or both)
			else{
				console.log(i);
			}
		}
	}
} 
fizzBuzz();