import View from '../../Core/View';

export default class extends View {
	constructor(locals) {
		super('./Clients.jade', locals);
	}
}