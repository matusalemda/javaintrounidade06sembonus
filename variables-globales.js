var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
  ["🦄", "🍦"],
  ["🌈", "👽"],
  ["👾", "🤖", "👹", "👺"],
  ["🤡", "💩", "🎃", "🙀"],
  ["☠️", "👾", "😽", "😼"]
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 25
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60
  }
];



// EJERCICIO: Crea una variable niveles y asígnale un array que contenga los niveles del juego, agrupados en objetos {} separados
// por comas.

// EJERCICIO: Para cada objeto (o "nivel"), asigna las propiedades de tarjetas y movimientosMax

// EJERCICIO: asigna uno o varios valores del array de grupoTarjetas a las tarjetas de cada nivel.

// BONUS: Modifica y amplia los niveles. Puedes convertir los movimientos "sobrantes" de cada nivel en la puntuación final del jugador.




// EXERCÍCIO: Crie uma variável de níveis e atribua a ela um array contendo os níveis do jogo, agrupados em objetos {} separados
// por vírgulas.

// EXERCÍCIO: Para cada objeto (ou "nível"), atribua as cartas e as propriedades movesMax

// EXERCÍCIO: atribua um ou mais valores do array CardGroup aos cartões de cada nível.

// BÔNUS: Modifique e expanda os níveis. Você pode converter os movimentos "sobras" de cada nível na pontuação final do jogador.


















