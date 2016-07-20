import _ from 'lodash';

export default class {
  construcor(model, view) {
    this.id = _.uniqueId('controller');
    this.model = model;
    this.view = view;
  }

  setup() {
  	
  }
};
