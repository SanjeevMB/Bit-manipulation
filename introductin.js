/* ===== Bit manipulation ===== */


/*
 
If a | b = c, c >= a or c >= b =====> (1 | 1 = 1), (1 | 0 = 1), (0 | 1 = 1), (0 | 0 = 0)
 
If a & b = c, c <= a or c <= b =====> (1 & 1 = 1), (1 & 0 = 0), (0 & 1 = 0), (0 & 0 = 0)
 
If a ^ a = 0,                  =====> (1 ^ 1 = 0), (1 ^ 0 = 1), (0 ^ 1 = 1), (0 ^ 0 = 0)
 
Left shift means appending 0,   100 << 2 = 10000
 
Right shift means removing bits,    100 >> 0 = 1
 
*/


console.log(30 | 40) // Result >= 40

console.log(30 & 40) // Result <= 30

console.log(30 ^ 30) // Result = 0

console.log(4 >> 2) // Result = 1

console.log(4 << 2) // Result = 16