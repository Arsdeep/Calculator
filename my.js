const btnNum = document.querySelectorAll("#num")
const btnOp = document.querySelectorAll(".operator")
const btnCalc = document.getElementById("calculate")
const btnClr = document.getElementById("clear")
const btnBack = document.getElementById("back")
const display = document.getElementById("display")
const body = document.getElementsByTagName("body")


// Reset Input Box and Init Variable \\
display.value = ""
let calc = ""
display.focus()


// Number Buttons Initialization \\
for(let i = 0 ; i<btnNum.length ; i++){
    btnNum[i].addEventListener('click', function() {
        if(display.value == "Error")
            display.value = ""
        display.value += this.textContent
        calc += this.textContent
        display.focus()
    });
}


// Clear Function \\
function Clear(){
    if(display.value == "Error")
        display.value = ""
    display.value = ""
    display.focus()
}


// Clear Button \\
btnClr.addEventListener('click',Clear)


// Backspace Function \\
function Backspace(){
    if(display.value == "Error")
        display.value = ""
    if(display.value != ""){
        let tmp = ""
        for(let i = 0 ; i<display.value.length-1 ; i++)
            tmp += display.value[i]
        display.value = tmp
    }
    display.focus()
}


// Backspace Button \\
btnBack.addEventListener('click',Backspace)


// Calculate Function \\
function Calculate(){
    if(display.value == "")
        return
    if(display.value == "Error")
        display.value = "--"
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "Error"
    }
    display.focus()
}


// Calculate Button \\
btnCalc.addEventListener('click',Calculate)


// KeyBoard Controls \\
display.addEventListener('keydown', function(event) {
    if(event.key >= 0 && event.key <= 9 ||
        event.key == '+'||
        event.key == '-'||
        event.key == '/'||
        event.key == '*'||
        event.key == '%'||
        event.key == '('||
        event.key == ')'||
        event.key == '.'
        ){
        display.value += event.key
    }
    if(event.key == "Enter"){
        Calculate()
    }
    if(event.key == "Backspace"){
        Backspace()
    }
    if(event.key == "c" || event.key == "C"){
        Clear()
    }
    console.log(event.key)
    display.focus()
});