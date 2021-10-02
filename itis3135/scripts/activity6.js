var valueSides = prompt("Jumpy Shark Induction team needs a value between 0 and 10!");

do{

    if(!(validateEntry(valueSides))){
        valueSides = prompt("Sorry! Please use numbers 0 - 10!");
    }
    
}while(valueSides > 11);

        valueSides = parseInt(valueSides);  
        valueSides = parseFloat(valueSides); 
        valueSides = Math.abs(valueSides); 
        valueSides = Math.round(valueSides); 

var shapeName = getShape(valueSides);
alert(shapeName);

function getShape(sides) {
	var Shape = "";
	    switch(sides){

        case 1: Shape = "Henagon"; 
break;
	case 2: Shape = "Digon"; 
break;
	case 3: Shape = "Trigon"; 
break;
	case 4: Shape = "Tetragon"; 
break;
	case 5: Shape = "Pentagon"; 
break;
	case 6: Shape = "Hexagon"; 
break;
	case 7: Shape = "Heptagon"; 
break;
	case 8: Shape = "Octogon"; 
break;
	case 9: Shape = "Enneagon"; 
break;
	case 10: Shape = "Decogon"; 
break;
	} 
return Shape;
}

function validateEntry(requestedNum){
        if(requestedNum < 10){
        return true;
            }else{
        return false;
    }        
}
