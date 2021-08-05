"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAllSupportedLocalesRes;

var _nodeUtl = require("node-utl");

var _fs = require("fs");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @type {string}
 */
const RES_FOLDER_PATH = `${__dirname}/../../res`; // The script executes from within the ./dist/bin directory.

/**
 * @type {string}
 */

const DEFAULT_FALLBACK_LOCALE = "en";
/**
 * Creates a resource file for all the supported locales of the Moment library.
 *
 * @return {undefined}
 * @throws {Error} If the "node_modules/moment/locale" directory is not found.
 */

function createAllSupportedLocalesRes() {
  const momentPackagePath = (0, _nodeUtl.packagePath)("moment");
  const localesPath = `${momentPackagePath}/locale`;
  const allSupportedLocalesAbsoluteFilenames = (0, _nodeUtl.walkSync)(localesPath);
  const locales = allSupportedLocalesAbsoluteFilenames.map(_nodeUtl.basenameWithoutExtension);
  locales.push(DEFAULT_FALLBACK_LOCALE);
  locales.sort();
  let id = 1;
  const localesCode = `/**
 * This file was automatically built by "moment-utl" or it has been recreated
 * with the "npx moment-utl-locales" command to use the locales of the "moment" package
 * used by the client code.
 */

/**
 * @type {string}
 */
const DEFAULT_FALLBACK_LOCALE = ${JSON.stringify(DEFAULT_FALLBACK_LOCALE)};

/**
 * @type {string[]}
 */
const allSupportedLocales = ${JSON.stringify(locales)};

/**
 * @type {Object}
 */
const allSupportedLocalesObj = ${JSON.stringify(locales.reduce((carry, current) => _objectSpread(_objectSpread({}, carry), {}, {
    [current]: id++
  }), {}))};

export { DEFAULT_FALLBACK_LOCALE, allSupportedLocales, allSupportedLocalesObj };
`;
  (0, _fs.writeFileSync)(`${RES_FOLDER_PATH}/locales.js`, localesCode);
}
//# sourceMappingURL=createAllSupportedLocalesRes.js.map