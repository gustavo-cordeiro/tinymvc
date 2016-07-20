import _ from 'lodash';
import jade from 'jade';
import PubSub from './PubSub';

export default class extends PubSub {
  constructor($parentElement) {
    super();
    this.guid = _.uniqueId('view');
    this.$parentElement = $parentElement;
    this.sub(`${this.guid}-rendered`, this.setup);

  }

  render() {
  	this.pub(`${this.guid}-rendered`, this.$parentElement);
  }

  setup() {
  	this.pub(`${this.guid}-ready`, this.$parentElement);
  }
}

