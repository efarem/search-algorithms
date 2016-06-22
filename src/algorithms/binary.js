function search(needle, haystack, compare) {
  var midpoint = Math.floor(haystack.length / 2);
  var result = compare(needle, haystack[midpoint]);

  if (result === 0) {
    return haystack[midpoint];
  } else if (result === -1) {
    return (haystack.length === 1) ? null : search(needle, haystack.splice(0, midpoint), compare);
  } else if (result === 1) {
    return (haystack.length === 1) ? null : search(needle, haystack.splice(midpoint + 1, haystack.length), compare);
  }

  return null;
}

module.exports = search;
