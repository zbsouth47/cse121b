

function getGrades(inputSelector) {
    const grades = document.getElementById('grades').value;
    const gradeArray = grades.split(',');
    const cleanGrades = gradeArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    return cleanGrades;
}

function convertGrade(letterGrade) {
    let points = 0;
    if (letterGrade === 'A') {
        points = 4;
    }
    else if (letterGrade === 'B') {
        points = 3;
    }
    else if (letterGrade === 'C') {
        points = 2;
    }
    else if (letterGrade === 'D') {
        points = 1;
    }
    return points;
}

function calculateGPA(grades) {
    const gradePoints = grades.map((grade) => convertGrade(grade));
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    return gpa.toFixed(2);
}

function displayGPA(gpa, selector) {
    const outputElement = document.querySelector(selector);
    outputElement.innerText = gpa;
}

function clickHandler() {
    const grades = getGrades();
    const gpa = calculateGPA(grades);
    displayGPA(gpa, '#output');
}

const submitButtonElement = document.getElementById('submitButton');
submitButtonElement.addEventListener('click', clickHandler);