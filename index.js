// Code your solution in this file!



function  distanceFromHqInBlocks ( endingBlock) {
  var startingBlock  = 42
 var  d   =   Math.abs (  startingBlock - endingBlock ) ;
 
 return d;
}
function  distanceFromHqInFeet (endingBlock)  {
  var d2 = distanceFromHqInBlocks(endingBlock) ;
  d2 *= 264 ;
  return  d2  ;
  
}
function  distanceTravelledInFeet(startingBlock , endingBlock) {
  var d3 =  Math.abs( startingBlock  - endingBlock ) *264;
  return d3 + "feet";
}

function calculatesFarePrice(startingBlock, endingBlock) {
  var d4 = distanceTravelledInFeet(startingBlock , endingBlock);
  var fare;
  // (d4 < 400) ? 'The short trip is free' : { (d4 < 2000 ) ? 0.02 *(d4-400) : {(d4< 2500 ? "$30" : "cannot travel that far"}} ) 
  if (d4 < 400) {
    fare = 'The short trip is free'}
    else if (d4 < 2000) {
      fare = 2*(d4-400)/100 + "dollars";
    }
    else if( d4 < 2500) {
      fare = "Thirty Dollars" ;
    }
      else {
        fare = 'cannot travel that far';
      }
    
  }
