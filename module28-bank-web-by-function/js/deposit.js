/**
 * myBank Project Step by Step Guide::::::::::::::::::::::::::::::::::::::::::::
 * step 1: add event listener to the deposit button
 * step 2: get deposit amount from the deposit input field
 * step 3: clear the deposit input field value
 * step 4: get the previous deposit total amount
 * step 5: calculate new deposit total and set the value to the deposit total
 * step 6: set the total balance to balance total summary section
 * step 7: calculate the new balance & set the value to the balance total
 */

    // step 1
document.getElementById('btn-deposit').addEventListener('click', function(){ //add event listener to the deposit button

    // step 2
    const depositField = document.getElementById('deposit-field'); // get deposit-field id
    const newDepositAmountString = depositField.value; //get input from deposit field
    const newDepositAmount = parseFloat(newDepositAmountString); // getting input convert: string to number
    
    // step 3
    depositField.value = ''; //clear the deposit input field value

    // step 4
    const depositTotalElement = document.getElementById('deposit-total'); //get the deposit element id
    const previousDepositTotalString = depositTotalElement.innerText; //set the amount to the deposit element section
    const previousDepositTotal = parseFloat(previousDepositTotalString); //set amount convert: string to number

    // step 5
    const newDepositTotal = previousDepositTotal + newDepositAmount; //calculate total deposit amount (previous amount + new amount)
    depositTotalElement.innerText = newDepositTotal; //set the total amount to deposit element section

    // step 6
    const balanceTotalElement = document.getElementById('balance-total'); //get balance element id
    const previousBalanceTotalString = balanceTotalElement.innerText; //set the amount to the balance element section
    const previousBalanceTotal = parseFloat(previousBalanceTotalString); //set amount convert: string to number

    // step 7
    const newBalanceTotal = previousBalanceTotal + newDepositAmount; //calculate total balance amount (previous balance amount + new deposit amount)
    balanceTotalElement.innerText = newBalanceTotal;


})