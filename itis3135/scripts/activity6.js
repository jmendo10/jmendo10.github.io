var rate = prompt("Provide the JSS code", "0");
if ( isNaN(rate) ) {
    alert ("You did not provide a number for the rate.");
} else if ( rate < 0) {
    alert ("The number may not be less than zero." );
}  else if ( rate > 10) {
    alert ("The number may not be greater than 10." );
}