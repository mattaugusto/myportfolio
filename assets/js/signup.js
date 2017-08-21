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

// API VIACEP
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

// CÁLCULO DO HASH DA SENHA
/* ALGORITMO DA INTERNET */
String.prototype.hashCode = function() 
{
	var hash = 0, i, chr;
 	if (this.length === 0) return hash;
 	for (i = 0; i < this.length; i++) 
 	{
    	chr   = this.charCodeAt(i);
    	hash  = ((hash << 5) - hash) + chr;
    	hash |= 0; 
  	}
  	return hash;
};

// CAMELCASE EM NOME, CIDADE E RUA
String.prototype.toCamelCase = function() 
{
  aux = this.toLowerCase();
	let result = ''
	for(let i = 0; i < (aux.length); i++)
	{
		if (i === 0) result += aux[i].toUpperCase();
		else if((aux[i-1] == "\n") || (aux[i-1] == " ")) result += aux[i].toUpperCase();
		else result += aux[i].toLowerCase();
	}
	return result;
}

// AÇÕES DOS BOTÕES
cadastrar.onclick = () => {	
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
  	//pass.style.display = 'none'
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
	if(flagerror === 0) // SE NÃO OCORREU ERRO ALGUM
	{
    let nomeCamel = (nome.value).toCamelCase()
  	let senhaHash = (senha.value).hashCode().toString()
  	let ufUpper = (uf.value).toUpperCase()
  	let ruaCamel = (rua.value).toCamelCase()
  	let cidadeCamel = (cidade.value).toCamelCase()

  	let usuario = 
	  {
		 "nome": nomeCamel,
		 "profissao": profissao.value,
		 "email": email.value,
		 "senha": senhaHash,
		 "telefone": telefone.value,
		 "cep": cep.value,
		 "rua": ruaCamel,
		 "uf": ufUpper,
		 "cidade": cidadeCamel
	  }
	  console.log(usuario)

	  // INDEXED DATABASE

	  /* VERIFICANDO SUPORTE AO INDEXED DB */
	  if (!('indexedDB' in window)) 
	  {
		 console.log('Este navegador não suporta IndexedDB');
		 return;
	  }
    /* CRIANDO/ABRINDO O BANCO */
	  var request = indexedDB.open('Usuarios', 1) 
		
    /* AÇÃO ATIVADA QUANDO O BANCO NÃO EXISTE */
    request.onupgradeneeded = function (event)
    {
      var db = event.target.result;
      if(!db.objectStoreNames.contains('usuarios'))
      {
        var objStore = db.createObjectStore('usuarios', {autoIncrement:true});
        objStore.add(usuario);
      }
    }

    /* AÇÃO ATIVADA QUANDO O BANCO JÁ EXISTE */
    request.onsuccess = function (event)
    {
      var db = event.target.result;
      var transaction = db.transaction('usuarios', 'readwrite')
      var usuarios = transaction.objectStore('usuarios')
      usuarios.add(usuario)
    }
  }
  else
  {
  	console.log("Erro na inserção, não é possível persistir!")
  }	
}
	
limpar.onclick = () => {	
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


