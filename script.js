const toggleButtons = document.querySelectorAll(".title");

function toggleSiblingClass(target) {
    const sibling = target.nextElementSibling;
    sibling.classList.toggle("not-view");
};

toggleButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            toggleSiblingClass(event.currentTarget);
        });
    });
