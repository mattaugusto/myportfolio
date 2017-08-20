const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const entrar = document.querySelector('#entrar')

entrar.onclick = function()
{
	let emailverify = email.value
  	let senhaverify = senha.value
	if(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailverify))
  	{
	    email.style.border = '1px solid green'
	    email.style.backgroundColor = 'rgba(134, 244, 66, .1)'
	    emailError.style.display = 'none'
  	}
  	else
  	{
	    email.style.border = '1px solid #f00'
	    email.style.backgroundColor = 'rgba(255, 0, 0, .1)'
	    emailError.style.display = 'block'
	    emailError.style.outline = 'none'
  	}
  	if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(senhaverify))
  	{
	    senha.style.border = '1px solid green'
	    senha.style.backgroundColor = 'rgba(134, 244, 66, .1)'
	    pass.style.display = 'none'
  	}
  	else
  	{
	    senha.style.border = '1px solid #f00'
	    senha.style.backgroundColor = 'rgba(255, 0, 0, .1)'
	    senhaError.style.display = 'block'
	    senhaError.style.outline = 'none'
  	}
}