// Câu 1 Hoan doi bien
//cach 1:
// let a = 1;
// let b = 2;
// [a, b] = [b, a];

// console.log(b);

// //cach 2:
// let a = 1;
// let b = 2;
// let c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);


// // Câu 2 Tach Chuoi thanh Mang:
// let a = ' Hello, beauty, there';
// let b = a.split();
// console.log(b);

// // Câu 3 Toan tu ... dùng in các phần tử trong mảng mà không cần dùng vòng lặp
// const a = [4, 5, 7, -8];
// console.log(...a);

// Câu 4:

// let c = ['Jeans', 'T-Shirt', 'Socks'];

// while (true){
//     let d = prompt(`Hi there, welcome to shop admin panel, what do you want ( C,R,U,D,E) `);
//     if (d === 'R'){
//         for (let i= 0; i < c.length; i++) {
//             console.log(`${i+1}. ${c[i]}`);
//         }
       
//     } 
    
    
//     else if (d === 'C') {
//         let e = prompt(' Enter the name of the new item:');
//         alert('Done');
//         c.push(e);
//     } 
    
    
//     else if ( d === 'U') {
//     let f = Number(prompt("Enter the position you want to update"));
//     let g = prompt(" Enter the new name");
//     alert("Done");
//     c[f-1] = g;

//     }

//     else if (d === 'D' || d=== 'd') {
//         let h = Number(prompt("Enter the position you want to delete"));
//         alert("Done");
//         c.splice(h,1);
//     }
//     else if (d === "E"){
//         break;
//     }

//     else  {
//         console.log(' This command is not supported');
//     }

// }


// Cau 5:
// Người dùng nhập một dãy số, các số được phân tách bằng
// dấu phẩy, tính tổng các số và hiển thị nó cho người dùng

// let a = prompt(`Nhap day so duoc cach nhau bang dau (,)`);
// let b = a.split(',');

// let sum = 0;
// for (let i= 0; i < b.length; i++) {
//     sum = sum + Number(b[i]);
// }

// alert(` Tong cua day so la ${sum}`);

// / Người dùng nhập một dãy số, các số được phân tách
//  bằng dấu phẩy, tìm số nhỏ nhất hien thi cho người dùng

//cach 1

// let a = prompt(`Nhap day so duoc cach nhau bang dau (,)`);
// let b = a.split(',');
// let min = Number(b[0]);
// for (let i = 0; i < b.length; i++){
//     if (b[i] < min){
//         min = b[i];
//     }
// }
// alert(`So nho nhat la ${min}`);

// //cach 2
// let a = prompt(` nhap day so `);
// let b = a.split(',');
// console.log(Math.min(...b));




// Cau 8:
//8.1 Tao mang co kich thuoc dan cuu va in ra

// let a = [5, 7, 300, 90, 24, 50, 75];
// // console.log(`Hello, my name is Quan and  here is my sheep sizes: `);
// // console.log(...a);

// // //8.2 Tim size cuu lon nhat

// // console.log(`Now my biggest sheep has sizes ${Math.max(...a)}; let's shaves it`);

// // //8.3 Dua gia tri max ve gia tri mac dinh, vi du 8


// let b = a.indexOf(7); // bien.indexOf() : tìm vị trí index cua phần tử trong mang
// console.log(b);




// let a = [5, 7, 300, 90, 24, 50, 75];

// let c = a.indexOf(300)
// a[c] = 8;          
  
// console.log("After shearing, here is my flock");
// console.log(...a);


// neu so nhap co trong mang thi bao is found in my array
// neu so nhap khong co trong mang bao is Not found un my array
// const b = [3, 4, 6, -9, 10, -88, 2];
// let a = Number(prompt('Enter a Number'));
// let tg;

// for (let i = 0; i < b.length; i++){
//     if (a == b[i]){
//         // tg = true;
//         alert(`${a} is FOUND in my array at index ${i}`);
//         break;
        
//     }
//     // else{
//     //     tg = false; 
    
//     // }
    
// }
// if (tg == false){    
//     alert(`${a} is NOT found in my array`);
// }