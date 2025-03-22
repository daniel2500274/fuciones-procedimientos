function palabraMasLarga(cadena) {
    let palabras = cadena.split(" ");
   
    let palabraMasLarga = palabras[0];
   
    for (let i = 1; i < palabras.length; i++) { 
      if (palabras[i].length > palabraMasLarga.length) { 
        palabraMasLarga = palabras[i];
      }
    }
   
    return palabraMasLarga;
  }
  
  let texto = "La programación es muy interesante";
  let resultado = palabraMasLarga(texto);
  console.log(`Cadena ingresada \n=> ${texto} \nPalabra más larga de la cadena \n=> ${resultado}`); 