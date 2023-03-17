/**
 * 1. Add event handler with the withdraw btn
 * 2. Get withdraw input field
 * 3. Clear the withdraw field
 * 4. Get the withdraw total amount
 * 5. calculate and Set the withdraw total amount
 * 6. Get the balance total
 * 7. Calculate new balance total and Update the balance total
 * 
 */
// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:
    const withdrawInputFieldElement = document.getElementById('withdraw-field');
    const newNithdrawFieldAmountString = withdrawInputFieldElement.value;
    const newWithdrawFieldAmount = parseFloat(newNithdrawFieldAmountString);

    // step-3:
    withdrawInputFieldElement.value = '';

    // step-4:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalString);

    // step-5:
    const newWithdrawTotalAmount = previousWithdrawTotalAmount + newWithdrawFieldAmount;


    // step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalAmountString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalAmountString);

    // step-7:
    if (previousBalanceTotalAmount < newWithdrawTotalAmount) {
        alert('Insufficient balance');
    } else {
        withdrawTotalElement.innerText = newWithdrawTotalAmount;
        const newBalanceTotal = previousBalanceTotalAmount - newWithdrawFieldAmount;
        balanceTotalElement.innerText = newBalanceTotal;
    }


})