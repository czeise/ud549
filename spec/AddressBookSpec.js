/* eslint-disable no-undef */
describe('Address Book', function addressBook() {
  var ab;
  var thisContact;

  beforeEach(function before() {
    ab = new AddressBook();
    thisContact = new Contact();
  });

  it('should be able to add a contact', function shouldAdd() {
    ab.addContact(thisContact);

    expect(ab.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', function shouldDelete() {
    ab.addContact(thisContact);
    ab.deleteContact(0);

    expect(ab.getContact(0)).not.toBeDefined();
  });
});

describe('Async Address Book', function asyncAddressBook() {
  var ab = new AddressBook();

  beforeEach(function startDone(done) {
    ab.getInitialContacts(function endDone() {
      done();
    });
  });
  it('should grab initial contacts', function shouldGrab(done) {
    expect(ab.initialComplete).toBe(true);
    done();
  });
});
