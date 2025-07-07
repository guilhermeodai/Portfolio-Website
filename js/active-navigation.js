document.addEventListener("DOMContentLoaded", () => {
	const navLinks = document.querySelectorAll('#main-menu a[href^="/#"]');
	const stickyHeaders = Array.from(document.querySelectorAll('header.sticky'));

	const headerToLinkMap = new Map();
	stickyHeaders.forEach(header => {
		const section = header.closest('section');
		if (section && section.id) {
			const link = document.querySelector(`#main-menu a[href="/#${section.id}"]`);
			if (link) {
				headerToLinkMap.set(header, link);
			}
		}
	});

	const stickyOffset = 120; // 7rem

	function updateActiveLink() {
		let closestHeader = null;
		let minDistance = Infinity;

		stickyHeaders.forEach(header => {
			const rect = header.getBoundingClientRect();
			const distance = Math.abs(rect.top - stickyOffset);

			if (rect.top <= stickyOffset && distance < minDistance) {
				minDistance = distance;
				closestHeader = header;
			}
		});

		navLinks.forEach(link => link.classList.remove('active'));

		if (closestHeader) {
			const activeLink = headerToLinkMap.get(closestHeader);
			if (activeLink) {
				activeLink.classList.add('active');
			}
		}
	}

	window.addEventListener('scroll', updateActiveLink, { passive: true });
	window.addEventListener('resize', updateActiveLink);
	updateActiveLink(); // ativa o correto no load
});
