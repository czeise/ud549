function AddressBook() {
  this.contacts = [];
  this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function getInitialContacts(cb) {
  var self = this;

  setTimeout(function timeout() {
    self.initialComplete = true;

    if (cb) {
      return cb();
    }

    return self.initialComplete;
  }, 3);
};

AddressBook.prototype.addContact = function addContact(contact) {
  this.contacts.push(contact);
};

AddressBook.prototype.getContact = function getContact(index) {
  return this.contacts[index];
};

AddressBook.prototype.deleteContact = function deleteContact(index) {
  this.contacts.splice(index, 1);
};
