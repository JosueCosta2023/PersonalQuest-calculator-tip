const billInput = document.querySelector(".bill-input")
const peopleInput = document.querySelector(".people-input")
const tipPerPerson = document.getElementById("tip-amount")
const totalPerPerson = document.getElementById("total-amount")
const totalPerGroup = document.getElementById("total-amount-geral")
const tips = document.querySelectorAll(".tips")
const tipCustom = document.querySelector(".tip-custom")
const resetBtn = document.querySelector(".btn-reset")
const error = document.getElementById("alert-zero")

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function(val){
    
    val.addEventListener("click", handleClick)
    
})

tipCustom.addEventListener("input", tipInputFun);
resetBtn.addEventListener("click", reset)


billInput.value = '0.0';
peopleInput.value = '1';
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2)
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2)
totalPerGroup.innerHTML = "$" + (0.0).toFixed(2)

let billValue = 0.0
let peopleValue = 1
let tipValue = 0.00


function billInputFun(){
    billValue = parseFloat(billInput.value)
    calculatorTip()
}

function peopleInputFun(){
    peopleValue = parseFloat(peopleInput.value);
   
    if(peopleValue < 1){
        error.style.opacity = 1;
        error.style.color = "#E17457";
        peopleInput.style.border = "3px solid #E17457";
    } else {
        error.style.opacity = 0;
        peopleInput.style.border = "none";
        calculatorTip()
    }

}

function tipInputFun(){
    tipValue = parseFloat(tipCustom.value / 100)
    tips.forEach(function(val){
        val.classList.remove("active")
    });
    calculatorTip()
}

function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove("active")
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active")
            tipValue = parseFloat(val.innerHTML) / 100
        }
    })
    calculatorTip()
}

function calculatorTip(){
    if(peopleValue >= 1){
        let tipAmount = (billValue * tipValue) / peopleValue
        let tipAmountTotal = billValue * tipValue 
        let total = (billValue + tipAmountTotal) / peopleValue
        let totalPerGroupValue = tipAmountTotal + billValue
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2)
        totalPerPerson.innerHTML = "$" + total.toFixed(2)
        totalPerGroup.innerHTML = "$" + totalPerGroupValue.toFixed(2)
    } 
}

function reset(){
    billInput.value = '0.0';
    billInputFun()
    peopleInput.value = '1';
    peopleInputFun()
    tipCustom.value = '';
    tips.forEach(function(val){
        val.classList.remove("active")
    });
}