import { Contacts, IContact } from "../Database/contact.database";

let contact = new Contacts();
let contactInfo: IContact = {
  id: "",
  title: "Developer",
  firstName: "Pratik",
  middleName: "Muniraj",
  lastName: "Bankar",
  age: 24,
  datee: "18/03/2021",
  phoneNumber: 9623637180,
  email: "blakleaf.003@gmail.com",
  linkedin: "linkedin.com/blakleaf",
  github: "linkedin.com/blakleaf",
  category: "Business",
  gender: "Male",
};

describe("Create Contact Method", () => {
  test("Test to Create Contact", async () => {
    await contact.createContact(contactInfo);
    let createdContact = await contact.getAllContacts();
    expect(createdContact.Items.length).toEqual(contactInfo);
  });
});

// describe("Get Contact Method", () => {
//   test("Test to Get Contact", async () => {
//     let getContact = await contact.getContact(contactInfo.id, contactInfo.name);
//     expect(getContact.Item?.id).toBe(contactInfo.id);
//   });
// });
