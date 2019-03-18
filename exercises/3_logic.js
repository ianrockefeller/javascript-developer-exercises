function paintMixer(color1, color2) {
  /*
  Add code here that will take the two string params and
  return a value as to what those two colors would create when mixed:

  * blue and red should mix to return 'purple'
  * green and red should mix to return 'brown'
  * blue and yellow should mix to return 'green'
  * anything with unknown colors should return a result of 'unknown'.

  The order of the params should not matter.
  */
  // PLACE YOUR CODE BELOW


  var mixers = {
    purple: ['red', 'blue'],
    brown: ['green', 'red'],
    green: ['blue', 'yellow']
  }

  for(var key in mixers) {
    if(mixers[key].includes(color1) && mixers[key].includes(color2)) {
      return key
    }
  }

  return 'unknown'
  // PLACE YOUR CODE ABOVE
}

paintMixer('blue', 'red') === 'purple' && console.log('First mix worked')
paintMixer('red', 'blue') === 'purple' && console.log('Second mix worked')
paintMixer('green', 'red')=== 'brown' && console.log('Third mix worked')
paintMixer('blue', 'yellow') ==='green' && console.log('Fourth mix worked')
paintMixer('apple', 'frog') ==='unknown' && console.log('Apples and frogs don\'t mix, as expected')

/*
If everything works, you should see the following on the console
when run with "node 3_logic.js":

First mix worked
Second mix worked
Third mix worked
Fourth mix worked
Apples and frogs don't mix, as expected
*/