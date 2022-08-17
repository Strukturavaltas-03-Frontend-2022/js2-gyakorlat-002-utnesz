//## Előkészítés
//    - Az`app.js` fájlban dolgozz!
//    - Ne felejtsd el az `npm i` parancsot kiadni!
//    - Teszteléshez az `npm test` parancsot használhatod.
//
//## 1. feladat
//    - A`01/solution/js/summarize.js` fájlban dolgozz!
//      - Készíts egy függvényt `summarize` néven!
//      - Ez a paraméterként kapott tetszőleges darabszámú, tetszőleges értékű egész számot összeadja, és visszatér az 
//        összeadás végeredményével. 
//      - A paraméterként kapott értékek egyszerű number típusúak legyenek!
//      - Amennyiben bármelyik paraméter értéke vagy a részeredmény meghaladja a biztonságos tartományt, 
//        automatikusan konvertáljad `BigInt` - be, és természetesen a visszatérési érték is `BigInt` típusú legyen!



function summarize (...z) {
        const nrArr = [...z].filter(numbers => Number.isInteger(numbers));
        let finNrArr;
    nrArr.some(numbers => numbers > Number.MAX_SAFE_INTEGER) === true 
    ? finNrArr = nrArr.map(numbers => BigInt(numbers)) 
    : finNrArr =nrArr.map(numbers => Number(numbers))
    return finNrArr.reduce((x, y) => x + y)
};

export default summarize
