function ucFirst(str) {
  strUpper = str.charAt(0).toUpperCase() + str.slice(1);
  return strUpper;
}
ucFirst('в') === 'В';
ucFirst('') === '';
