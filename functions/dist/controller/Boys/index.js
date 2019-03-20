"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

let Boys =
/*#__PURE__*/
function () {
  function Boys() {
    _classCallCheck(this, Boys);

    this.router = (0, _express.Router)();
    this.router.get('/', this.get);
    this.router.get('/:id', this.getById);
    this.router.patch('/:id', this.updateById);
    this.router.delete('/:id', this.delete);
    this.router.post('/create', this.create);
  }

  _createClass(Boys, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(function* (req, res) {
        return yield res.send('get success');
      });

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator(function* (req, res) {
        const id = req.params.id;
        return yield res.send("get by ".concat(id, " success"));
      });

      function getById(_x3, _x4) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(function* (req, res) {
        return yield res.send("create success!!");
      });

      function create(_x5, _x6) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "updateById",
    value: function () {
      var _updateById = _asyncToGenerator(function* (req, res) {
        const id = req.params.id;
        return yield res.send("update by ".concat(id, " success"));
      });

      function updateById(_x7, _x8) {
        return _updateById.apply(this, arguments);
      }

      return updateById;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator(function* (req, res) {
        const id = req.params.id;
        return yield res.send("delete by ".concat(id, " success"));
      });

      function _delete(_x9, _x10) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return Boys;
}();

var _default = new Boys().router;
exports.default = _default;