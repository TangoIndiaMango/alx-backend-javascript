export default function updateStudentGradeByCity(students, city, newGrades) {
  // Use the filter() method to create a new array containing only students from the specified city.
  const studentsInCity = students.filter(student => student.location === city);

  // Use the map() method to iterate over the students in the city and update their grades.
  const updatedStudents = studentsInCity.map(student => {
    // Find the corresponding grade object in newGrades based on the student's id.
    const grade = newGrades.find(g => g.studentId === student.id);

    // If a grade is found, update the student's grade with the new grade; otherwise, set it to 'N/A'.
    const updatedGrade = (grade && grade.grade) || 'N/A';

    // Create a new object with the updated grade and all other student properties.
    return { ...student, grade: updatedGrade };
  });

  // Return the array of updated students.
  return updatedStudents;
}

