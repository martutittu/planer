"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db/db");
const colors = require("colors.ts");
colors.enable();
const app = express_1.default();
const db = db_1.connectDB();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`.blue.underline);
});
console.log(`Environment: ${process.env.NODE_ENV}`.green);
//# sourceMappingURL=app.js.map