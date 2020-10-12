"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_storage_1 = __importDefault(require("@react-native-community/async-storage"));
class AsyncStorageProvider {
    load(key) {
        return new Promise((resolve) => {
            async_storage_1.default.getItem(key)
                .then((result) => {
                if (result) {
                    resolve(result);
                }
                resolve(null);
            })
                .catch(() => resolve(null));
        });
    }
    remove(key) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const check = yield this.load(key);
            if (check === null) {
                resolve(false);
            }
            else {
                async_storage_1.default.removeItem(key).then(() => resolve(true));
            }
        }));
    }
    save(key, data) {
        return new Promise((resolve) => {
            async_storage_1.default.setItem(key, JSON.stringify(data))
                .then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }
}
exports.default = AsyncStorageProvider;
//# sourceMappingURL=AsyncStorageProvider.js.map