document.addEventListener("DOMContentLoaded", function () {
	const themeToggle = document.getElementById("theme-toggle");
	const currentTheme = localStorage.getItem("theme") || "light";
	
	document.documentElement.setAttribute("data-theme", currentTheme);
	if (currentTheme === "dark") {
		themeToggle.checked = true;
	}

	themeToggle.addEventListener("change", function () {
		const newTheme = themeToggle.checked ? "dark" : "light";
		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
	});
});