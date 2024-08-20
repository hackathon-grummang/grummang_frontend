export const htmlEscape = (input) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;',
  };

  return input.replace(/[&<>"'/`=]/g, function(char) {
    return map[char];
  });
}

export const specialChar = (str) => {
  const specialCharRegex = /[&<>"'/`=%^()?*/[\]]/;
  return specialCharRegex.test(str);
}