"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var RNZendesk = react_native_1.NativeModules.RNZendesk;
// MARK: - Initialization
function initialize(config) {
    RNZendesk.initialize(config);
}
exports.initialize = initialize;
// MARK: - Indentification
function identifyJWT(token) {
    RNZendesk.identifyJWT(token);
}
exports.identifyJWT = identifyJWT;
function identifyAnonymous(name, email) {
    RNZendesk.identifyAnonymous(name, email);
}
exports.identifyAnonymous = identifyAnonymous;
function showHelpCenter(options) {
    RNZendesk.showHelpCenter(options);
}
exports.showHelpCenter = showHelpCenter;
function showNewTicket(options) {
    RNZendesk.showNewTicket(options);
}
exports.showNewTicket = showNewTicket;
