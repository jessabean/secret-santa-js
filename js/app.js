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

  var recipients  = array.slice();

  for(var i=0; i<array.length; i++) {
    var santa     = array[i];
    var random    = Math.floor(Math.random() * array.length);
    var recipient = recipients[random];

    if(santa !== recipient) {
      matches.push([santa, recipient]);
      recipients.splice(recipients.indexOf(recipient), 1);
    } else {
      recipient = recipients[random]
    }
  }

  return matches;
};


module.exports.assignSantas = assignSantas;
