
let num1 = Number(prompt("Please enter a whole number: "));
let num2 = Number(prompt("Please enter a whole number: "));

if (num1 > num2) {
    document.write(num1, " is the larger number!");
}else if (num1 < num2) {
    document.write(num2, " is the larger number!");
}else {
    document.write(num1, " and ", num2, " are equal.");
}
