/**
 * step 1: add event handler with withdraw button
 * step 2: get the withdraw amount
 * step 3: clear the withdraw input field, after we get the value from this field
 * step 4: 
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
    

})