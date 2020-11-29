fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((datos) => {
    return datos.json();
  })
  .then((otros) => {
    // console.log(otros.results)
    otros.results.forEach((element) => {
      // console.log(element.name);
    });
  })
  .catch((error) => console.log(error));

//asyn await
const consultaDatos = async () => {
  try {
    const pidedatos = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const misdatos = await pidedatos.json();
    const miarreglo = misdatos.results.map((poke) => poke.name);
    console.log(miarreglo);
  } catch (error) {
    console.log(error);
  }
};
consultaDatos();
//HOLA MELA
