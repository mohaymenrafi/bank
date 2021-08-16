const submitBtn = document.querySelector('#submit-btn');
const userEmail = document.querySelector('#user-email')
const userPass = document.querySelector('#user-password')


function handleSubmitClick() {
    if(userEmail.value === 'mohaymen.rafi@gmail.com' && userPass.value === 'secret007'){
        window.location.href = 'dashboard.html'
    } else{
        alert(`Login info is incorrect!`);
    }
}

submitBtn.addEventListener('click', handleSubmitClick);
window.addEventListener('keyup', e => {
    if(e.key === 'Enter'){
        handleSubmitClick(); 
    }
});