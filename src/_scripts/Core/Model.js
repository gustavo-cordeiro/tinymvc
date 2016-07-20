import _ from 'lodash';
import PubSub from './PubSub';
import Storage from './Storage';

export default class extends PubSub {
  constructor(attrs) {
    super();
    this.attrs = {};
    this.guid = _.uniqueId('model');

    if(attrs) {
      this.setAttributes(attrs);
    }
  }

  load(key) {
    return new Promise( resolve => {
      let data = localStorage.getItem(key);
      if(data) {
        data = this.setAttributes(data);
      }

      resolve(data);
    });
  }

  setAttributes(attrs) {
    Object.assign(this.attrs, attrs);
    this.pub(`${this.guid}-update`, attrs);

    return this.attrs;
  }

  save() {
    Storage.setItem(this.toJson());
  }

  toJson() {
    return _.cloneDeep(this.attrs);
  }

  get erros() {

  }
}


