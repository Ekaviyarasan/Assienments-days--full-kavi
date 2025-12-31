// Definition:
// Scope determines where a variable can be accessed in a program.



let a=10

function rdx(){
    let a=30
    console.log(a)
}
rdx()

function netx(){
    let a=1000
    return function (){
        a++;
        console.log(a)

    }
    


}
const ax=netx()
ax()
ax()

  
setTimeout(()=>{
    console. log("no comments");

},1000);


const p = new Promise((resolve) => {
  resolve("Done");
});

p.then(result => console.log(result));



async function load() {
  return "Loaded";
}

load().then(console.log);