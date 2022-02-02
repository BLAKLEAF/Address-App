import express from "express";
import ContactController from "../Controllers/contact.controller";

const router = express.Router();
let contactController = new ContactController();

router.get("/", contactController.getAllContacts);

router.post("/", contactController.createContact);

router.get("/:id", contactController.getContactById);

router.patch("/:id", contactController.updateContactById);

router.delete("/:id", contactController.deleteContactById);

export default router;
