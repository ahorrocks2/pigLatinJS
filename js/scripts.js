function pigLatin(phrase) {
  var vowels = ["a", "e", "i", "o", "u"];
  var splitPhrase = phrase.split("");
  var beginningConsonants;
  var stop = false;

  for(var i = 0; stop === false; i++) {
    vowels.forEach(function(vowel) {
      if (vowel === phrase[i]) {
        beginningConsonants = i;
        stop = true;
      }
    });
  };

  if (beginningConsonants === 0) {
    var translation = phrase + "ay";
  } else {
    var firstSegment = splitPhrase.splice(0, beginningConsonants);
    var translation = splitPhrase.join("") + firstSegment.join("") + "ay";
  }

  return translation;
}
