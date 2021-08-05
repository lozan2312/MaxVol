function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
import rulesGenerator from "../rules/rulesGenerator";
import parseRule from "../rules/parser/parseRule";
import Trap from "./Trap";
/**
 * Generates a new trap handler object for the given rules.
 *
 * @param {Object|Array} proxyRules The proxy rules.
 * @return {Object} The new trap handler object for the given rules.
 */

export default function trapHandlerForRules(proxyRules) {
  const trap = new Trap();
  const rules = rulesGenerator(proxyRules);

  for (const {
    rule,
    pointcut
  } of rules) {
    const parsedRule = parseRule(rule);
    trap.addPointcutRule(pointcut, parsedRule);
  }

  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, trap.hasGets() ? {
    // Trap for property access (getting) and method call.
    get(target, property, receiver) {
      return trap.get(target, property, receiver);
    }

  } : {}), trap.hasSets() ? {
    // Trap for property access (setting).
    set(target, property, value, receiver) {
      const updateWasSuccessful = trap.set(target, property, value, receiver);
      return updateWasSuccessful;
    }

  } : {}), trap.hasApplies() ? {
    // Trap for function call.
    apply(target, thisArg, argumentsList) {
      return trap.apply(target, thisArg, argumentsList);
    }

  } : {}), trap.hasConstructs() ? {
    // Trap for object construction with the "new" operator.
    construct(target, argumentsList, newTarget) {
      return trap.construct(target, argumentsList, newTarget);
    }

  } : {});
}
//# sourceMappingURL=trapHandlerForRules.js.map