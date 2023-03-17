// console.log('Deposit connected');
/**
 * 1. Add event listener to the deposit button
 * 2. Get deposit amount from the deposit input field
 * step-3: Clear the deposit input field
 * step-4: Get the  deposit total amount
 * step-5: Calculate new deposit total and set the value to the deposit total
 * step-6: Get current balance
 * step-7: Calculate and set new balance total
 */
// step-1:
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('btn deposit clicked');
    // step-2:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    // step-3:
    depositField.value = '';

    // step-4:
    const deposistTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = deposistTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-5:
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    deposistTotalElement.innerText = newDepositTotal;

    // step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-7:
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})