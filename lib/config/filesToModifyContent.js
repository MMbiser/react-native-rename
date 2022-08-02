"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filesToModifyContent = filesToModifyContent;

// nS - No Space
// lC - Lowercase
function filesToModifyContent(currentAppName, newName) {
  var nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  var nS_NewName = newName.replace(/\s/g, '');
  return [{
    regex: "<string name=\"app_name\">".concat(currentAppName, "</string>"),
    replacement: "<string name=\"app_name\">".concat(newName, "</string>"),
    paths: ['android/app/src/main/res/values/strings.xml']
  }, {
    regex: nS_CurrentAppName,
    replacement: nS_NewName,
    paths: ['index.js', 'index.android.js', 'index.ios.js', "ios/".concat(nS_NewName, ".xcodeproj/project.pbxproj"), "ios/".concat(nS_NewName, ".xcworkspace/contents.xcworkspacedata"), "ios/".concat(nS_NewName, ".xcodeproj/xcshareddata/xcschemes/").concat(nS_NewName, "-tvOS.xcscheme"), "ios/".concat(nS_NewName, ".xcodeproj/xcshareddata/xcschemes/").concat(nS_NewName, ".xcscheme"), "ios/".concat(nS_NewName, "/AppDelegate.mm"), 'android/settings.gradle', "ios/".concat(nS_NewName, "Tests/").concat(nS_NewName, "Tests.m"), 'ios/build/info.plist', 'ios/Podfile', 'app.json']
  }, {
    regex: "text=\"".concat(currentAppName, "\""),
    replacement: "text=\"".concat(newName, "\""),
    paths: ["ios/".concat(nS_NewName, "/Base.lproj/LaunchScreen.xib")]
  }, {
    regex: currentAppName,
    replacement: newName,
    paths: ["ios/".concat(nS_NewName, "/Info.plist")]
  }, {
    regex: "\"name\": \"".concat(nS_CurrentAppName, "\""),
    replacement: "\"name\": \"".concat(nS_NewName, "\""),
    paths: ['package.json']
  }, {
    regex: "\"displayName\": \"".concat(currentAppName, "\""),
    replacement: "\"displayName\": \"".concat(newName, "\""),
    paths: ['app.json']
  }];
}