const numberOfVowels = function (data) {
  const vowels = 'aeiou';
  let counter = 0;

  for (letter of data) {
    for (vowel of vowels) {
      if (letter === vowel)
        counter++;
    }
  }

  return counter;
}