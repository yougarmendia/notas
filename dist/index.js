"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// require('dotenv').config() // toma las variables de ambientes desde .dotenv
//const app = require('./app')
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 4000;
app_1.default.listen(PORT, () => {
    console.log(`You Garmendia's server is listening you on port ${PORT}`);
});
