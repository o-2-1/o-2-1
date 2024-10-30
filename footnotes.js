document.addEventListener('DOMContentLoaded', function() {
    const footnoteRefs = document.querySelectorAll('[data-footnote-ref]');

    footnoteRefs.forEach(ref => {
        ref.classList.add('tooltip');
        
        const footnoteId = ref.getAttribute('href').substring(1);
        const footnoteText = document.getElementById(footnoteId).querySelector('p').textContent;

        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'tooltiptext';
        tooltipElement.textContent = footnoteText;
        ref.appendChild(tooltipElement);
    });
});
