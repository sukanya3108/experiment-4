document.getElementById('loginform').addEventListener('submit',function(e){
e.preventDefault(); //prevent form submission
//get input values
const username = document.getElementById('Username').value.trim();
const password = document.getElementById('password').value.trim();
//error display elements 
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
//reset errors
usernameError.textContent='';
passwordError.textContent='';
//validation flags
let isValid = true;
2 //Username validation 
if(username === '')
{
 usernameError.textContent='Username is required.';
 isValid = false;
}
else if(username.length<3)
{
 usernameError.textContent='Username must be at least 3 characters.';
 isValid = false;
} 
else if(username.length>15)
{
 usernameError.textContent='Username cannot exceed 15 characters.';
 isValid = false;
}
else if(!/^[a-zA-Z0-9]+$/.test(username))
{
 usernameError.textContent='Username must be alphanumeric only.';
 isValid = false;
}
//Password Validation
3 if (password === '')
{
 passwordError.textContent = 'Pasword is required.';
 isValid = false;
}
else if (password.length < 6)
{
 passwordError.textContent = 'Password must be at least 6 characters.';
 isValid = false;
}
else if (password.length > 20)
{
 passwordError.textContent = 'Password cannot exceed 20 characters.';
 isValid = false;
}
else if (!/[A-Z]/.test(password))
{
 passwordError.textContent = 'Password must contain at least one uppercase letter.';
 isValid = false;
}
else if (!/[a-z]/.test(password))
{
 passwordError.textContent = 'Password must contain at least one lowercase letter.';
 isValid = false;
4 }
else if (!/[0-9]/.test(password))
{
 passwordError.textContent = 'Password must contain at least one digit.';
 isValid = false;
}
else if (/\s/.test(password))
{
 passwordError.textContent = 'Password cannot contain spaces.';
 isValid = false;
}
//final check 
if(isValid)
{
 alert('Login successful');
}
});