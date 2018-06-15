let contactList = require("./customer")
const saveDatabase = (databaseObject, localStorageKey) => {
    const stringifiedDatabase = JSON.stringify(databaseObject);
    localStorage.setItem(localStorageKey, stringifiedDatabase);
}

const loadDatabase = (localStorageKey) => {
//Get the string version
const databaseString = localStorage.getItem(localStorageKey);
//Use JSON.parse to convert it back into object
return JSON.parse(databaseString);
}
saveDatabase(contactList.contactList, "Contacts");
loadDatabase("Contacts");
module.exports = saveDatabase;


