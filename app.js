function fizzBuzz(start){
	var i=start || 1;

	// for loop from 1-100
	for (i; i<=100; i++){
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
//java script version
/*document.getElementById('button').onclick=function(){
var number = document.getElementsByClassName('submit-number')[0].value;
	fizzBuzz(number);
}*/
//jquery version
$(document).ready(function(){
	$('#button').click(function(){
		var number = $('.submit-number').val();
		fizzBuzz(number);
	});
})