const instructorWithLongestName = function (instructors) {
  let longest = instructors[0];

  for (info of instructors) {
    if (info.name.length > longest.name.length)
      longest = info;
  }

  return longest;
}