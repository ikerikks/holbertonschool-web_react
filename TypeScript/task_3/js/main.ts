/// <reference path = "./crud.d.ts" />
import { RowID, RowElement } from './interface.js';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);
// newRowID.age = 23;
const updatedRow: RowID = CRUD.updateRow(newRowID, {...row, age: 23});
CRUD.deleteRow(updatedRow);
