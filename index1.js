function studentMarks(){
    let marks = prompt("Enter the student's marks (between 0 to 100):");
    
}

let marks = 97;

let grade;

if (marks > 79 && marks <= 100){
    grade = "A";
} else if (marks > 60 && marks <= 79){
    grade = "B";
} else if (marks > 49 && marks <= 59){
    grade = "C";
} else if (marks >= 40 && marks <= 49){
    grade = "D";
} else if (marks >= 0 && marks <= 39){
    grade = "E";
} else{
    grade = "Invalid input. Marks should between 0 to 100";
}

console.log (`The grade for the student with ${marks} marks is: ${grade}`);

studentMarks();