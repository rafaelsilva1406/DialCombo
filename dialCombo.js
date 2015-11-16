/*
*Author: Rafael Silva
*Summary: This Code shows how many combos can be made based submiting 10 integer number which each matches dial pad in MyDevices interview room only.
*/

/*
*Method:dialCombo
*Param:array
*Return: void
*Summary: Based on array in param each index value represents key to construct grid 
*/
function dialCombo(arr){
	var jaggedArr = [],//array that will hold value arrays
		zeroArr = ['0'], //values that will equal 0 if dial
		twoArr = ['A','B','C'], //values that will equal 2 if dial
		threeArr = ['D','E','F'], //values that will equal 3 if dial
		fourArr = ['G','H','I'], //values that will equal 4 if dial 
		fiveArr = ['J','K','L'], //values that will equal 5 if dial 
		sixArr = ['M','N','O'], //values that will equal 6 if dial 
		eightArr = ['T','U','V'], //values that will equal 8 if dial
		nineArr = ['w','X','Y','Z']; //values that will equal 9 if dial
	jaggedArr.push(eightArr);
	jaggedArr.push(zeroArr);
	jaggedArr.push(fiveArr);
	jaggedArr.push(twoArr);
	jaggedArr.push(threeArr);
	jaggedArr.push(sixArr);
	jaggedArr.push(threeArr);
	jaggedArr.push(fourArr);
	jaggedArr.push(twoArr);
	jaggedArr.push(nineArr);
	
	for(var i = 0; i < jaggedArr.length; i++){ //outter loop through jagged array length
		for(var c = 0; c < jaggedArr[i].length; c++){ // inner loop though index of jagged Array 
		}
	}
	console.log(grid.length);
	
}

/*
*Method: init
*Params: element obj
*Return: bool
*Summary: take in button element return false do further logic
*/
function init(t){
	var input = document.getElementById("tel"),//hold input locally
		inputValArr = input.value.split("");//capture value turn to array 
	input.disabled = true;//disable input 
	dialCombo(inputValArr);//pass array to method
	return false;//return false
}