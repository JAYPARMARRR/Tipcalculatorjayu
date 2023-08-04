const billinput = document.querySelector('#bill-input')
const peopleInput = document.getElementById("people-input")
const tipPerPerson = document.getElementById("tipPerPerson")
const perPerAmount = document.getElementById("perPerAmount")

const customTipInput = document.querySelector('#customTipInput');

let tipPer = 0;

function addTipAmount(value) {
    tipPer = value
}

customTipInput.addEventListener("input", function () {
    tipPer = customTipInput.value;
})

peopleInput.addEventListener("input", function () {
    const totalTipAmount = billinput.value / 100 * tipPer
    const perPersonTip = totalTipAmount / peopleInput.value;

    tipPerPerson.value = perPersonTip
    console.log("totalTipAmount >>", totalTipAmount);
    perPerAmount.value = (Number(billinput.value) + totalTipAmount) / peopleInput.value
})

function reset() {
    billinput.value = " "
    peopleInput.value = " "
    customTipInput.value = " "
    tipPerPerson.value= " "
    perPerAmount.value = " "
}





















// function jj(){
//     let element = document.getElementById("topPerPerson1");
//     element.innerHTML = numberOfp;

// }
