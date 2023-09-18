
function logestCountry (country) {
    let aux = null;
    const espacio = / /;
    for (let i = 0; i < country.length-1; i++) {
       for (let j = 0; j < country.length-1; j++) {
        if (country[j].replace(/ /g,"").length > country[j + 1].length) {
            aux = country[j];
            country[j] = country[j + 1];
            country[j + 1] = aux;
        }
        
       }
        
    }

    return country[country.length-1];
}

const paises = [
    "Ecuador",
    "Egipto",
    "Eslovaquia",
    "Eslovenia",
    "España",
    "Estados Unidos",
    "Francia",
    "Georgia",
    "Gambia",
    "Hungría",
    "México",
    "Mónaco",
    "Polonia",
    "Reino Unido",
    "República Dominicana",
    "China"
];

let pais = logestCountry(paises);
console.log(`El país es ${pais} con una logitud de ${pais.replace(/ /g,"").length}`);