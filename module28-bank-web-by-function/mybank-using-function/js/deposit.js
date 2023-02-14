document.getElementById("btn-deposit").addEventListener("click", function () {
  // deposit: get deposit value from input field
  const newDepositAmount = getInputFieldValueById("deposit-field");
  // deposit: get previous deposit value
  const previousDepositTotal = getElementValueById("deposit-total");
  // calculate new deposit
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // set deposit total value in html element
  setTextElementById("deposit-total", newDepositTotal);

  // balance calculation after deposit
  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementById("balance-total", newBalanceTotal);
});
