contactos = [];
contactos.push(new Contacto("Juan Alberto", "Toledo", "Venegas", 26, "Masculino", "correo@algo.com", "5654156878"));

function addContact(e) {
    console.log("Hola Kay");

    e.preventDefault();
}

function resetForm() {
    console.log("Estoy reseteando");

    e.preventDefault();
}

function updateContact() {

}

function contactsTable() {
    table = document.getElementById("contactsTable").appendChild(document.createElement('p').appendChild(document.createTextNode('Pruebita desde JavaScritp!!!')));
    console.log(table);
}

contactsTable()