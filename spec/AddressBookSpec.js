/* eslint-disable no-undef */
describe('Address Book', function addressBook() {
  it('should be able to add a contact', function shouldAdd() {
    var ab = new AddressBook();
    var thisContact = new Contact();

    ab.addContact(thisContact);

    expect(ab.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', function shouldDelete() {
    var ab = new AddressBook();
    var thisContact = new Contact();

    ab.addContact(thisContact);
    ab.deleteContact(0);
    expect(ab.getContact(0)).not.toBeDefined();
  });
});
