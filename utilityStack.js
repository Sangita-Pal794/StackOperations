class Stack {
    constructor() {
        this.items = [];
        this.counter = 0;
    }
    /*add elements to stack*/
     push = (newItem) => {
        this.items.push(newItem);
        console.log(`At position ${this.counter} Stack: ${this.newItem} `);
        this.counter++;
    }


}
module.exports = new Stack();