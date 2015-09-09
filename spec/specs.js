describe('pigLatinWord', function() {
  it("returns the pig latin for one word that starts with a vowel", function() {
    expect(pigLatinWord("ape")).to.equal("apeay");
  });

  it("returns the pig latin for a word beginning with one consonant", function() {
    expect(pigLatinWord("pig")).to.equal("igpay");
  });

  it("returns the pig latin for a word beginning with 2 consonants", function() {
    expect(pigLatinWord("cheetah")).to.equal("eetahchay");
  });

  it("returns the pig latin for words with 'qu' ", function() {
    expect(pigLatinWord("quail")).to.equal("ailquay");
  });

  it("returns the pig latin for words that start with u", function() {
    expect(pigLatinWord("unicorn")).to.equal("unicornay");
  });
});

describe('pigLatin', function() {
  it("returns the pig latin for a sentence", function() {
    expect(pigLatin("the dancing kangaroo with his friend the zebra")).to.equal("ethay ancingday angarookay ithway ishay iendfray ethay ebrazay")
  });

  it("returns the pig latin for a sentence regardless of punctuation", function() {
    expect(pigLatin("snacking! squirrels!")).to.equal("ackingsnay! irrelssquay!")
  });
})
