function pigLatin(phrase) {
  var words = phrase.split(" ");
  var translatedSentence = [];

  words.forEach(function(word) {

    translatedSentence.push(pigLatinWord(word));
  });

  return translatedSentence.join(" ");
};

function pigLatinWord(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var splitWord = word.split("");
  var beginningConsonants = false;

  if (/[,.?\-!]/.test(splitWord[word.length - 1])) {
    var lastElement = splitWord.pop();
  } else {
    var lastElement = "";
  }

  for(var i = 0; beginningConsonants === false; i++) {
    vowels.forEach(function(vowel) {
      if (vowel === word[i]) {
        if (word[i] === "u" && word[i-1] === "q") {
          beginningConsonants = i+1;
        } else {
          beginningConsonants = i;
        }
      }
    });
  };

  if (beginningConsonants === 0) {
    var translation = word + "ay";
  } else {
    var firstSegment = splitWord.splice(0, beginningConsonants);
    var translation = splitWord.join("") + firstSegment.join("") + "ay" + lastElement;
  }

  return translation;
}
