import { Contacts, IContact } from "../Database/contact.database";
import { uuid } from "uuidv4";
import { RequestHandler } from "express";

let Contact = new Contacts();

export default class ContactController {
  getAllContacts: RequestHandler = async (req, res) => {
    try {
      let retrievedcontacts = await Contact.getAllContacts();
      res.status(200).send(retrievedcontacts);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  createContact: RequestHandler = async (req, res) => {
    try {
      let contactInfo: IContact = {
        id: uuid(),
        title: req.body.title,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        age: req.body.age,
        datee: req.body.datee,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        github: req.body.github,
        linkedin: req.body.linkedin,
        category: req.body.category,
        gender: req.body.gender,
      };
      let createdContact = await Contact.createContact(contactInfo);
      res.status(200).send(createdContact);
      // let contact = await Contact.getContact();
      // res.status(200).send(contact);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  getContactById: RequestHandler = async (req, res) => {
    try {
      const retrievedContact = await Contact.getContact(req.params.id);
      res.status(200).send(retrievedContact);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  updateContactById: RequestHandler = async (req, res) => {
    try {
      let contactInfo: IContact = {
        id: req.params.id,
        title: req.body.title,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        age: req.body.age,
        datee: req.body.datee,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        github: req.body.github,
        linkedin: req.body.linkedin,
        category: req.body.category,
        gender: req.body.gender,
      };
      let updatedContact = await Contact.updateContact(contactInfo);
      res.status(200).send(updatedContact);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  deleteContactById: RequestHandler = async (req, res) => {
    try {
      const deletedContact = await Contact.deleteContact(req.params.id);
      res.status(200).send(deletedContact);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}
