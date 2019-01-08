"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doc = void 0;

var _reactDesc = require("react-desc");

var doc = function doc(TableRow) {
  var DocumentedTableRow = (0, _reactDesc.describe)(TableRow).description('A row of cells in a table.').usage("import { TableRow } from 'grommet';\n<TableRow />").intrinsicElement('tr');
  return DocumentedTableRow;
};

exports.doc = doc;