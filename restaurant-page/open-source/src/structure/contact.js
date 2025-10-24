export default function displayContact() {
    const frag = document.createDocumentFragment();

    const container = document.createElement('div');
    container.className = 'contact';

    const body = document.createElement('div');
    body.className = 'contact-body';

    const header = document.createElement('h1');
    header.innerHTML = 'Are you <span class="highlight">interested</span> with us?'

    const description = document.createElement('p');
    description.className = 'mb';
    description.textContent = 'Fill up the contents below and we will make sure to read it.';

    const fullname = document.createElement('div');
    fullname.className = 'col-grid';

    const firstnameDiv = document.createElement('div');
    firstnameDiv.className = 'flex-input';

    const firstnameLabel = document.createElement('label');
    firstnameLabel.textContent = 'First name';
    firstnameLabel.htmlFor = 'first-name';

    const firstnameInput = document.createElement('input');
    firstnameInput.type = 'text';
    firstnameInput.id = 'first-name';

    const lastnameDiv = document.createElement('div');
    lastnameDiv.className = 'flex-input';

    const lastnameLabel = document.createElement('label');
    lastnameLabel.textContent = 'Last name';
    lastnameLabel.htmlFor = 'last-name';

    const lastnameInput = document.createElement('input');
    lastnameInput.type = 'text';
    lastnameInput.id = 'last-name';

    const contactInfo = document.createElement('div');
    contactInfo.className = 'col-grid';

    const emailDiv = document.createElement('div');
    emailDiv.className = 'flex-input';

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    emailLabel.htmlFor = 'email';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';

    const phoneDiv = document.createElement('div');
    phoneDiv.className = 'flex-input';

    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone';
    phoneLabel.htmlFor = 'phone';

    const phoneInput = document.createElement('input');
    phoneInput.type = 'number';
    phoneInput.id = 'phone';

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('flex-input', 'mb');

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'What do you want?';
    messageLabel.htmlFor = 'message';

    const messageTextarea = document.createElement('textarea');
    messageTextarea.rows = 10;

    const btnSubmit = document.createElement('button');
    btnSubmit.className = 'btn-submit';
    btnSubmit.textContent = 'Submit';

    [messageLabel, messageTextarea].forEach(l => messageDiv.appendChild(l));
    [phoneLabel, phoneInput].forEach(l => phoneDiv.appendChild(l));
    [emailLabel, emailInput].forEach(l => emailDiv.appendChild(l));
    [emailDiv, phoneDiv].forEach(l => contactInfo.appendChild(l));
    [lastnameLabel, lastnameInput].forEach(l => lastnameDiv.appendChild(l));
    [firstnameLabel, firstnameInput].forEach(l => firstnameDiv.appendChild(l));
    [firstnameDiv, lastnameDiv].forEach(l => fullname.appendChild(l));
    [header, description, fullname, contactInfo, messageDiv, btnSubmit].forEach(l => body.appendChild(l));
    container.appendChild(body);
    frag.appendChild(container);

    return frag;
}