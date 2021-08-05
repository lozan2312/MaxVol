"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

var _fs = require("fs");

/*
 * Copyright (c) 2021 Anton Bagdatyev (Tonix)
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

/**
 * List all files in a directory recursively and synchronously.
 *
 * @param {string} dir The directory of the files.
 * @param {string[]} [fileList] Optional file list to append the filenames to
 *                               (the appended filenames fill include the "dir" prefix).
 * @return {string[]} The mutated file list with the files appended to it, if given,
 *                    or a new array of filenames.
 */
const walkSync = function (dir, fileList = []) {
  const files = (0, _fs.readdirSync)(dir);
  files.forEach(function (file) {
    const filePath = (0, _path.join)(dir, file);

    if ((0, _fs.statSync)(filePath).isDirectory()) {
      fileList = walkSync(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
};

var _default = walkSync;
exports.default = _default;
//# sourceMappingURL=walkSync.js.map