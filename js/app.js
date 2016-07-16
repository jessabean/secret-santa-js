var matches = [];

function assignSantas(array) {
  if(!array || !array.length) {
    return null;
  }

  var santas = array.slice();
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

  displayNames(matches);
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
}

function displayNames(array) {
  for(var i=0; i<array.length; i++) {
    var pairing   = array[i],
        santa     = pairing.santa,
        recipient = pairing.recipient;
      console.log(pairing.santa + ' gives a gift to ' + pairing.recipient);
  }
}

module.exports.assignSantas = assignSantas;
