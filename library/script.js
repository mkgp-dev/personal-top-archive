// variables
const content = {
  tblBody: document.getElementById('table-body'),
  btnSubmit: document.getElementById('submit'),
  btnModal: document.getElementById('btn-add'),
  modal: document.getElementById('default-modal'),
  modalClose: document.querySelector('.close')
};
const details = {
  title: document.getElementById('title'),
  author: document.getElementById('author'),
  pages: document.getElementById('pages'),
  bool: document.getElementById('bool')
};

// author, title, number of pages, read
function Book(author, title, pages, bool = false) {
  if (!new.target) return;

  this.id = crypto.randomUUID();
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.bool = bool;
}

Book.prototype.toggle = function() {
  this.bool = !this.bool;
}

// why make multiple functions if we can only make one
// to work everything we needed
function Library() {
  if (!new.target) return;
  this.books = [];

  // add function
  this.add = (data = null) => {
    if (typeof data !== 'object') return;
    if (data === null) data = new Book('Jane Austen', 'Pride and Prejudice', 1234, false);
    else if (data.title.value === '' || data.author.value === '' || data.pages.value === '') return;
    else data = new Book(data.author.value, data.title.value, data.pages.value, data.bool.value);

    if (!this.books.find(a => a.title === data.title)) this.books.push(data);
  };

  // show table
  this.show = () => {
    // clear
    content.tblBody.replaceChildren();

    // add data automatically
    if (this.books.length === 0) {
      //const b = new Book('Jane Austen', 'Pride and Prejudice', 1234, false);
      this.add();
    }

    // table structure
    const container = document.createDocumentFragment();
    this.books.forEach(({ id, title, author, pages, bool }) => {
      const tr = document.createElement('tr');
      tr.dataset.id = id;
      [ id, title, author, pages, bool ? 'Finished' : 'Ongoing' ].forEach(d => {
        const td = document.createElement('td');
        td.textContent = String(d ?? '');
        tr.appendChild(td);
      });

      // add delete button, add read status
      const action = document.createElement('td');
      const div = document.createElement('div');
      div.classList.add('btn-group');
      
      const btnDel = document.createElement('button');
      btnDel.textContent = 'Delete';
      btnDel.classList.add('btn', 'btn-delete');

      const btnBool = document.createElement('button');
      btnBool.textContent = bool ? 'Ongoing' : 'Finished';
      btnBool.classList.add('btn', 'btn-bool');

      div.appendChild(btnDel);
      div.appendChild(btnBool);
      action.appendChild(div);
      tr.appendChild(action);

      container.appendChild(tr);
    });

    content.tblBody.appendChild(container);
  };

  // remove data using id
  this.delete = (id) => {
    this.books = this.books.filter(b => b.id !== id);
  };
}

// onload
document.addEventListener('DOMContentLoaded', () => {
  // simple modal system
  const modalSystem = () => {
    content.btnModal.addEventListener('click', () => {
      content.modal.style.display = 'block';
    });
    
    content.btnSubmit.addEventListener('click', () => {
      content.modal.style.display = 'none';
    });

    content.modalClose.addEventListener('click', () => {
      content.modal.style.display = 'none';
    });

    document.addEventListener('click', (e) => {
      if (e.target === content.modal) content.modal.style.display = 'none';
    });
  };
  modalSystem();
  
  // use Library function
  const lib = new Library();
  lib.show();

  // button submit
  content.btnSubmit.addEventListener('click', e => {
    e.preventDefault();

    lib.add(details);
    lib.show();
    
    // clear old details
    Object.entries(details).forEach(([_, i]) => {
      if (i.type === 'checkbox') i.checked = false;
      else i.value = '';
    });
  });

  // button delete, button bool
  content.tblBody.addEventListener('click', e => {
    if (e.target.classList.contains('btn-delete')) {
      const tr = e.target.closest('tr');
      const id = tr.dataset.id;

      lib.delete(id);
      lib.show();
    }

    if (e.target.classList.contains('btn-bool')) {
      const tr = e.target.closest('tr');
      const id = tr.dataset.id;
      const book = lib.books.find(b => b.id === id);
      
      book.toggle();
      lib.show();
    }
  });
});