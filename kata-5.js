const urlEncode = function (text) {
  let start = -1
  let end = text.length;

  for (let i = 0; i < text.length; i++) {
    if (text[i] != ' ') {
      if (start === -1) {
        start = i;
      } else {
        end = i;
      }
    }
  }

  let result = '';

  for (let i = start; i <= end; i++) {
    if (text[i] === ' ') {
      result += "%20";
    } else {
      result += text[i];
    }
  }

  return result;
}