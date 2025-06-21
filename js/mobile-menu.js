const hamburger = document.getElementById("hamburger-menu");
const mainMenu = document.getElementById("main-menu");

// Toggle do menu mobile ao clicar no hamburger
hamburger.addEventListener("click", () => {
	const isOpen = mainMenu.classList.toggle("open");
	hamburger.classList.toggle("open");
	hamburger.setAttribute("aria-expanded", isOpen);
	document.body.classList.toggle("no-scroll", isOpen);
});

// Fecha o menu mobile automaticamente se o viewport for ≥ 1024px
const mediaQuery = window.matchMedia("(min-width: 1024px)");

function handleViewportChange(e) {
	if (e.matches) {
		mainMenu.classList.remove("open");
		hamburger.classList.remove("open");
		hamburger.setAttribute("aria-expanded", false);
	}
}

// Compatibilidade ampla: addEventListener se disponível, senão addListener
if (mediaQuery.addEventListener) {
	mediaQuery.addEventListener("change", handleViewportChange);
} else {
	mediaQuery.addListener(handleViewportChange); // Safari < 14.1
}

// Checar imediatamente no carregamento inicial
if (mediaQuery.matches) {
	mainMenu.classList.remove("open");
	hamburger.setAttribute("aria-expanded", false);
}