const colors=["red","white","green","Yellow","Pink"];
console.log(colors)

colors.push("sky blue");
console.log(colors)

colors.unshift("black");
console.log(colors)

let area=[2,4,6,8,7]
area.forEach(a=>console.log(a))

let rolex=area.map(a=>a*3);
console . log(rolex)

let numbers = [10, 25, 50, 60, 75, 30, 90];

let result = numbers.filter(num => num > 50);

console.log(result);
