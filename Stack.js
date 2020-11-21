let util = require("./UtilityStack.js");
let readlineSync = require('readline-sync');
/*To take user choice*/
userChoice = function () {
    let flag = true;
    while (flag == true) {
        let option = readlineSync.question("\nEner your option:\n1.push\n2.pop\n3.displayStack\n4.exit\n");
        switch (option) {
            case '1': let newItem = readlineSync.question("Enter push Integer:");
                util.pushItem(newItem);
                break;
            case '2': util.popItem();
                break;
            case '3': util.displayStack();
                break;    
            case '4': flag = false;
                break;
            default: console.log("Invalid choice!!Please enter valid choice.");
        }
    }
}
userChoice();