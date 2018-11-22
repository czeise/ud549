function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function addContact(contact) {
  this.contacts.push(contact);
};

AddressBook.prototype.getContact = function getContact(index) {
  return this.contacts[index];
};

AddressBook.prototype.deleteContact = function deleteContact(index) {
  this.contacts.splice(index, 1);
};
