function numeroAleatorio(minimo, maximo) { 
    let numero = Math.random();
    numero = numero * (maximo - minimo) + minimo;
    numero = Math.round(numero);
    return numero;
  }
  let minimo = 1;
  let maximo = 10;
  let resultado = numeroAleatorio(minimo, maximo);
  console.log(`Generador de numeros aleatorios`);
  console.log(`Se generó un numero en el rango de ${minimo} a ${maximo}`)
  console.log(`==> Resultado : ${resultado}`)