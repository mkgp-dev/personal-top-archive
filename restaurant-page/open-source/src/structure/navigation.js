export default function createNav(navigate) {
    const frag = document.createDocumentFragment();

    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'container');

    const logo = document.createElement('div');
    logo.className = 'brand';

    const page = document.createElement('ul');
    page.className = 'navbar-list';

    const home = document.createElement('li');
    home.textContent = 'Home';
    home.dataset.route = 'home';

    const menu = document.createElement('li');
    menu.textContent = 'Menu';
    menu.dataset.route = 'menu';

    const contact = document.createElement('li');
    contact.textContent = 'Contact';
    contact.dataset.route = 'contact';

    [home, menu, contact].forEach(l => page.appendChild(l));
    [logo, page].forEach(l => nav.appendChild(l));
    frag.appendChild(nav);

    nav.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li || !nav.contains(li)) return;
        const route = li.dataset.route;
        if (route) navigate(route);
    });

    return frag;
}