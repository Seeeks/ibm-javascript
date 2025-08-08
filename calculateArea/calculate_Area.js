let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let v1;
let v2;
let v3;

function calculateGroceryTotal() {
    v1 = parseFloat(document.getElementById('grocery1').value);
    v2 = parseFloat(document.getElementById('grocery2').value);
    v3 = parseFloat(document.getElementById('grocery3').value);

    let sum = v1 + v2 + v3;
    document.getElementById('resultG').innerText = `The total amount is :$ ${sum}`;
}