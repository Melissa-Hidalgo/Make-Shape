// How to loop x times
function PrintMeXTimesForward(NumOfPrints){


	var finalMessage = "";
	for(var count = 0; count <= NumOfPrints; count++)
	{
		finalMessage += createBlankSpaces(count) + count + ": El resultado final es " + NumOfPrints + "<br />";
	}
	return finalMessage;
}
function PrintMeXTimesBackward(NumOfPrints){

	// Reversed order
	var finalMessage = "";
	for(var count = NumOfPrints; count >= 0; count--)
	{
		finalMessage += createBlankSpaces(count) + count + ": El resultado final es " + NumOfPrints + "<br />";
	}   
	return finalMessage;

}
// Another option to Loop
function PrintMeXTimesWhile(NumOfPrints){

	var count = 0;
	var resultList = ""
	// = document.getElementById("resultado").value;
	
	while( count <= NumOfPrints ) 
	{
		/*if(count == 5) 
		{
			break;
		} */

		resultList = resultList + createBlankSpaces(count) + count + ": El resultado final es " + NumOfPrints + "<br />"
		// document.write("<br>Debug Point #1: " + count + "<br>");

		count++;
	}
	// document.write("<br>Debug Point #2: " + NumOfPrints + "<br>");
	return resultList;
}
function createBlankSpaces(numberOfSpaces) {

	var spacer = "";
	for (let index = 0; index < numberOfSpaces; index++) {
		spacer += "&nbsp;" + ".";
	}
	return spacer;
}

function PrintLeftField(size){
	// document.write("<br>Debug Point #1: PrintLeftField <br>");
	return getFiller (size, "+");
}
function PrintCenterField(size){ 
	// document.write("<br>Debug Point #1: PrintCenterField <br>");
	if (size == 0 || size == 0 ){
		return "+0";
	} else {
		return "0" + getFiller (size, "+") + "0";
	}
}
function PrintRightField(size){
	// document.write("<br>Debug Point #1: PrintRightField <br>");
	return  getFiller (size, "+") + "<br>";
}

function getFiller(size, strChar){
	var bag = "";
	for (let index = 0; index < size; index++) {
		bag += strChar;
	}
	return bag;
}
function DrawShape (){

	// document.write(PrintLeftField(10)) ;
	// document.write(PrintCenterField(2));
	// document.write(PrintLeftField(10));

	var half = 30;
	for (let index = 0; index < half; index++) {
		if (index == 0){
			// document.write("<br>Debug Point #1: DrawShape<br>" + half);
			document.write(PrintLeftField(half - index) + PrintCenterField(index) +  PrintLeftField(half - index));
			document.write("<br/>")
		} else {
			document.write(PrintLeftField(half - index) + PrintCenterField((half - (half - index) ) * 2 + 1) + PrintLeftField(half - index));
			document.write("<br/>")
		}
	}

	var half = 30;
	for (let index = half; index >= 0; index--) {
		if (index == 0){
			// document.write("<br>Debug Point #1: DrawShape<br>" + half);
			document.write(PrintLeftField(half - index) + PrintCenterField(index) +  PrintLeftField(half - index));
			document.write("<br/>")
		} else {
			document.write(PrintLeftField(half - index) + PrintCenterField((half - (half - index) ) * 2 + 1) + PrintLeftField(half - index));
			document.write("<br/>")
		}
	}
}

