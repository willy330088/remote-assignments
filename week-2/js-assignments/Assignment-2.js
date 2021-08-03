//calculate function
function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}

// first way - JSON literal
const arg1 = {
    op: "+",
    n1: 10,
    n2: 20
}

// second way - constructor/class
class arg {
    constructor(op, n1, n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}

const arg2 = new arg("-", 30, 10);

// third way - keyword 'new'
const arg3 = new Object();
arg3.op = "+";
arg3.n1 = 70;
arg3.n2 = 50;



