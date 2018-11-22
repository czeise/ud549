/* eslint-disable no-undef */
describe('Address Book', function addressBook() {
  it('should be able to add a contact', function shouldAdd() {
    var ab = new AddressBook();
    var thisContact = new Contact();

    ab.addContact(thisContact);

    expect(ab.getContact(0)).toBe(thisContact);
  });
});
