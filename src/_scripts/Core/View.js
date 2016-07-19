import _ from 'lodash';
import jade from 'jade';
import PubSub from './PubSub';

export default class extends PubSub {
  construct(path, locals = {}) {
    this.id = _.uniqueId('view');
    this.fnTemplate = jade.compileFile(path);
    this.baseLocals = locals;
  }

  render(locals = {}) {
    const mergedLocals = Object.assign({}, locals, this.baseLocals);
    const template = this.fnTemplate(mergedLocals);

    this.pub(`${this.id}-render`, template);

    return template;
  }

  renderIn($element, locals = {}) {
    $element.html(this.render(locals));
    this.pub(`${this.id}-renderIn`, $element);

    return $element;
  }
}