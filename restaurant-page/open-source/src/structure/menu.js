import backgroundTransition from "./background";

export default function displayMenu() {
    backgroundTransition('#0c1923');

    const importIMG = require.context('../img', false, /\.(png|jpg)$/);

    const items = [
        { name: 'Cointreau', filename: 'cointreau.png', price: '$108', description: 'Sed bibendum, sapien a venenatis fermentum, mauris augue cursus turpis, vitae elementum massa orci sit amet massa.' },
        { name: 'Disaronno', filename: 'disaronno.png', price: '$102', description: 'Integer laoreet, sapien eget vehicula vehicula, odio lorem scelerisque magna, nec gravida libero nulla eget risus.' },
        { name: 'Martini Bianco', filename: 'martini_bianco.png', price: '$85', description: 'Duis efficitur, sapien quis bibendum auctor, lectus risus feugiat sapien, ac pulvinar orci est a arcu.' },
        { name: 'Martini Rose', filename: 'martini_rose.png', price: '$98', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { name: 'Sanderman Porto', filename: 'sanderman_porto.png', price: '$111', description: 'Vivamus commodo, odio sed fringilla pretium, sem nulla feugiat odio, in cursus elit dolor et ex.' },
        { name: 'Martini Rosato', filename: 'martini_rosato.png', price: '$101', description: 'Praesent placerat, magna in vehicula vestibulum, felis urna cursus lorem, sed vestibulum quam eros vel libero.' },
        //{ name: 'Martini Rosso', filename: 'martini_rosso.png', price: '$101', description: 'Praesent placerat, magna in vehicula vestibulum, felis urna cursus lorem, sed vestibulum quam eros vel libero.' },
    ];

    const createBox = (i) => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = importIMG(`./${i.filename}`);
        img.alt = i.name;

        const body = document.createElement('div');
        body.className = 'card-body';

        const header = document.createElement('div');
        header.className = 'card-header';

        const name = document.createElement('h3');
        name.textContent = i.name;

        const price = document.createElement('span');
        price.textContent = i.price;

        const description = document.createElement('p');
        description.textContent = i.description;

        [name, price].forEach(l => header.appendChild(l));
        [header, description].forEach(l => body.appendChild(l));
        [img, body].forEach(l => card.appendChild(l));

        return card;
    };

    const frag = document.createDocumentFragment();

    const container = document.createElement('div');
    container.classList.add('grid-menu', 'container-fluid');

    for (const i of items) {
        container.appendChild(createBox(i));
    }

    frag.appendChild(container);

    return frag;
}