require('babel-polyfill');

import page from 'page';
import Cliets from './Models/Clients/Cliets';

page('/', index);

page.start();


async function index() {
  const model = new Cliets();
  const attrs = await model.load();

  console.log(attrs);
}
