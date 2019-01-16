// Problem 2:
// //
// // Put the start of your program in a main function.
// // Ask the user to enter a 3 digit binary number.
// // Create a switch case that prints 1 if you enter 1, 2 if you enter 10, 3 if you enter 11, 4 if you enter 100, and 5 if you enter 101.
main();
function main() {

var expr=(prompt("Please enter a binary number"));

switch (expr) {
    case 1 :
        console.log(1);
        break;
    case 2 :
        console.log(10);
        break;
    case 3 :
        console.log(11);
        break;
    case 4 :
        console.log(100);
        break;
    case 5 :
        console.log(101);
        break;

    default:
        console.log(expr);

}

}