"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Home = _interopRequireDefault(require("./Home"));

var _Cats = _interopRequireDefault(require("./Cats"));

var _Dogs = _interopRequireDefault(require("./Dogs"));

var _Boys = _interopRequireDefault(require("./Boys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = app => {
  app.use('/', _Home.default);
  app.use('/cats', _Cats.default);
  app.use('/dogs', _Dogs.default);
  app.use('/boys', _Dogs.default);
};

exports.default = _default;