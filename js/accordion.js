document.addEventListener("DOMContentLoaded", () => {
	const headers = document.querySelectorAll(".accordion-button");

	headers.forEach(header => {
		const content = header.nextElementSibling;

		const resizeObserver = new ResizeObserver(() => {
			if (header.classList.contains("open")) {
				content.style.maxHeight = content.scrollHeight + "px";
			}
		});

		resizeObserver.observe(content);

		header.addEventListener("click", () => {
			const isOpen = header.classList.toggle("open");

			if (isOpen) {
				content.style.maxHeight = content.scrollHeight + "px";
				content.classList.add("open");

				// Acessibilidade: torna os links focáveis
				content.removeAttribute("inert");

				// Esconde o botão imediatamente (ou após animação, se preferir)
				header.style.display = "none";

			} else {
				content.classList.remove("open");
				content.style.maxHeight = null;

				// Acessibilidade: impede foco nos links ocultos
				content.setAttribute("inert", "");

				// Opcional: mostrar novamente se você permitir fechar
				header.style.display = "";
			}
		});
	});
});