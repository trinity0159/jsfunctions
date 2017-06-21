//Function that returns the highest number in an array
function myMax(userArray){
	var max = 0;
  for(i=0; i < userArray.length; i++){
  	if(max < userArray[i]){
    	max = userArray[i];
    }
  }
  return max;
}

//Function that returns the number of vowels in a string
function vowelCount(userString){
	var numVowel = 0;
  	for(i=0; i < userString.length; i++){
  		if(userString[i] == 'a' || userString[i] == 'e' || userString[i] == 'i' || userString[i] == 'o' || userString[i] == 'u'){
    	numVowel++;
    }
  }
  return numVowel;
}

//Function that takes a string and returns the reverse
function reverseString(userString){
	var revString = [];
	var j = 0;
	for(i=(userString.length-1); i>=0; i--){
		revString[j] = userString[i];
		j++;
	}
	finalString = revString.join('');
	return finalString;
}
console.log(myMax([10, 5, 7, 13, 4, 5, 21, 6, 4]));
console.log(vowelCount('georgia'));
console.log(reverseString('georgia'));