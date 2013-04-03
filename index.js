var cookie = require('cookie-cutter');

var store = module.exports = {};

store.get = function (key, cb) {
  setTimeout(function () {
    cb(cookie.get(key));
  });
}

store.set = function (key, value, cb) {
  setTimeout(function () {
    cookie.set(key, value);
    cb();
  });
}