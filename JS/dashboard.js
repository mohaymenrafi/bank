const deposit = document.querySelector('#deposit-amount span');
const withdraw = document.querySelector('#withdraw-amount span');
const totalBalance = document.querySelector('#total-balance span');
const depositInput = document.querySelector('#deposit');
const withdrawInput = document.querySelector('#withdraw');
const depositBtn = document.querySelector('#deposit-btn');
const withdrawBtn = document.querySelector('#withdraw-btn');



let depositAmount= parseInt(deposit.textContent);
let withdrawAmount = parseInt(withdraw.textContent);
let totalStarter = parseInt(totalBalance.textContent);

// Deposit Handle Function & update total
function handleDepositBtn() {
    if(depositInput.value>0){
        // depositAmount+=parseFloat(depositInput.value);
        deposit.textContent = depositAmount + parseFloat(depositInput.value);
        totalStarter+= parseFloat(depositInput.value)
        totalBalance.textContent = totalStarter;
        depositInput.value='';
    } else{
        depositInput.value='';
    }
}
// Withdraw Handle Function & update total
function handleWithdrawBtn() {
    if(withdrawInput.value>0){
        withdrawAmount+=parseFloat(withdrawInput.value);
        withdraw.textContent = withdrawAmount;
        totalStarter-= parseFloat(withdrawInput.value)
        totalBalance.textContent = totalStarter;
        withdrawInput.value='';
    } else{
        withdrawInput.value='';
    }
}
depositBtn.addEventListener('click', handleDepositBtn);
withdrawBtn.addEventListener('click', handleWithdrawBtn);

// For keyboard Enter press
window.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        handleDepositBtn();
        handleWithdrawBtn();
    }
});

