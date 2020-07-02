//string manipulation over an array is more performant than creating a new string many times;
function rev(str) {
  return str.split('').reverse().join('');
}
