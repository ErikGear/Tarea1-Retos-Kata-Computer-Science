function esPalindromo (palabra) {
   const palabraArreglo = palabra.split("").reverse();
   console.log(palabraArreglo);
   const palabraInvertidad= palabraArreglo.join("");

   if (palabra === palabraInvertidad) {
      alert(`La palabra ${palabra} es un palindromo`);
   } else {
      alert(`La palabra ${palabra} no es un palindromo`);
   }
   
}

let palabra = prompt("Ingrese una palabra");

esPalindromo(palabra);