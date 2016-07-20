import $ from 'jquery';
import View from '../../Core/View';

function template(name, email, id) {
  return `
    <li class="client">
      <p class="client__name">${name}</p>
      <p class="client__email">${email}</p>
      <a href="/${id}/edit" class="client__action">Editar</a>
    </li>
  `;
}

function $createClienteItem(Client) {
  const {name, email, id} = Client.attrs;
  const $element = $(template(name.displayName, email, id));

  return $element;
}

export default class extends View {
  constructor() {
    super(...arguments);

    this.$clientsContainer = this.$parentElement.find('.clients-list__container');
  }

  render(data) {
    const clients = data.listOfClients;

    this.$clientsContainer.html('');

    clients.map(client => {
      $createClienteItem(client)
        .appendTo(this.$clientsContainer);
    });

    super.render();
  }

  fireSearch(delay) {
    if(this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.pub(
        `${this.guid}-submit`,
        this.$searchInput.val()
      );

      this.timeoutId = null;
    }, delay);
  }

  setup() {
    this.$searchInput = this.$parentElement
      .find('.search input')
      .on('keyup', event => this.fireSearch(100));

    this.$parentElement
      .find('.search button')
      .on('click', event => this.fireSearch(0));
  }
}
