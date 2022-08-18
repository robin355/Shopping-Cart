//Total Amount
function getelementValueById(elementId) {
    const totalAmount = document.getElementById(elementId);
    const phoneTotalString = totalAmount.innerText;
    const phoneTotalAmount = parseInt(phoneTotalString);
    return phoneTotalAmount;

}
function setelementById(element, value) {
    const subElement = document.getElementById(element);
    subElement.innerText = value;
}

//total Subadding
function calculateSubTotal() {
    const currentPhoneTotal = getelementValueById('phone-total');
    const currentCaseTotal = getelementValueById('case-total');
    const currenntSubTotal = currentPhoneTotal + currentCaseTotal;
    setelementById('sub-total', currenntSubTotal);
    //calculate tax
    const TxtAmountString = (currenntSubTotal * 0.1).toFixed(2);
    const TxtAmount = parseFloat(TxtAmountString)
    setelementById('txt-amount', TxtAmount);
    //final
    const finalAmound = currenntSubTotal + TxtAmount;
    setelementById('final-total', finalAmound);

}