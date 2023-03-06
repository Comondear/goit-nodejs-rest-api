const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("models/contacts.json");

const listContacts = async () => {
  return JSON.parse(await fs.readFile(contactsPath, "utf8"));
};

const getContactById = async (id) => {
  const data = await listContacts();
  const result = data.find((item) => item.id === id);
  return result || null;
};

const removeContact = async (id) => {
  const data = await listContacts();
  const filteredList = await data.filter((item) => item.id !== id);
  return await fs.writeFile(
    contactsPath,
    JSON.stringify(filteredList, null, 2)
  );
};

const addContact = async ({ name, email, phone }) => {
  const data = await listContacts();
  const newContact = { id: "12", name, email, phone };
  const newList = [...data, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newList, null, 2));
  return newContact;
};

const updateContact = async (id, { name, email, phone }) => {
  const data = await listContacts();
  const contact = await data.find((item) => item.id === id);
  contact.name = name;
  contact.email = email;
  contact.phone = phone;
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return contact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
