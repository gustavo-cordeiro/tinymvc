import _ from 'lodash';
import Model from '../../Core/Model';

const BASE_CLIENT = {
  id: null,
  name: {
    surname: null,
    familyname: null,
    displayName: null,
  },
  code: {
    securityCode: null,
  },
  email: null,
  phones: [
    {
      kind: null,
      rawNumber: null,
      areaCode: null,
      number: null
    },
    {
      kind: null,
      rawNumber: null,
      areaCode: null,
      number: null
    }
  ],
  meta: {
    created: null,
    modified: null
  }
};

export default class extends Model{
  constructor(attrs) {
    const base = _.cloneDeep(BASE_CLIENT);

    super(Object.assign(base, attrs));
  }

  setAttributes(attrs) {
    const clone = _.cloneDeep(attrs);
    if(clone.name) {
      const {surname, familyname} = clone.name;
      clone.name.displayName = `${surname} ${familyname}`;
    }

    clone.meta.modified = new Date();
    return super.setAttributes(clone);
  }
}
