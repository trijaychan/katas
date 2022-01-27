
const urlDecode = function(text) {
  let dict = {};

  let key = '';
  let val = '';
  let condition = false;

  for (let i = 0 ; i <= text.length; i++) {
    if (text[i] === '=') {
      condition = true;
      i++;
    }

    if (text[i] === '%') {
      val += ' ';
      i += 2;
    } else if (text[i] === '&' || i === text.length) {
      dict[key] = val;
      key = '';
      val = '';
      condition = false;
    } else if (condition) {
      val += text[i];
    } else if (!condition) {
      key += text[i];
    }
  }

  return dict;
};