const email = document.getElementById('email');
const button = document.getElementById('button');
const error = document.getElementById('error');

const success = document.getElementById('page-2');
const formSubmit = document.getElementById('page-1');


button.addEventListener('click', function(e){

    e.preventDefault();
    if (!email.value){
        error.innerHTML = 'Please enter an email address to Subscribe!'
        email.style.backgroundColor = 'hsl(4deg 100% 67% / 0.2)';
        email.style.borderColor = 'hsl(4, 100%, 67%)';
        return false;
    }

    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        error.innerHTML = 'Valid Email Required';
        email.style.backgroundColor = 'hsl(4deg 100% 67% / 0.2)';
        email.style.borderColor = 'hsl(4, 100%, 67%)';
        return false;
    }
     
     if (email.value){
        error.innerHTML = '';
        email.style.backgroundColor = 'hsl(0, 0%, 100%)';
        email.style.borderColor = 'hsl(231, 7%, 60%)';
        formSubmit.style.display = 'none';
        success.style.display = 'block';
        return true;
    }

})

const dismiss = document.getElementById('dismiss');

dismiss.addEventListener('submit', function(e){
    e.preventDefault();
    success.style.display = 'none';
    formSubmit.style.display = 'block';
})

