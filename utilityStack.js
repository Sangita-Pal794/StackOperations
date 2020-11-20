class Stack {
    constructor() {
        this.items = [];
        this.counter = 0;
    }
    /*add elements to stack*/
     pushItem = (newItem) => {
        this.items.push(newItem);
        console.log(`At position ${this.counter} Stack: ${newItem}`);
        this.counter++;
    }

    popItem = () => {
        if (this.counter == 0) {
            console.log(`The stack is empty`);
        }
        else {
            let delItem = this.items.pop();
            console.log(`Deleted item is: ${delItem}`);
            this.counter-- ;
            return this.counter;
        }
    }
}
module.exports = new Stack();