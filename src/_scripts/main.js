require('babel-polyfill');

import $ from 'jquery';
import page from 'page';
import Cliets from './Models/Clients/Clients';
import VCliets from './Views/Clients/Clients';

page('/', index);

page.start();


async function index() {
  const model = new Cliets();
  const {listOfClients} = await model.load();

  const view = new VCliets($('#clients-list ul'));
  view.render(listOfClients);
}
