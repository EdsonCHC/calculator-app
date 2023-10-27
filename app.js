let buttons = document.querySelectorAll("button");
let screen = document.getElementById("screen");
let clearButton = document.getElementById("clear");
let calculation = [];
let fixedCalculation; 

buttons.forEach(button => button.addEventListener("click", (e)=> {
        value = button.value;
        screen.textContent += value;
        calculation.push(value);
        fixedCalculation = calculation.join("");
})
);

clearButton.addEventListener("click", (e) => {
    screen.textContent = "";
    calculation = [];
});

document.getElementById("equals").addEventListener("click", (e) =>{
    screen.textContent = eval(fixedCalculation);
})
