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

var people = ["Jon", "Rob", "Sansa", "Arya", "Rickon", "Bran"];

function assignSantas(array) {
  // return null if null or empty array get passed in
  if(!array || !array.length) {
    return null;
  }

  // Set up container for santa matches
  var matches = [];
  // Copy original list of people so I can manipulate it
  var players = array.slice();

  for(var i=0; i<array.length; i++) {
    var santa = players.splice(i, 1)[0];

    matches.push(
      {
        'santa': santa
      }
    );
    
    // Reset players list to match list so I can pick the next santa 
    var players = array.slice();
  }

  console.log(matches);
  return matches;
};

assignSantas(people);

module.exports.assignSantas = assignSantas;
