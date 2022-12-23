let inputs = document.querySelectorAll("#calculat");
let display = document.querySelector("#display");

inputs.forEach(input => {
    input.addEventListener('click', (event) => {
        display.value += event.currentTarget.value
        // console.log(display);
        // alert(event.currentTarget.value)
    })
})
let equal = document.querySelector(".equal");
equal.addEventListener('click', (event) => {
    if (display.value == '') {
        display.value = ''
    }
    else {
        display.value = eval(display.value)

    }
    // alert(
    //     'hi'
    // )
})
let clear = document.querySelector('.red');
clear.addEventListener('click', event => {
    display.value = ''
})
let slicer = document.querySelector('#slicer');
console.log(slicer);
slicer.addEventListener('click', event => {
    display.value = display.value.toString().slice(0, -1)
})
console.log(inputs);