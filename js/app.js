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

function assignSantas(people) {

}

module.exports.assignSantas = assignSantas;
