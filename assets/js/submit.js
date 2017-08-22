const nome = document.querySelector('#nome')
const sugestoes = document.querySelector('#sugestoes')

// BOTÕES
const enviar = document.querySelector('#enviar')

// AÇÃO BOTÃO ENVIAR
enviar.onclick = () => {
	let sugestao =
	{
		"nome": nome.value,
		"sugestoes": sugestoes.value
	}

	console.log(sugestao)
}