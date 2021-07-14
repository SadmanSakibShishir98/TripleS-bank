const loginBtn=document.getElementById('login');
loginBtn.addEventListener('click', function(event){
    const loginArea=document.getElementById('login-area');
    loginArea.style.display='none';
    const transactionArea=document.getElementById('transaction-area');
    transactionArea.style.display='block';
})

const depositBtn= document.getElementById('depositbtn');
depositBtn.addEventListener('click',function(){
    const depositAmount= document.getElementById('depositAmount').value;
    const depositNumber= parseFloat(depositAmount);

    const currentDeposit=document.getElementById('currentDeposit').innerText;
    const currentDepositNumber=parseFloat(currentDeposit);
    const totalDeposit=depositNumber +currentDepositNumber;
    const updateDeposit=document.getElementById('currentDeposit');
    updateDeposit.innerText=totalDeposit;
    const totalBalance= parseFloat(document.getElementById('totalBalance').innerText);
    const updatedBalance=totalBalance+depositNumber;
    document.getElementById('totalBalance').innerText=updatedBalance;
    document.getElementById('depositAmount').value="";

    
})

const withdrawBtn=document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount=parseFloat(document.getElementById('withdrawAmount').value);
    const currentWithdraw=parseFloat(document.getElementById('currentWithdraw').innerText);
    const totalWithdraw= withdrawAmount+currentWithdraw;
    document.getElementById('currentWithdraw').innerText=totalWithdraw;
    const totalBalance=parseFloat(document.getElementById('totalBalance').innerText);
    const updatedBalance=totalBalance-withdrawAmount;
    document.getElementById('totalBalance').innerText=updatedBalance;
    document.getElementById('withdrawAmount').value="";

})