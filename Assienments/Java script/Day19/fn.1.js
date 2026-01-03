// let area=[2,4,6,8,7]
// area.forEach(a=>console.log(a))

// let rolex=area.map(a=>a*3);
// console . log(rolex)

// function kavi(a,b){
//     return a+b
// }
// let rolex=kavi(10,20)
// console . log(rolex);

function ak(){
    return("Ajithyeeee")
}
let str=ak();
console . log(str);


function kavi(callback){
    callback()
}
function abi(){
    console.log("This is the End")
}
kavi(abi);