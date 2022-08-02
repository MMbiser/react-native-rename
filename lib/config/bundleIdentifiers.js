"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bundleIdentifiers = bundleIdentifiers;

var _globby = _interopRequireDefault(require("globby"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// nS - No Space
// lC - Lowercase
function bundleIdentifiers(_ref) {
  var currentAppName = _ref.currentAppName,
      newName = _ref.newName,
      currentBundleID = _ref.currentBundleID,
      newBundleID = _ref.newBundleID,
      newBundlePath = _ref.newBundlePath;
  var nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  var nS_NewName = newName.replace(/\s/g, '');
  return [{
    regex: "package=\"".concat(currentBundleID, "\""),
    replacement: "package=\"".concat(newBundleID, "\""),
    paths: ['android/app/src/main/AndroidManifest.xml']
  }, {
    regex: "\"".concat(currentBundleID, "\""),
    replacement: "\"".concat(newBundleID, "\""),
    paths: ['android/app/BUCK', 'android/app/_BUCK', 'android/app/build.gradle']
  }, {
    regex: currentBundleID,
    replacement: newBundleID,
    paths: _globby["default"].sync(["".concat(newBundlePath, "/**/*.java")])
  }, {
    // App name (probably) doesn't start with `.`, but the bundle ID will
    // include the `.`. This fixes a possible issue where the bundle ID
    // also contains the app name and prevents it from being inappropriately
    // replaced by an update to the app name with the same bundle ID
    regex: new RegExp("(?!\\.)(.|^)".concat(nS_CurrentAppName), 'g'),
    replacement: "$1".concat(nS_NewName),
    paths: ["".concat(newBundlePath, "/MainActivity.java")]
  }];
}