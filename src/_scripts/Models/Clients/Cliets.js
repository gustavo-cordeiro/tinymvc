import Model from '../../Core/Model';
import Storage from '../../Core/Storage';
import Client from './Client';

const STORAGE_KEY = 'clients';

export default class extends Model{
  load() {
    return new Promise( resolve => {
      const cliets = Storage.getItem(STORAGE_KEY) || [];
      const adapterClients = cliets.map(client => new Client(client));

      resolve(this.setAttributes(adapterClients));
    });
  }
}
