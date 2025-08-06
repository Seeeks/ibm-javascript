//global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    //block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";

    blockVar = "I (var) have been reassigned from inside block";
    blockLet = "I (let) have also been reassigned from inside block";
    //blockConst = "I will not be reassigned because I'm const."//TypeError

    //Block Scope
    console.log(blockVar);
    console.log(blockLet);
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

blockVar = "reassigning block var"
blockLet = "Reassigning block let"
blockConst = "Reassigning block Const"//surprisingly, this does not throw an error
//Block Scope
console.log(blockVar);
console.log(blockLet);
console.log(blockConst);

function show() {
    var functionVar = "I'm a block scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const"
}

show();

//console.log(functionVar) //Throws ReferenceError
//console.log(functionLet); //Throws ReferenceError
//console.log(functionConst) //Throws referenceError