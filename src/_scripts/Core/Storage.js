function getItem (key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

function setItem (key, attrs) {
  const stringify = JSON.stringify(attrs);

  if(stringify) {
    localStorage.setItem(key, stringify);
  }

  return stringify;
};

export default {
  setItem,
  getItem,
};
