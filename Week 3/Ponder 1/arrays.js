// //Activity 1
// const countArray = ["one", "two", "three"];

// const countMap = countArray.map(function (count) {
//     return ("<li>" + count + "</li>");
// });

// document.getElementById("myList").innerHTML = countMap.join();

//Activity 2
const letterGrades = ['A', 'B', 'A'];
const pointGrades = letterGrades.map(function(grade) {
  switch (grade) {
    case 'A':
      newGrade = 4;
      break;
    case 'B':
      newGrade = 3;
      break;
    case 'C':
      newGrade = 2;
      break;
    case 'D':
      newGrade = 1;
      break;
  };
  return newGrade;
});

const totalGPA = pointGrades.reduce(function (sum, grade) {
  return sum + grade;
})

const finalGPA = totalGPA / pointGrades.length;

document.getElementById("myList").innerHTML = finalGPA;