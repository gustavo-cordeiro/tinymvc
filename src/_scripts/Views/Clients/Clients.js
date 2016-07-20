import $ from 'jquery';
import View from '../../Core/View';

export default class extends View {
	render(clients) {
		this.$parentElement.html('');

		clients.map(client => {
	  	$createClienteItem(client)
	    	.appendTo(this.$parentElement);
		});

    super.render();
	}

  setup() {
    this.$searchInput = this.$parentElement.find();
    this.$parentElement
      .find('.search button')
      .on('click', event => this.pub(`${this.guid}-submit`, this.$searchInput.value()));
  }
}

function $createClienteItem(Client) {
  const {name, email, id} = Client.attrs;
  const $element = $(template(name.displayName, email, id));

  return $element;
}

function template(name, email, id) {
  return `
    <li class="client">
      <p class="client__name">${name}</p>
      <p class="client__email">${email}</p>
      <a href="/${id}/edit" class="client__action">Editar</a>
    </li>
  `;
}