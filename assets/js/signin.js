// LOGIN
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const incorretos = document.querySelector('#incorretos')
const entrar = document.querySelector('#entrar')

// AÇÃO BOTÃO ENTRAR
entrar.onclick = () => {
	let emailverify = email.value
  	let senhaverify = senha.value

  	/* TRATAMENTO DA STRING EMAIL */
	if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailverify))
  	{
	    email.style.border = '1px solid #f00'
	    email.style.backgroundColor = 'rgba(255, 0, 0, .1)'
	    senha.style.border = '1px solid #f00'
	    senha.style.backgroundColor = 'rgba(255, 0, 0, .1)'
	    incorretos.style.display = 'block'
	    incorretos.style.outline = 'none'

  	}

  	/* TRATAMENTO DA STRING SENHA */
  	if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(senhaverify))
  	{
	    email.style.border = '1px solid #f00'
	    email.style.backgroundColor = 'rgba(255, 0, 0, .1)'
	    senha.style.border = '1px solid #f00'
	    senha.style.backgroundColor = 'rgba(255, 0, 0, .1)'
	    incorretos.style.display = 'block'
	    incorretos.style.outline = 'none'
  	}

  	/* ADMIN */
  	if((emailverify == 'admin@gmail.com') && (senhaverify == 'admin')) 
  		window.location.assign('admin.html');
}