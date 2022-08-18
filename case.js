function updateCase(increse) {
    const inputCasing = document.getElementById('case-number-field');
    const priviousString = inputCasing.value;
    const priviousValue = parseInt(priviousString);
    let newValue;
    if (increse === true) {
        newValue = priviousValue + 1;
    }
    else {
        newValue = priviousValue - 1;
    }
    inputCasing.value = newValue;
    return newValue;

}
function updatecaseTotalPrice(totalCase) {
    const totalCaseAmount = totalCase * 59;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = totalCaseAmount;
}

document.getElementById('btn-case-pluse').addEventListener('click', function () {
    const totalCase = updateCase(true);
    updatecaseTotalPrice(totalCase);
    calculateSubTotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const totalCase = updateCase(false);
    updatecaseTotalPrice(totalCase);
    calculateSubTotal();


})
