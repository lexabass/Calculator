function elem(selector) {
    return document.querySelector(selector);
}

function elems(selector) {
    return document.querySelectorAll(selector);
}

let input = elem("input"),
    last_number,
    operation;

elems(".number").forEach(button => {
    button.addEventListener("click", function() {
        let number = this.innerText;
        input.value = input.value + number;
    })
})

elem("#add").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "add";
})

elem("#sub").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "sub";
})

elem("#nul").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "nul";
})

elem("#div").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "div";
})

elem("#sqr").addEventListener("click", function() {
    last_number = input.value;
    input.value = last_number * last_number;
})

elem("#deg").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "deg";
})

elem("#sqrt").addEventListener("click", function() {
    last_number = input.value;
    result = Math.sqrt(last_number);
    input.value = result;
})

elem("#qtr").addEventListener("click", function() {
    last_number = input.value;
    result = 1 / parseInt(last_number);
    input.value = result;
})

elem("#C").addEventListener("click", function() {
    input.value = "";
    last_number = null;
    operation = null;
})

elem("#dot").addEventListener("click", function() {
    input.value = input.value + ".";
})

elem("#plus_minus").addEventListener("click", function() {
    input.value = parseFloat(input.value) * -1;
})

elem("#backspace").addEventListener("click", function() {
    var value = input.value;
    input.value = value.substr(0, value.length - 1);
})

elem("#eql").addEventListener("click", function() {
    if (last_number && operation) {
        let result;
    switch (operation) {
        case "add": {
            result = parseFloat(last_number) + parseFloat(input.value);
        } break;
        case "sub": {
            result = parseFloat(last_number) - parseFloat(input.value);
        } break;
        case "nul": {
            result = parseFloat(last_number) * parseFloat(input.value);
        } break;
        case "div": {
            result = parseFloat(last_number) / parseFloat(input.value);
        } break;
        case "deg": {
            result = parseFloat(last_number) ** parseFloat(input.value);
        } break;
    }
    input.value = result;
    last_number = null;
    operation = null;
    }
    
})

