const organizeInstructors = function(instructors) {
  let organized = {};

  for (instructor of instructors) {
    if (instructor.course in organized) {
      organized[instructor.course].push(instructor.name);
    } else {
      organized[instructor.course] = [instructor.name];
    }
  }

  return organized;
};