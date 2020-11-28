'use strict';

/* console.log(`global isNaN:`);
console.log(`'12' --> ${isNaN('12')}`);
console.log(`12 --> ${isNaN(12)}`);
console.log(`'hello' --> ${isNaN('hello')}`);
console.log(`NaN --> ${isNaN(NaN)}`);
console.log(`'NaN' --> ${isNaN('NaN')}`);
console.log(`\n`);
console.log(`Number.isNaN:`);
console.log(`'12' --> ${Number.isNaN('12')}`);
console.log(`12 --> ${Number.isNaN(12)}`);
console.log(`'hello' --> ${Number.isNaN('hello')}`);
console.log(`NaN --> ${Number.isNaN(NaN)}`);
console.log(`'NaN' --> ${Number.isNaN('NaN')}`); */

/* const maxInteger = Number.MAX_SAFE_INTEGER;
console.log(maxInteger);
const bigInteger = BigInt(maxInteger) ** 3n;
console.log(bigInteger); */


//1-2. feladat-----------------------------------
const adder = (...param) => {
    return BigInt(param.reduce((prevNum, currNum) => BigInt(prevNum) + BigInt(currNum)));
}

const resultSum = adder(12, 7, 0, -9);

console.log(resultSum);


//3. feladat---------------------------------

const convert = decNum => (
    {
        decimal: decNum,
        binary: decNum.toString(2),
        octal: decNum.toString(8),
        hexa: decNum.toString(16),
    }
);

console.log(convert(18));

