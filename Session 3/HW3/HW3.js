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

// Câu 3 Toan tu ... dùng in các phần tử trong mảng mà không cần dùng vòng lặp
// const a = [4, 5, 7, -8];
// console.log(...a);

// Câu 4:

// let c = ['Jeans', 'T-Shirt', 'Socks'];

// while (true){
//     let d = prompt(`Hi there, welcome to shop admin panel, what do you want ( C,R,U,D) `);
//     if (d === 'R'){
//         for (let i= 0; i < c.length; i++) {
//             console.log(`${i+1}. ${c[i]}`);
//         }
//        break;
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
//     c[f] = g;

//     }

//     else if (d === 'D') {
//         let h = Number(prompt("Enter the position you want to delete"));
//         alert("Done");
//         c.splice(h,1);
//     }

//     else {
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

// let a = prompt(`Nhap day so duoc cach nhau bang dau (,)`);
// let b = a.split(',');
// let min = Number(b[0]);
// for (let i = 0; i < b.length; i++){
//     if (b[i] < min){
//         min = b[i];
//     }
// }
// alert(`So nho nhat la ${min}`);



// Cau 8:
//8.1 Tao mang cos kich thuoc dan cuu va in ra

// let a = [5, 7, 300, 90, 24, 50, 75];
// console.log(`Hello, my name is Quan and  here is my sheep sizes: `);
// console.log(...a);

// //8.2 Tim size cuu lon nhat

// console.log(`Now my biggest sheep has sizes ${Math.max(...a)}; let's shaves it`);

// //8.3 Dua gia tri max ve gia tri mac dinh, vi du 8

// a[a.indexOf(300)] = 8;      // indexOf() : thay doi gia tri cua 1 phan tu trong mang thanh 1 gia tri khac
// console.log("After shearing, here is my flock");
// console.log(...a);