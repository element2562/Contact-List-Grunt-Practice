let identifierNumber = 1
const objecto = {
contactList: [],
customerCreator: (customerName, customerAddress, customerPhoneNumber) => {
    let newCustomer = Object.create({}, {
        name: {
            value: customerName,
            enumerable: true,
            writable: true
        },
        address: {
            value: customerAddress,
            enumerable: true,
            writable: true
        },
        phoneNumber: {
            value: customerPhoneNumber,
            enumerable: true,
            writable: true
        },
        identifier: {
            value: 1,
            enumerable: true,
            writable: true
        }
    })
    newCustomer.identifier = identifierNumber++
    objecto.contactList.push(newCustomer);
}
}
objecto.customerCreator("Jacob", "100 teag ln", "615-555-9182");
objecto.customerCreator("Jordan", "200 hrshg ln", "615-555-1234");
objecto.customerCreator("Austin", "300 eaghr ln", "615-555-2353");
console.log(objecto.contactList);
module.exports = objecto;