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
/**To display stack items */
    displayStack = () => {
        if (this.counter == 0) {
            console.log("The stack is empty!");
        }
        else {
            let i = this.counter;
            for (; i > 0; i--) {
                let nextItem = this.items[i-1];
                console.log(`At position ${i} Stack: ${nextItem} `);
            }
        }
    }
}
module.exports = new Stack();