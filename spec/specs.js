describe('pigLatin', function() {
  it("returns the pig latin for one word that starts with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("returns the pig latin for a word beginning with one consonant", function() {
    expect(pigLatin("pig")).to.equal("igpay");
  });

  it("returns the pig latin for a word beginning with 2 consonants", function() {
    expect(pigLatin("cheetah")).to.equal("eetahchay");
  });
})
