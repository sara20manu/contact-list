let listaContactos = [
  (contacto1 = {
    id: 11203948031,
    nombres: "Raúl Daniel",
    apellidos: "Jímenez Rendón",
    teléfono: 311385930,
    ubicaciones: {
      ciudad: "El Carmen de Viboral",
      dirección: "Calle principal 34 A # 140 E 45",
    },
  }),
  (contacto2 = {
    id: 19803063918,
    nombres: "Marisol",
    apellidos: "Mendoza Florez",
    teléfono: 3105869930,
    ubicaciones: {
      ciudad: "Medellín",
      dirección: "Carrera 5 C # 10 - 15",
    },
  }),
  (contacto3 = {
    id: 10406491230,
    nombres: "Hemerson Camilo",
    apellidos: "Luna Restrepo",
    teléfono: 310750920,
    ubicaciones: {
      ciudad: "Itagüi",
      dirección: "Calle 12  # 50 B 35",
    },
  }),
];

//realizo las funciones añadir, eliminar, imprimir y modificar

function añadirContacto(id, nombres, apellidos, teléfono, ubicaciones = {}) {
  return { id, nombres, apellidos, teléfono, ubicaciones };
}

function eliminarContacto(nombre) {
  for (let i = 0; i < listaContactos.length; i++) {
    if (listaContactos[i].nombres === nombre) {
      listaContactos.splice(i, 1);
    }
  }
}

function verLista() {
  console.log(listaContactos);
}

function modificarContacto(modiNombre, modiContact) {
  for (let i = 0; i < listaContactos.length; i++) {
    if (listaContactos[i].nombres === modiNombre) {
      listaContactos.splice(i, 1, modiContact);
    }
  }
}

// Realizo las funciones agrego 2 contactos, modifico el primer contacto y elimino al primer contacto que agregue para mostrar la lista organizada

listaContactos.push(
  añadirContacto(23436578563, "Mauricio", "Espitia Lopera", 3224923984, {
    ciudad: "La Ceja",
    dirección: "Calle 2 B #03-89",
  })
);

listaContactos.push(
  añadirContacto(19849273512, "Saray Iris", "González", 3214590607, {
    ciudad: "El Retiro",
    dirección: "Carrera 85  #33 A 102",
  })
);

modificarContacto(
  "Raúl Daniel",
  añadirContacto(
    13267204693,
    "Lina María",
    "Montemayor Sépulveda",
    3129734068,
    { ciudad: "El Carme de Viboral", dirección: "Diagonal 45 C #43 - 102" }
  )
);

eliminarContacto("Mauricio");

verLista();
