let grade = Number(prompt("Please enter a number 1 - 100"));

if (grade < 1 || grade > 100 ) {
    document.write("Please select a number within the requested range.");
} else if (grade >= 60 && grade <= 69) {
    document.write("You received a D")
}  else if (grade >= 70 && grade <= 79) {
    document.write("You received a C")
}  else if (grade >= 80 && grade <= 89) {
    document.write("You received a B")
}  else if (grade >= 90 && grade <= 100) {
    document.write("You received an A")
}  else {
    document.write("You received an F")
}