"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const contact_route_1 = __importDefault(require("./Routes/contact.route"));
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cors_1.default());
app.use("/contacts", contact_route_1.default);
app.use((req, res) => {
    res.status(404).send({
        error: "Not Found",
    });
});
app.listen(3001);
