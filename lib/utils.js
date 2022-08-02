"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__dirname = void 0;
exports.iosRequiredPaths = iosRequiredPaths;
exports.loadAppConfig = exports.loadAndroidManifest = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _cheerio = _interopRequireDefault(require("cheerio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var devTestRNProject = ''; // For Development eg '/Users/junedomingo/Desktop/RN49'

var _dirname = devTestRNProject || process.cwd();

exports.__dirname = _dirname;

function readFile(filePath) {
  return new Promise(function (resolve, reject) {
    _fs["default"].readFile(filePath, function (err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
}

var loadAppConfig = function loadAppConfig() {
  return readFile(_path["default"].join(_dirname, 'app.json')).then(function (data) {
    return JSON.parse(data);
  });
};

exports.loadAppConfig = loadAppConfig;

var loadAndroidManifest = function loadAndroidManifest() {
  return readFile(_path["default"].join(_dirname, 'android/app/src/main/AndroidManifest.xml')).then(function (data) {
    return _cheerio["default"].load(data);
  });
};

exports.loadAndroidManifest = loadAndroidManifest;

function iosRequiredPaths(currentAppName) {
  var nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  return ["ios/".concat(nS_CurrentAppName)];
}