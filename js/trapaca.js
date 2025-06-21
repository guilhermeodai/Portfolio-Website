document.addEventListener('DOMContentLoaded', () => {
	const codigoEspecial = [
		'ArrowUp', 'ArrowUp',
		'ArrowDown', 'ArrowDown',
		'ArrowLeft', 'ArrowRight',
		'ArrowLeft', 'ArrowRight',
		'b', 'a'
	];
	let codigoIndex = 0; // Rastreia o progresso do código

	// Cria um elemento de áudio que será tocado caso o código seja corretamente digitado
	const activationSound = new Audio(SOM_URL);
	activationSound.volume = 0.5; // Ajusta o volume (0.0 a 1.0)

	document.addEventListener('keydown', (event) => {
		// Converte letras para minúsculas
		const key = event.key.toLowerCase();
		const expectedKey = codigoEspecial[codigoIndex].toLowerCase();

		if (key === expectedKey) {
			codigoIndex++;
		} else {
			codigoIndex = 0; // Reinicia o progresso em caso de digitação incorreta
		}

		if (codigoIndex === codigoEspecial.length) {
			codigoIndex = 0; // Opcional: Reseta para permitir múltiplas ativações
			loadContent(); // Toca o hino, Cascão!
		}
	});

	function loadContent() {
		console.log("Código especial ativado, redirecionando...");

		// 1. Toca o som
		activationSound.play()
			.then(() => {
				setTimeout(() => {
					window.location.href = P8_URL; // Redireciona para a página de destino
				}, 2500); // Espera 2.5 segundos antes de redirecionar
			})
			.catch(error => {
				console.error("Erro ao tentar tocar arquivo de áudio:", error);
				// Se houver um erro ao tocar o som (ex: navegador bloqueando autoplay), ainda redireciona para a página de destino.
				window.location.href = P8_URL;
			});
	}
});