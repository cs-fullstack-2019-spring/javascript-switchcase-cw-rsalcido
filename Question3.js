// Problem 3:
//
// Put the start of your program in a main function.
// Create an attendance array.
// Ask the user if a teacher, student, or parent is checking in.
// Use a switch statement to add the teacher/student/parent to the attendance array, then log the option they chose.
// Repeat this five times.




main();
function main() {

    for (var i=0; i<=5; i++) {
    console.log(i);

        var expr = prompt("Is a teacher, student, or parent checking in?");
        attendace = [];
        switch (expr) {
            case "teacher":
                attendace.push["teacher"];
                break;
            case "student":
                attendace.push["student"];
                break;
            case "parent":
                attendace.push["parent"];
                break;
        }

    }

    console.log(attendace)

}

     // for (var i="teacher",i <= 6, i++)
     // console.log[];
     //
     //





