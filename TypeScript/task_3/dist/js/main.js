var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as CRUD from './crud.js';
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
// newRowID.age = 23;
var updatedRow = CRUD.updateRow(newRowID, __assign(__assign({}, row), { age: 23 }));
CRUD.deleteRow(updatedRow);
//# sourceMappingURL=main.js.map