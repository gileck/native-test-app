"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getThings = exports.getThings = function getThings(a, b, c) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var things = [1, 2, 3, 4, 5];
            resolve(things);
        }, 1000);
    });
};