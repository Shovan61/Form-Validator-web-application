
const UIelements = {
    userName: document.querySelector('#username'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password'),
    cnfrmPass: document.querySelector('#password2'),
    errorUser: document.querySelector('.error-user'),
    errorEmail: document.querySelector('.error-email'),
    errorPass: document.querySelector('.error-password'),
    errorPaass2: document.querySelector('.error-second-password')
}

const errormessages = function() {
//change texts of all fields
UIelements.errorUser.textContent = 'Please Enter a username with atleast 3 charecters';
UIelements.errorEmail.textContent = 'Please Enter valid email address';
UIelements.errorPass.textContent = 'Please Enter password with atleast 6 charecters';
UIelements.errorPaass2.textContent = 'Password has not matched';


// grab the parent elements and append error class to them
const parent = UIelements.userName.parentElement;
parent.className = `form-control error`;
const parentem = UIelements.errorEmail.parentElement;
parentem.className = `form-control error`;
const parentpass = UIelements.errorPass.parentElement;
parentpass.className = `form-control error`;
const parentpass2 = UIelements.errorPaass2.parentElement;
parentpass2.className = `form-control error`;
// show the error messages in UI
UIelements.errorUser.style.visibility = 'visible';
UIelements.errorEmail.style.visibility = 'visible';
UIelements.errorPass.style.visibility = 'visible';
UIelements.errorPaass2.style.visibility = 'visible';


};




const nameValidation = function() {
    if(UIelements.userName.value !== '' && UIelements.userName.value.length >= 3) {
     const parent = UIelements.userName.parentElement;
     parent.className = `form-control success`;
     UIelements.errorUser.style.visibility = 'hidden';  
    
    } else {
        errormessages();
    }    
};



const emailValidation = function(event) {
if (UIelements.email !== '' && UIelements.email.value.includes('@') && UIelements.email.value.includes('.com')){
    const parent = UIelements.email.parentElement;
     parent.className = `form-control success`;
     UIelements.errorEmail.style.visibility = 'hidden';  
} else {
    errormessages();
}
};


const passwordValidation = function() {

if(UIelements.password.value !== '' && UIelements.password.value.length >= 6){
    const parent = UIelements.password.parentElement;
    parent.className = `form-control success`;
    UIelements.errorPass.style.visibility = 'hidden';  
} else {
    errormessages();
}


};



const confirmPassValidation = function() {
if(UIelements.cnfrmPass.value !== '' && UIelements.password.value === UIelements.cnfrmPass.value) {
    const parent = UIelements.cnfrmPass.parentElement;
    parent.className = `form-control success`;
    UIelements.errorPaass2.style.visibility = 'hidden'; 
} else {
    errormessages();
}

};


const validation = function(event) {
event.preventDefault();
nameValidation();
emailValidation();
passwordValidation();
confirmPassValidation();

};




// event Listners
document.querySelector('.btn').addEventListener('click', validation);