//## 2. feladat
//    - A`02/solution/js/numericConverter.js` fájlban dolgozz!
//    - Készíts egy függvényt `numericConverter` néven!
//    - Ez a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas és tizenhatos
//      számrendszerbe is.
//    - Ezeket az értékeket egy objektumban add vissza.A property - k neve legyen: binary, octal, hexa.

function numericConverter(d) {
    const binary = Number(d).toString(2);
    const octal = Number(d).toString(8);
    const hexa = Number(d).toString(16);

    return ({binary, octal, hexa})
};
export default numericConverter