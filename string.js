/**
 * length
 */

console.log(string.length); // 17

/**
 * Recuperando um caractere de string específico
 */

/**
 * Número de caractere = 17 (começa a contagem do 1)
 * Número de posições = 16 (Começa a contagem do 0)
 *
 * O length vai retornar a quantidade de caractere sendo assim quando damos o menos -1 pegamos a ultima posição
 */

console.log(string[string.length - 1]);

/**
 * indexOf
 *
 * Verifica se existe algo dentro da string
 * Retonar 0 se exitir e -1 caso não exista
 */

console.log(string.indexOf("This is"));

var string = "This is my string";

/**
 * slice
 */

console.log(string.slice(0, 3)); // thi

/**
 * toLowerCase();
 * toUpperCase();
 */

var radData = "My NaMe Is MuD";

console.log(radData.toLocaleLowerCase()); // my name is mud
console.log(radData.toLocaleUpperCase()); // MY NAME IS MUD

console.log(radData[0].toLocaleLowerCase()); // MY NAME IS MUD

/**
 * replace
 */

var radData = "My NaMe Is MuD";

// Somente a primeira ocorrecia
console.log(radData.replace("M", "P")); // Py NaMe Is MuD

// // Todas as ocorrecias
console.log(radData.replaceAll("M", "L")); // Ly NaLe Is LuD

/**
 * includes
 */

var radData = "My NaMe Is MuD";

console.log(radData.includes("My")); // true
console.log(radData.includes("Your")); // false

/**
 * startsWith
 * endsWith
 */
var radData = "My NaMe Is MuD";

console.log(radData.startsWith("My NaMe")); // true
console.log(radData.startsWith("NaMe")); // false
console.log(radData.endsWith("MuD")); // true
console.log(radData.endsWith("Is")); // false
