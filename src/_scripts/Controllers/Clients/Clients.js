import $ from 'jquery';
import Controller from '../../Core/Controller';
import View from '../../Views/Clients/Clients';
import Model from '../../Models/Clients/Clients';

export default class extends Controller {
  constructor() {
    super(...arguments);
  }

  async setupModel() {
    if(!this.model) {
      this.model = new Model();
      this.model.sub(`${this.model.guid}-update`, data => this.render(data));

      await this.model.load();
    }
  }

  setupView() {
    if(!this.view) {
      this.view = new View($('#clients-list'));
    }

    this.view.sub(`${this.view.guid}-submit`, value => this.filterClients(value));
  }

  filterClients(value) {
    const {listOfClients} = this.model.toJson();
    const filterValue = value.toLowerCase();

    const filteredClients = listOfClients.filter(client => {
      const {name} = client.attrs;

      return name.displayName.toLowerCase().includes(filterValue);
    });

    this.render({listOfClients: filteredClients});
  };
}
