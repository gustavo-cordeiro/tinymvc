require('babel-polyfill');

import $ from 'jquery';
import page from 'page';
import Route from './Core/Route';
import Clients from './Controllers/Clients/Clients';

page(...Route('/', new Clients()));

$(() => {
  page.start();
});

/*Cria alguns usarios na base*/
if(!localStorage.getItem('clients')) {
  const clients = [
    {
      id: 1,
      name: {
        surname: 'Henrique',
        familyname: 'Zucarelli',
        displayName: null,
      },
      code: {
        securityCode: 8888888888,
      },
      email: 'henrique@tivit.com.br',
      phones: [
        {
          kind: 'home',
          rawNumber: '11941503533',
          areaCode: '11',
          number: '941503533'
        },
        {
          kind: 'mobile',
          rawNumber: '11941503533',
          areaCode: '11',
          number: '941503533'
        }
      ],
      meta: {
        created: 'Wed Jul 20 2016 16:19:05 GMT-0300 (BRT)',
        modified: 'Wed Jul 20 2016 16:19:05 GMT-0300 (BRT)',
      }
    },
    {
      id: 2,
      name: {
        surname: 'Gustavo',
        familyname: 'Cordeiro',
        displayName: null,
      },
      code: {
        securityCode: 8888888888,
      },
      email: 'henrique@tivit.com.br',
      phones: [
        {
          kind: 'home',
          rawNumber: '11941503533',
          areaCode: '11',
          number: '941503533'
        },
        {
          kind: 'mobile',
          rawNumber: '11941503533',
          areaCode: '11',
          number: '941503533'
        }
      ],
      meta: {
        created: 'Wed Jul 20 2016 16:19:05 GMT-0300 (BRT)',
        modified: 'Wed Jul 20 2016 16:19:05 GMT-0300 (BRT)',
      }
    },
    {
      id: 3,
      name: {
        surname: 'Bruno',
        familyname: 'Casado',
        displayName: null,
      },
      code: {
        securityCode: 8888888888,
      },
      email: 'henrique@tivit.com.br',
      phones: [
        {
          kind: 'home',
          rawNumber: '11941503533',
          areaCode: '11',
          number: '941503533'
        },
        {
          kind: 'mobile',
          rawNumber: '11941503533',
          areaCode: '11',
          number: '941503533'
        }
      ],
      meta: {
        created: 'Wed Jul 20 2016 16:19:05 GMT-0300 (BRT)',
        modified: 'Wed Jul 20 2016 16:19:05 GMT-0300 (BRT)',
      }
    },
    {
      id: 4,
      name: {
        surname: 'Alexandre',
        familyname: 'Ramos',
        displayName: null,
      },
      code: {
        securityCode: 8888888888,
      },
      email: 'henrique@tivit.com.br',
      phones: [
        {
          kind: 'home',
          rawNumber: '11941503533',
          areaCode: '11',
          number: '941503533'
        },
        {
          kind: 'mobile',
          rawNumber: '11941503533',
          areaCode: '11',
          number: '941503533'
        }
      ],
      meta: {
        created: 'Wed Jul 20 2016 16:19:05 GMT-0300 (BRT)',
        modified: 'Wed Jul 20 2016 16:19:05 GMT-0300 (BRT)',
      }
    },
    {
      id: 5,
      name: {
        surname: 'Arthur',
        familyname: 'Piccolo',
        displayName: null,
      },
      code: {
        securityCode: 8888888888,
      },
      email: 'henrique@tivit.com.br',
      phones: [
        {
          kind: 'home',
          rawNumber: '11941503533',
          areaCode: '11',
          number: '941503533'
        },
        {
          kind: 'mobile',
          rawNumber: '11941503533',
          areaCode: '11',
          number: '941503533'
        }
      ],
      meta: {
        created: 'Wed Jul 20 2016 16:19:05 GMT-0300 (BRT)',
        modified: 'Wed Jul 20 2016 16:19:05 GMT-0300 (BRT)',
      }
    }
  ];

  localStorage.setItem('clients', JSON.stringify(clients));
}
