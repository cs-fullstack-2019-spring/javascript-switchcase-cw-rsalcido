// Problem 1:
//
// Put the start of your program in a main function.
// Ask the user to enter a number to print.
// Create a switch case that prints 1 if you enter 1, 2 if you enter 2, 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.
//

main();
function main() {


    var expr = parseInt(prompt("Enter the number to print"));

    switch (expr) {
        case 1 :
            console.log(1);
            break;
        case 2 :
            console.log(2);
            break;
        case 3 :
            console.log(3);
            break;
        case 4 :
            console.log(4);
            break;
        case 5 :
            console.log(5);
            break;

        // default:
        //     console.log("That is not a day of the week in English.");

    }

}