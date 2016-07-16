/* 
Conditions:
- A person cannot receive a gift from herself
- A person cannot receive more than one gift
- A person cannot have more than one wish list

BONUS:
- ability to exclude certain matches (e.g., spouse)

1. Assign Santas
    Given a list of people's names:
    - Iterate over list to select "santa"
    - Remove santa from list
    - Match santa with a random recipient from remaining list
    - Return list of santa and recipient pairs
*/


var matches = [];

function assignSantas(array) {
  if(!array || !array.length) {
    return null;
  }

  var santas      = array.slice();
  shuffle(santas);
  

  for(var i=0; i<santas.length; i++) {
    var santa     = santas[i],
        recipient;

    // Assign santa to the person next to them to avoid assigning to self and avoid duplicate recipients
    if(i !== santas.length-1) {
      recipient = santas[i+1];
    } else {
      recipient = santas[0];      
    }

    matches.push({ "santa": santa, "recipient": recipient });
  }

  return matches;
};

function shuffle(array) {
  var n = array.length, 
      i, 
      j;

  while(n) {
    i = Math.floor(Math.random() * n--);

    j = array[n];
    array[n] = array[i];
    array[i] = j;
  } 

  return array;
}

module.exports.assignSantas = assignSantas;
