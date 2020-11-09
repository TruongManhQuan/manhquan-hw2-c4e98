// Câu 1: Tạo Promise bằng 2 cách:

// cách 1: 
// var promise = new Promise(
//     function(resolve, reject) {
//         setTimeout(function() {
//             resolve('Promise is da best');
//         }, 5000)
//     }
// )

// promise.then(function(a) {
//     console.log(a);
// })


// cách 2:
// function sleep(ms) {
//     return new Promise(
//         function(resolve, reject) {
//             setTimeout(function() {
//                 resolve();
//             },ms)
//         }
//     );
// }

// async function promise()  {
//     await sleep(5000);
//     console.log('Promise is da best');
// }

// promise();


// câu 4: Tạo 1 rỗng , tạo ra số ngẫu nhiên từ 0-10 và thực hiện các yêu cầu:
//  x < 0 : fail: số nhơ hơn 0
//  x > 10: fail: số lớn hơn 10
//  0 <x< 10: Chính xác


// function randomNumber() {
//   return Math.floor(Math.random() * 11);
// }

// const x = randomNumber();
// if (x < 0) {
// console.log(`Failed: ${x} the number is smaller than 0`);
// } else if (x > 10) {
// console.log(`Failed: ${x} the number is bigger than 10`);
// } else {
// console.log(`${x} Passed, bravo`);
// }


// câu 5:Cho tham số và đối số, chọn 1 số ngẫu nhiên từ a- b

// function randomInteger(a, b) {
//     return Math.floor(Math.random() * (a - b + 1)) + a;
// }

// const x = randomInteger(4, 16);
// if (x < 4) {
// console.log(`Failed: ${x} the number is smaller than 4`);
// } else if (x > 16) {
// console.log(`Failed: ${x} the number is bigger than 16`);
// } else {
// console.log(`${x} Passed, bravo`);
// }


// câu 6: tính gitri theo công thức căn bậc hai của (x1-x2)^2 + (y1-y2)^2
function calculate (x1, y1, x2, y2) {
    let a = ( x1 - x2 ) ** 2;
    let b = ( y1 - y2 ) ** 2;
    let c = Math.sqrt(a + b);
    return c;

};

const d = calculate (3, 10, 0, 6);
if (d !== 5) {
console.log(`Failed: ${d} the calculation is wrong`);
} else {
console.log( ` ${d} Passed, bravo`);
};
