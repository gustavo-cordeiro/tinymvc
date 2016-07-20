import Model from '../../Core/Model';
import Storage from '../../Core/Storage';
import Client from './Client';

const STORAGE_KEY = 'clients';

export default class extends Model{
  load() {
    return new Promise( resolve => {
      const clients = Storage.getItem(STORAGE_KEY) || [];
      const clientsArray = clients.map(client => new Client(client));

      resolve(this.setAttributes({listOfClients: clientsArray}));
    });
  }
}
