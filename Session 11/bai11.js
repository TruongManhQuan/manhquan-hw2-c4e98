
// const data = fetch('https://pokeapi.co/api/v2/pokemon/psyduck?fbclid=IwAR2-zRj3K498esxExF_nJE0NpWjUGQ6FSjOyu0tbWzeOP_fzkCtyGspA4To');
// setTimeout(function() {
//     console.log(data)
// }, 5000) ;


// async function getData() {
// const data = await fetch('https://pokeapi.co/api/v2/pokemon/psyduck?fbclid=IwAR2-zRj3K498esxExF_nJE0NpWjUGQ6FSjOyu0tbWzeOP_fzkCtyGspA4To');
// let dataDetail = await data.json()
// console.log(dataDetail);

// }

// getData();

// Khong dùng async, await

// function promise() {
//     return new Promise(
//         function(resolve, reject) {
//         resolve(fetch('https://pokeapi.co/api/v2/pokemon/psyduck?fbclid=IwAR2-zRj3K498esxExF_nJE0NpWjUGQ6FSjOyu0tbWzeOP_fzkCtyGspA4To'))
//     })
// };

// promise()
// .then(function(a) {
//     console.log(a);
// });

// Dùng arrow function
promise = () => {
    return new Promise(
        (resolve, reject) => {
            resolve(fetch('https://pokeapi.co/api/v2/pokemon/psyduck?fbclid=IwAR2-zRj3K498esxExF_nJE0NpWjUGQ6FSjOyu0tbWzeOP_fzkCtyGspA4To'))
        }
    )

}

promise()
.then((a) => {
    console.log(a);
});

