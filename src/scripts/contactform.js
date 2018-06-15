let contactList = require("./customer");
let saveDatabase = require("./database");
let main = document.querySelector("#main");
let fragment = document.createDocumentFragment();
let nameCreate = document.createElement("input");
let addressCreate = document.createElement("input");
let numberCreate = document.createElement("input");
let submitButton = document.createElement("button");
nameCreate.textContent = "name";
addressCreate.textContent = "address";
numberCreate.textContent = "phone number";
submitButton.textContent = "submit";
fragment.appendChild(nameCreate);
fragment.appendChild(addressCreate);
fragment.appendChild(numberCreate);
fragment.appendChild(submitButton);
main.appendChild(fragment);
submitButton.addEventListener("click", function(){
    contactList.customerCreator(nameCreate.value, addressCreate.value, numberCreate.value);
    saveDatabase(contactList.contactList, "Contacts");
})