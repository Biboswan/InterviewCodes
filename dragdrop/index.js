const draggables = document.querySelectorAll('.p-draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        console.log('drag start');
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        console.log('drag stop');
        draggable.classList.remove('dragging');
    });
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        console.log('drag over');
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggingEl = document.querySelector('.dragging');
        if (afterElement) {
            container.insertBefore(draggingEl,afterElement);
        } else {
            container.appendChild(draggingEl);
        }
    });
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.p-draggable:not(.dragging)')];
    return draggableElements.reduce((closest, draggableElement) => {
        const box = draggableElement.getBoundingClientRect();
        const offset = y - (box.top + box.height / 2);
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: draggableElement };
        } {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
}
