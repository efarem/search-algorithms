module.exports = function search(needle, haystack, property) {
  var midpoint = Math.floor(haystack.length / 2);

  if (haystack[midpoint][property] === needle) {
    return haystack[midpoint];
  } else if (needle < haystack[midpoint][property]) {
    return search(needle, haystack.splice(0, midpoint), property);
  } else if (needle > haystack[midpoint][property]) {
    return search(needle, haystack.splice(midpoint + 1, haystack.length), property);
  }

  return null;
};
