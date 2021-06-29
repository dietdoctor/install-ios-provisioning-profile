"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stats = exports.writeFile = exports.exists = void 0;
const fs = require("fs");
function exists(path) {
    var exist = false;
    try {
        exist = !!(path && fs.statSync(path) != null);
    }
    catch (err) {
        if (err && err.code === "ENOENT") {
            exist = false;
        }
        else {
            throw err;
        }
    }
    return exist;
}
exports.exists = exists;
function writeFile(file, data, options) {
    if (typeof options === "string") {
        fs.writeFileSync(file, data, { encoding: options });
    }
    else {
        fs.writeFileSync(file, data, options);
    }
}
exports.writeFile = writeFile;
/**
 * Get's stat on a path.
 * Useful for checking whether a file or directory.  Also getting created, modified and accessed time.
 * see [fs.stat](https://nodejs.org/api/fs.html#fs_class_fs_stats)
 *
 * @param     path      path to check
 * @returns   fsStat
 */
function stats(path) {
    return fs.statSync(path);
}
exports.stats = stats;