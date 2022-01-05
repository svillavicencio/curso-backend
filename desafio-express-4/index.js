"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Container = void 0;
var fs = require("fs");
var Container = /** @class */ (function () {
    function Container(itemsList, items) {
        if (items === void 0) { items = []; }
        this.itemsList = itemsList;
        this.items = items;
        this.itemsList = "./".concat(itemsList);
        this.items;
    }
    Container.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, _i, data_1, item, id, newItemID, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (Container.init)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, fs.promises.readFile(this.itemsList, 'utf-8')];
                    case 2:
                        response = _a.sent();
                        data = JSON.parse(response);
                        _i = 0, data_1 = data;
                        _a.label = 3;
                    case 3:
                        if (!(_i < data_1.length)) return [3 /*break*/, 6];
                        item = data_1[_i];
                        id = Container.id;
                        Container.id++;
                        newItemID = __assign(__assign({}, item), { id: id });
                        this.items.push(newItemID);
                        return [4 /*yield*/, this.write()];
                    case 4:
                        _a.sent();
                        Container.init = true;
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, "Base de datos inicializado"];
                    case 7:
                        error_1 = _a.sent();
                        throw error_1;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Container.prototype.save = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var newItem, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.read()];
                    case 1:
                        _a.sent();
                        newItem = __assign(__assign({}, item), { id: Container.id });
                        result = Container.id;
                        Container.id++;
                        this.items.push(newItem);
                        return [4 /*yield*/, this.write()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Container.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.read()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.items.find(function (item) {
                                return item.id === id;
                            }) || null];
                    case 2:
                        err_1 = _a.sent();
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Container.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.read()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.items];
                }
            });
        });
    };
    Container.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.read()];
                    case 1:
                        _a.sent();
                        this.items = this.items.filter(function (item) {
                            return item.id !== id;
                        });
                        return [4 /*yield*/, this.write()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        throw err_2;
                    case 4: return [2 /*return*/, 'Elemento eliminado'];
                }
            });
        });
    };
    Container.prototype.deleteAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.items = [];
                        return [4 /*yield*/, this.write()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'Base de datos formateado'];
                }
            });
        });
    };
    Container.prototype.write = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs.promises.writeFile(this.itemsList, JSON.stringify(this.items))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        throw err_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Container.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, result, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs.promises.readFile(this.itemsList, 'utf-8')];
                    case 1:
                        response = _a.sent();
                        result = JSON.parse(response);
                        this.items = result;
                        return [2 /*return*/, result];
                    case 2:
                        err_4 = _a.sent();
                        throw err_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Container.init = false;
    Container.id = 1;
    return Container;
}());
exports.Container = Container;
exports["default"] = Container;
