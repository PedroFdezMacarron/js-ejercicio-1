//Realizar una función que compruebe si los dos objetos son exactamente iguales(sus propiedades tienen el mismo valor)

const objA = {
  name: "Pepe",
  dni: "XXXXXXX",
  edad: 23,
};

// const objB = {...objA};

const objB = {
  name: "Pepe",
  dni: "XXXXXXX",
  edad: 23,
};

const comprueba = (object1, object2) => {
  let iguales = true;
  let claves = Object.keys(object1);

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return "distinto numero de propiedades";
  }

  for (let i = 0; i < claves.length; i++) {
    let clave = claves[i];

    if (!Object.hasOwn(object2, clave)) {
      return "distintas propiedades: falta " + clave;
    }

    if (object1[clave] !== object2[clave]) {
      iguales = false;
      break;
    }
  }
  return iguales;
};

console.log(comprueba(objA, objB));
