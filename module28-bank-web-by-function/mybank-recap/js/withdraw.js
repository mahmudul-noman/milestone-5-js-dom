/**
 * myBank Project (withdraw) Step by Step Guide::::::::::::::::::::::::::::::::::::::::::::
 * step 1: add event handler with withdraw button
 * step 2: get the withdraw amount
 * step 3: clear the withdraw input field, after we get the value from this field
 * step 4: get previous withdraw total
 * step 5: set the total balance amount
 * step 6: get previous balance
 * step 7: calculate new total balance
 */
    //step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){ //get withdraw button

    // step 2
    const withdrawField = document.getElementById('withdraw-field'); //get withdraw field id
    const newWithdrawAmountString = withdrawField.value; //get input value from withdraw field
    const newWithdrawAmount = parseFloat(newWithdrawAmountString); // convert input value: string to number

    // step 3
    withdrawField.value = ''; //clear the withdraw input field

    // step 4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step 5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})