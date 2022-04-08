let L = Number(prompt("Cual es la cantidad de litros producidos?"));

let G = 3.785;

let PL = 3; 

let PG = (G * PL); 

let TG = (L / G); 

let GA = (TG * PG);

console.log(`Cantidad de litros producidos ${L}`);
console.log(`Cantidad de litros a galones producidos ${TG}`);
console.log(`Ganancia por galones de leche ${GA}`)