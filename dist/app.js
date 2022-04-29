"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
/*

Cuando te salga que no puede encontrar la declaración
ve a DefinitelyTyped.org, que guarda todas las definiciones
de tipo en un repositorio y ahí, como 5ta instalación
deberás hacer:

npm i -D @types/express @types/morgan

*/
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
exports.default = app;
