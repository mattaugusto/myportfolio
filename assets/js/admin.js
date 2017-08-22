var users

const tbody = document.querySelector('#tbody')
const formatRow = values => `<tr><td>${values.join('</td><td>')}</td></tr>`
const createRow = users => formatRow(Object.values(users))


$(document).ready(function()
{
	

	/* VERIFICANDO SUPORTE AO INDEXED DB */
	if (!('indexedDB' in window)) 
	{	
		console.log('Este navegador não suporta IndexedDB');
		return;
	}

	/* CRIANDO/ABRINDO O BANCO */
	var request = indexedDB.open('Usuarios', 1) 
	
	request.onerror = function (event){
    	alert("Database error: " + event.target.errorCode)
	}

	/* AÇÕES NA ABERTURA DO BANCO */
	request.onupgradeneeded = function (event)
	{	
		var db = event.target.result;
    	if(!db.objectStoreNames.contains('usuarios'))
    	{
      		alert("Não existe tabela usuários cadastrada!")
    	}
    	else
    	{
      		var db = event.target.result;
      		var transaction = db.transaction('usuarios', 'readonly')
      		var usuarios = transaction.objectStore('usuarios')
      		var request = usuarios.get("1");
      		alert("olá")
      		alert(request.result.name) 
    	}
	}


	let users2 = 
	[
		{
			"nome": 'João Marques', 
			"profissao": 'Desenvolvedor', 
			"email": 'joao.marques@gmail.com', 
			"senha": "1250522077", 
			"telefone": "",
			"cep": "58030-000",
			"rua": "Avenida Presidente Epitácio Pessoa",
			"uf": "PB",
			"cidade": "João Pessoa"
		},
		{
			"nome": 'Matheus Augusto', 
			"profissao": 'Fotógrafo', 
			"email": 'matheus.augusto@gmail.com', 
			"senha": "1316119517",
			"telefone": "",
			"cep": "58030-350",
			"rua": "Avenida Rio Grande do Norte",
			"uf": "PB",
			"cidade": "João Pessoa"
		},
		{
			"nome": 'Maria da Silva', 
			"profissao": 'Desenvolvedor', 
			"email": 'maria.silva@gmail.com', 
			"senha": "-1378838627",
			"telefone": "",
			"cep": "58015-020",
			"rua": "Avenida João da Mata",
			"uf": "PB",
			"cidade": "João Pessoa"
		},
		{
			"nome": 'Carlos Santana', 
			"profissao": 'Fotógrafo', 
			"email": 'carlos.santana@gmail.com', 
			"senha": "335342557",
			"telefone": "",
			"cep": "",
			"rua": "",
			"uf": "",
			"cidade": ""
		},
		{
			"nome": 'José Fernandes', 
			"profissao": 'Desenvolvedor', 
			"email": 'jose.fernandes@gmail.com', 
			"senha": "1221922717",
			"telefone": "",
			"cep": "",
			"rua": "",
			"uf": "",
			"cidade": ""
		},
		{
			"nome": 'Joana Coutinho', 
			"profissao": 'Fotógrafo', 
			"email": 'joana.coutinho@gmail.com', 
			"senha": "1315166205",
			"telefone": "",
			"cep": "",
			"rua": "",
			"uf": "",
			"cidade": ""
		}		
	]

	tbody.innerHTML = users2.map(createRow).join('')

	$("#usuarios").tablesorter( {sortList: [[0,0], [1,0]]} );
});
