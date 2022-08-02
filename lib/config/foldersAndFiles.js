"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foldersAndFiles = foldersAndFiles;

// nS - No Space
// lC - Lowercase
function foldersAndFiles(currentAppName, newName) {
  var nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  var nS_NewName = newName.replace(/\s/g, '');
  return ["ios/".concat(nS_CurrentAppName), "ios/".concat(nS_CurrentAppName, "-tvOS"), "ios/".concat(nS_CurrentAppName, "-tvOSTests"), "ios/".concat(nS_CurrentAppName, ".xcodeproj"), "ios/".concat(nS_NewName, ".xcodeproj/xcshareddata/xcschemes/").concat(nS_CurrentAppName, "-tvOS.xcscheme"), "ios/".concat(nS_NewName, ".xcodeproj/xcshareddata/xcschemes/").concat(nS_CurrentAppName, ".xcscheme"), "ios/".concat(nS_CurrentAppName, "Tests"), "ios/".concat(nS_NewName, "Tests/").concat(nS_CurrentAppName, "Tests.m"), "ios/".concat(nS_CurrentAppName, ".xcworkspace"), "ios/".concat(nS_NewName, "/").concat(nS_CurrentAppName, ".entitlements"), "ios/".concat(nS_CurrentAppName, "-Bridging-Header.h")];
}