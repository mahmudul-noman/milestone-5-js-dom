// step 1: get the deposit amount from deposite input field
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    // convert deposit amount string to number
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 2: get the curren depsot amount
        // for non-input, use innerText 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;

    // convert deposit amount string to number
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 3: summation total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 4: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // calculate total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText =currentBalanceTotal;

    // clear the deposit field
    depositField.value = '';
})