function pigLatin(phrase) {
  var words = phrase.split(" ");
  var translatedSentence = [];

  words.forEach(function(word) {
    translatedSentence.push(pigLatinWord(word));
  });

  return translatedSentence.join(" ");
}

function pigLatinWord(word) {
  var splitWord = word.split("");
  var beginningConsonants = false;
  var lowerCaseWord = word.toLowerCase();
  var lastElement = "";

  if (/[,.?\-!]/.test(splitWord[word.length - 1])) {
    lastElement = splitWord.pop();
  }

  for(var i = 0; beginningConsonants === false; i++) {
    if (/[aeiou]/i.test(lowerCaseWord[i])) {
      if (lowerCaseWord[i] === "u" && lowerCaseWord[i-1] === "q") {
        beginningConsonants = i+1;
      } else {
        beginningConsonants = i;
      }
    }
  };

  if (beginningConsonants === 0) {
    var translation = splitWord.join("") + "ay" + lastElement;
  } else {
    var firstSegment = splitWord.splice(0, beginningConsonants);
    var translation = splitWord.join("") + firstSegment.join("") + "ay" + lastElement;
  }

  return translation;
}
