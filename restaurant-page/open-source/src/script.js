import './stylesheet.css';
import createNav from './structure/navigation.js';
import displayHome from './structure/home.js';
import displayMenu from './structure/menu.js';
import displayContact from './structure/contact.js';
import displayFooter from './structure/footer.js';

const load = () => {
    const route = {
        home: displayHome,
        menu: displayMenu,
        contact: displayContact
    }

    const navigate = (r) => {
        const make = route[r] ?? route.home;
        page.replaceChildren(make());
    };

    const app = document.getElementById('app');

    const background = document.createElement('div');
    background.id = 'bg-transition';

    const page = document.createElement('main');

    [background, createNav(navigate), page, displayFooter()].forEach(l => app.appendChild(l));

    navigate('home');
};

load();