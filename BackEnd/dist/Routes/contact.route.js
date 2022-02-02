"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_controller_1 = __importDefault(require("../Controllers/contact.controller"));
const router = express_1.default.Router();
let contactController = new contact_controller_1.default();
router.get("/", contactController.getAllContacts);
router.post("/", contactController.createContact);
router.get("/:id", contactController.getContactById);
router.patch("/:id", contactController.updateContactById);
router.delete("/:id", contactController.deleteContactById);
exports.default = router;
