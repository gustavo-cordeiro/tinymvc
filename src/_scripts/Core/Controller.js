import _ from 'lodash';

export default class Clients {
  construcor() {
    this.guid = _.uniqueId('controller');
  }

  setup() {
    this.setupView();
    this.setupModel();
  }

  render(data) {
    if(data) {
      this.view.render(data);
    }
    else {
      this.view.render(this.modal.toJson());
    }
  }
};

