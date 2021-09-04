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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateVerificationCode = exports.generateInteger = void 0;
const generateInteger = () => Math.floor(Math.random() * 100) % 10;
exports.generateInteger = generateInteger;
const generateVerificationCode = (numberOfDigits = 5, allowZeroStart = true, returnAsString = true) => __awaiter(void 0, void 0, void 0, function* () {
    let digits = [];
    while (true) {
        const next = (0, exports.generateInteger)();
        if (digits.length === numberOfDigits) {
            break;
        }
        if (next === 0 && allowZeroStart === false) {
            continue;
        }
        else {
            digits.push(next);
        }
    }
    digits = digits.sort(() => Math.random() - 0.5);
    return (yield returnAsString)
        ? digits.join("")
        : Number.parseInt(digits.join(""));
});
exports.generateVerificationCode = generateVerificationCode;
//# sourceMappingURL=index.js.map