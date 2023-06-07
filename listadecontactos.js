let listaContactos = [
  "Raúl Jímenez",
  "Mauro Espitia",
  "Saray González",
  "Lina Montemayor",
];

function añadirContacto(NewContact) {
  listaContactos.push(NewContact);
}

function eliminarContacto(pos, cantidadContact) {
  listaContactos.splice(pos, cantidadContact);
}

function verLista() {
  console.log(listaContactos);
}

añadirContacto("Marisol Mendoza");
eliminarContacto(1, 1);
verLista();
