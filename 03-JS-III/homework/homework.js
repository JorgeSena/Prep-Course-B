// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    /**
     * Bucle While
     */
    // var numero=1;
    // var acumulador=0;
    // while (numero<11) {
    //   acumulador=acumulador+numero;
    //   numero++;
    // }
    // return acumulador;

    /**
     * Bucle for
     */
    var acumulador=0;
    for (var numero = 0; numero < 11; numero++) {
      acumulador+=numero;  // acumulador=acumulador+numero
    }
    return acumulador;

}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:

  /**
   * Bucle for
   */
  // var arrayPar = [];
  //   for (var i = 0; i < array.length; i++) {
  //       if (array[i]%2===0) {
  //           arrayPar.push(array[i]);
  //       }
        
  //   }
  //   return arrayPar;

    /**
     * Bucle while
     */
     var arrayPar = [];
     var i = 0;
     
     while (i < array.length) {
         if (array[i] % 2 === 0) {
             arrayPar.push(array[i]);
            
         }
         i++;
     }
     return arrayPar;
 
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:

     /**
    * Bucle map
    */
    //   function cuadrado(elemento) {
    //     return Math.pow(elemento, 2);
    // }
    // var arrayCuadrado = array.map(cuadrado);
    // return arrayCuadrado;

    /**
    * Bucle for ... of
    */
  //  var cuadrado=[];
  //  for (var elemento of array) {
  //       cuadrado.push(Math.pow(elemento,2)) ;
  //  }
  //  return cuadrado;

   /**
    * Bucle while
    */

  // var cuadrado=[];
  // i=0;
  // while (i<array.length) {
  //     cuadrado.push(Math.pow(array[i],2))
  //     i++;
  // }
  // return cuadrado;

   /**
    * Bucle for
    */
    // var cuadrado=[];
    // for (var i = 0; i < array.length; i++) {
    //     cuadrado.push(Math.pow(array[i],2))
    // }
    // return cuadrado;

   /**
    * Bucle forEach
    */
    var cuadrado=[];
    array.forEach(function (elemento) {
        cuadrado.push(Math.pow(elemento,2));
    })
    return cuadrado;

}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:

  /**
     * reduce
     */
  //  var valorInicial=0;
  //  var resultado=array.reduce(function (valorInicial,valorActual) {
  //      return valorInicial+valorActual;
  //  })
  //  return resultado;

   /**
     * while
     */
    // var indice=0;
    // var contador=0;
    // while (indice<array.length) {
    //     contador=contador+array[indice];
    //     indice++;
    // }
    // return contador;

    /**
     * for
     */
    //  var contador=0;
    //  for (var i = 0; i < array.length; i++) {
    //      contador=contador +array[i];
    //  }
    //  return contador;

    /**
     * map
     */
    //  var contador = 0;
    //  var sumar=array.map(function(elemento){
    //      return contador = contador +elemento;
    //  })
    //  return contador;

     /**
     * for ... of
     */
    // var contador=0;
    // for (var elemento of array) {
    //   contador=contador + elemento;
    // }
    // return contador;

     /**
     * forEach
     */
      var contador=0;
      array.forEach(function (elemento){
       contador=contador + elemento;
      })
      return contador;

}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:

  /**
     * toString
     */
    // return num.toString().length;

    /**
     * Concatenando con un string vacio ""
     */
     var largo = num + "";
     return largo.length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
