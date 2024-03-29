import configs from './config.json';

export default {
  uri: function (path) {
    return configs.BASE_URL + path.replace(/^\//, '');
  },
  get: function (keyStr) {
    const items = keyStr.split('.')
    let value = configs;
    for (let i = 0, n = items.length; i < n; i++) {
      let key = items[i];
      value = value[key];
      if (value === undefined) return;
    }
    return value;
  }
}
