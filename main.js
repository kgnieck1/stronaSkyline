document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.getElementById('menuToggle')
	const sidePanel = document.getElementById('sidePanel')
	const closePanel = document.getElementById('closePanel')
	let isOpen = false

	menuToggle.addEventListener('click', function () {
		if (isOpen) {
			sidePanel.classList.remove('active')
			menuToggle.classList.remove('fa-x')
			menuToggle.classList.add('fa-bars')
		} else {
			sidePanel.classList.add('active')
			menuToggle.classList.remove('fa-bars')
			menuToggle.classList.add('fa-x')
		}
		isOpen = !isOpen
	})

	closePanel.addEventListener('click', function () {
		sidePanel.classList.remove('active')
		menuToggle.classList.remove('fa-x')
		menuToggle.classList.add('fa-bars')
		isOpen = false
	})
})
window.addEventListener('scroll', function () {
	const nav = document.querySelector('nav')
	if (window.scrollY > 100) {
		nav.classList.add('scrolled')
	} else {
		nav.classList.remove('scrolled')
	}
})
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            const answer = item.querySelector(".faq-answer");
            const isOpen = item.classList.contains("open");

            if (isOpen) {
                answer.style.maxHeight = "0";
                answer.style.opacity = "0";
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.opacity = "1";
            }

            item.classList.toggle("open");
        });
    });
});

