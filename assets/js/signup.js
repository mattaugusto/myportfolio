// CONTA
const nome = document.querySelector('#nome')
const profissao = document.querySelector('#profissao')
const email = document.querySelector('#email')
const emailError = document.querySelector('#emailError')
const senha = document.querySelector('#senha')
const senhaError = document.querySelector('#senhaError')
const confirmarsenha = document.querySelector('#confirmarsenha')
const senharepeatError = document.querySelector('#senharepeatError')
// INFORMAÇÕES ADICIONAIS
const telefone = document.querySelector('#telefone')
const cepField = document.querySelector('#cep')
const cepError = document.querySelector('#cepError')
const rua = document.querySelector('#rua')
const uf = document.querySelector('#uf')
const cidade = document.querySelector('#cidade')
// BOTÕES
const cadastrar = document.querySelector('#cadastrar')
const limpar = document.querySelector('#limpar')

cepField.addEventListener('blur', () => {
  let cep = cepField.value
  let url = `https://viacep.com.br/ws/${cep}/json/` 
    fetch(url)
      .then(res => res.json())
      .then(cepInfo => {
      	cepField.style.border = '1px solid green'
        uf.value = cepInfo.uf
        cidade.value  = cepInfo.localidade
        rua.value = cepInfo.logradouro
      })
})

cadastrar.onclick = function()
{	
	let flagerror = 0
	let emailverify = email.value
  	let senhaverify = senha.value
  	let senharepeatverify = confirmarsenha.value

  	if(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailverify))
  	{
   		email.style.border = '1px solid green'
    	email.style.backgroundColor = 'rgba(134, 244, 66, .1)'
    	emailError.style.display = 'none'

  	}
  	else
  	{
  		flagerror = 1
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
  		flagerror = 1
    	senha.style.border = '1px solid #f00'
    	senha.style.backgroundColor = 'rgba(255, 0, 0, .1)'
    	senhaError.style.display = 'block'
    	senhaError.style.outline = 'none'
  	}
  	if((senhaverify === senharepeatverify) && (senhaverify !=''))
  	{	
    	confirmarsenha.style.border = '1px solid green'
    	confirmarsenha.style.backgroundColor = 'rgba(134, 244, 66, .1)'
    	senharepeatError.style.display = 'none'
  	}
  	else 
  	{
  		flagerror = 1
    	confirmarsenha.style.border = '1px solid #f00'
    	confirmarsenha.style.backgroundColor = 'rgba(255, 0, 0, .1)'
    	senharepeatError.style.display = 'block'
    	senharepeatError.style.outline = 'none'
  	}

  	if(flagerror === 0)
  	{
  		let usuario = 
		{
			"nome": nome.value,
			"profissao": profissao.value,
			"email": email.value,
			"senha": senha.value,
			"telefone": telefone.value,
			"cep": cep.value,
			"rua": rua.value,
			"uf": uf.value,
			"cidade": cidade.value
		}
		console.log(usuario)
  	}
  	else
  	{
  		console.log("Erro na inserção, não é possível persistir!")
  	}	
}
	
limpar.onclick = function(idnome)
{	
	nome.value='';
	profissao.value = '';
	email.value = '';
	senha.value = '';
	confirmarsenha.value = '';
	telefone.value = '';
	cepField.value = '';
	rua.value = '';
	uf.value = '';
	cidade.value = '';
}
