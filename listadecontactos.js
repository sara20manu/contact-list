let listaContactos = [
  (contacto1 = {
    id: 11203948031,
    nombres: "Raúl Daniel",
    apellidos: "Jímenez Rendón",
    teléfono: 311385930,
    ubicaciones: " ",
    ciudad: "El Carmen de Viboral",
    dirección: "Calle principal 34 A # 140 E 45",
  }),
];

function añadirContacto(
  id,
  nombres,
  apellidos,
  teléfono,
  ubicaciones,
  ciudad,
  dirección
) {
  return { id, nombres, apellidos, teléfono, ubicaciones, ciudad, dirección };
}
function eliminarContacto(pos, cantidadContact) {
  listaContactos.splice(pos, cantidadContact);
}
function verLista() {
  console.log(listaContactos);
}
function modificarContacto(posmodi, cantimodContact, modiContact) {
  listaContactos.splice(posmodi, cantimodContact, modiContact);
}

listaContactos.push(
  añadirContacto(
    23436578563,
    "Mauricio",
    "Espitia Lopera",
    3224923984,
    " ",
    "La Ceja",
    "Calle 2 B #03-89"
  )
);
listaContactos.push(
  añadirContacto(
    19849273512,
    "Saray Iris",
    "González",
    3214590607,
    " ",
    "El Retiro",
    "Carrera 85  #33 A 102"
  )
);

modificarContacto(
  0,
  1,
  añadirContacto(
    13267204693,
    "Lina María",
    "Montemayor Sépulveda",
    3129734068,
    " ",
    "El Carme de Viboral",
    "Diagonal 45 C #43 - 102"
  )
);

eliminarContacto(1, 1);
verLista();
