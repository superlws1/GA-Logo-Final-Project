function cl(text) {
    console.log(text)
}

let q1 = [1,2,3,4,5,6,7];

function onlyEven (arr) {
    if (arr % 2 === 0) {
        temp.push(arr);
    }
}
function onlyEvenFilter (arr) {
    return arr % 2 == 0
}

let temp = [];
q1.forEach(onlyEven)
cl(temp)
cl(q1.filter(onlyEvenFilter))

let q2 = [4, 2.2, 5, 6, 4.2, 8.2, 4];

function countIntegers (arr) {
    if (Math.floor(arr) === arr) {
        count ++;
    }
}
function countIntegersFilter (arr) {
    return Math.floor(arr) === arr
}

let count = 0;
q2.forEach(countIntegers)
cl(count)
cl(q2.filter(countIntegersFilter).length)

let q3 = ['my', 'cake', 'pudding'];

function lengths (arr) {
    return arr.length;
}

cl(q3.map(lengths));


let q4 = [1, 2, 3, 4, 5];

function getSquares (arr) {
    return arr * arr;
}
function getSquaresForEach (arr) {
    temp.push(arr*arr)
}

cl(q4.map(getSquares));
temp = [];
q4.forEach(getSquaresForEach);
cl(temp);

var inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
  ]

cl(inventory.filter(e => {
    return e.type == 'machine'
}).reduce((total,e) => {
    return total + e.value
},0))

cl(inventory.filter(e => {
    return e.type == 'machine' && e.value > 500
}))

