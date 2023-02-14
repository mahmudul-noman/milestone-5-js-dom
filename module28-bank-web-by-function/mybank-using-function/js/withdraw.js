document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get withdraw amount
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    // get previous withdraw amount
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    // calculate total withdraw
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set total withdraw amount in html element
    setTextElementById("withdraw-total", newWithdrawTotal);


    // :::::::::::::::::: NEW BALANCE TOTAL ::::::::::::::::::::::::::::::::;
    // get previous balance total
    const previousBalanceTotal = getElementValueById('balance-total');
    // calculate new balance total
    const newBalanceAmount = previousBalanceTotal - newWithdrawAmount;
    // set new balance total in html element
    setTextElementById('balance-total', newBalanceAmount);

})