export default function displayFooter() {
    const frag = document.createDocumentFragment();

    const footer = document.createElement('footer');
    footer.className = 'fixed-footer';
    footer.textContent = 'Best Viewed in Desktop';

    frag.appendChild(footer);

    return frag;
}