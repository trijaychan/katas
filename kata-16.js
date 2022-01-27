const makeCase = function(input, casing) {
  const priorities = {
    high: ['camel', 'pascal', 'snake', 'kebab', 'title'],
    medium: ['vowel', 'consonant'],
    low: ['upper', 'lower']
  };

  const vowels = 'aieou';
  let queue = [];

  if (Array.isArray(casing)) {
    for (let priority in priorities) {
      for (item of casing) {
        if (priorities[priority].includes(item)) {
          queue.push(item);
        }
      }
    }
  } else {
    queue.push(casing);
  }

  let result;

  for (type of queue) {
    result = '';

    for (let i = 0; i < input.length; i++) {
      if (input[i] != ' ') {
        if (type === 'upper' || (type === 'vowel' && vowels.includes(input[i])) || (type === 'consonant' && !(vowels.includes(input[i])))
        || (i === 0 && (type === 'pascal' || type === 'title'))) {
          result += input[i].toUpperCase();
        } else if (type === 'camel' || type === 'pascal' || type === 'vowel' || type === 'consonant' || type === 'lower'
        || (type === 'vowel' && !(vowels.includes(input[i]))) || (type === 'consonant' && (vowels.includes(input[i])))) {
          result += input[i].toLowerCase();
        } else {
          result += input[i];
        }
      } else {
        if (type === 'camel' ||type === 'pascal' || type === 'title') {
          if (type === 'title')
            result += ' ';
          
          result += input[i + 1].toUpperCase();
          i++;
        } else if (type === 'snake') {
          result += '_';
        } else if (type === 'kebab') {
          result += '-';
        } else {
          result += input[i];
        }
      }
    }

    input = result;
  }

  return result;
}