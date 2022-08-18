
function phoneUpdate(isIncrease) {
    const phonebtn = document.getElementById('phone-number-field');
    const phoneString = phonebtn.value;
    phoneNumber = parseInt(phoneString);
    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = phoneNumber + 1;
    }
    else {
        newPhoneNumber = phoneNumber - 1;
    }

    phonebtn.value = newPhoneNumber;
    return newPhoneNumber;
}
function phoneTotalNumber(newPhoneNumber) {
    const newUpdate = newPhoneNumber * 1219;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = newUpdate;
}

document.getElementById('btn-plus-phone').addEventListener('click', function () {
    const updatephone = phoneUpdate(true);
    phoneTotalNumber(updatephone);
    //calculate
    calculateSubTotal();



})
document.getElementById('btn-minus-phone').addEventListener('click', function () {
    const discreasePhone = phoneUpdate(false);
    phoneTotalNumber(discreasePhone);
    calculateSubTotal();

})