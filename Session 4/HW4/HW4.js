// Cau 1:

// const product = {
//     name: 'Xiaomi rice cooker' ,
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'White',
//     };

    // for (let x in product) {
    // console.log(x);
    // }

    //X: nhận giá trị là thuộc tính (name, price, brand, color)
    // In ra các gtri
    // Cach 1:

// let a = [];
// a.push(product);
// console.log(a);


// for (let i = 0; i < a.length; i ++ ) {

// console.log(`name: ${a[i].name}`);
// console.log(`price: ${a[i].price}`);
// console.log(`brand: ${a[i].brand}`);
// console.log(`color: ${a[i].color}`);

// }

// Cach 2:
// for (let x in product) {
//    console.log(`${x}: ${product[x]}`);
// }


// Cau 2: 
// in ra cac gia tri cau thuoc tinh
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
//     };

//     // cach 1:
//     console.log(task.subject);
//     console.log(task.createdBy);
//     console.log(task.assignTo);
//     console.log(task.dueDate);
//     console.log(task.expectedHours);

//     //cach2:
//     let {subject,createdBy,assignTo,dueDate,expectedHours} = task;
//     console.log(subject);
//     console.log(createdBy);
//     console.log(assignTo);
//     console.log(dueDate);
//     console.log(expectedHours);

// Cau 4:

// let dictionary = {
//     debug: `The process of figuring out why your program has a certain error and how to fix it`,
//     done: `When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)`,
//     defect: `The formal word for ‘error’`,
//     pm: `The short version of Project Manager, the person in charge of the final result of a project`,
//     uiux: `UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels`,

// };

// alert("Hi there, this is dev dictionary");
// let a = prompt("Enter a keyword");
// if (a == 'debug' || a == 'done'|| a == 'defect'|| a == 'pm' || a =='uiux') {
//     console.log( ` ${a}: 
//     ${dictionary[a]} `);

// }else {
//     console.log('We could not find your word : dev');
// }

// upate dev :

// alert("Hi there, this is dev dictionary");
// let a = prompt("Enter a keyword");
// if (a == 'debug' || a == 'done'|| a == 'defect'|| a == 'pm' || a =='uiux') {
//     console.log( ` ${a}: 
//     ${dictionary[a]} `);

// }else {
//     let b = prompt("We could not find your word : dev, leave your explanation");
//     if (b == "Developer, creature active at night, fed by noddles and rebull") {
//         alert('Done');
//         let a = prompt("Enter a keyword");
//         dictionary.dev = (`Developer, creature active at night, fed by noddles and rebull`);
//         console.log(`dev: 
//         ${dictionary.dev}`);

//     } else {
//         console.log("Erros");
//     }
    

// }

// Cau 5:
// let mobile1 = {
//     Name: 'Xiaomi portable charger 20000mah',
//     Brand: 'Xiaomi',
//     Price: 428,
//     Color: 'White',
//     Category: 'charger',

// };

// let mobile2 = {
//     Name: 'Vsmart active 1',
//     Brand: 'Vsmart',
//     Price: 5487,
//     Color: 'Black',
//     Category: 'phone',
// };

// let mobile3 = {
//     Name: 'Iphone X',
//     Brand: 'Apple',
//     Price: 21490,
//     Color: 'Gray',
//     Category: 'phone',

// };

// let mobile4 = {
//     Name: 'Samsung galaxy a9',
//     Brand: 'Samsung',
//     Price: 8490,
//     Color: 'Blue',
//     Category: 'phone',

// };

// // // // // 5.1
// let arrMobile = [];
// arrMobile.push(mobile1);
// arrMobile.push(mobile2);
// arrMobile.push(mobile3);
// arrMobile.push(mobile4);

// let sum = arrMobile;
// // 5.1
// // for (let i = 0; i < sum.length; i++) {

// //     console.log(` Name: ${sum[i].Name}`);
// //     console.log(` Price: ${sum[i].Price}`);
// // }

// // 5.2
// for (i= 0; i< sum.length; i++) {
//     console.log(`#${i+1}. ${sum[i].Name}`);
//     console.log(`Price: ${sum[i].Price}`);

// }

// let a = Number(prompt(`Enter product position`));
// a = a - 1;    // muc dich nguoi dung nhap se lay dc so index theo dung ycau của đề bài, vì so thuc te nhạp la dạng STT ko fai dang Index
// for (let i = 0; i < sum.length; i++){
//     if (i == a){
//         for (let x in sum[i]){
//             console.log(`${x} : ${sum[i][x]}`); // x : in ra cac thuoc tinh cua obj
//                                                 // Sum[i]: se ra phần tử trong mảng, mà mảng lại ở dạng Obj: mobile4 = {Name: "Iphone X", Brand: "Apple", Price: 21490, Color: "Gray", Category: "Phone"}
//                                                 // Sum[i][x]: de in ra cac gtri cua thuoc tinh trong Obj  mobile4.Name; mobile4.Brand
//         }
//     }
// }   

// 5.3

// let a = prompt('Enter your category');
// for (let i = 0; i < sum.length; i++) {
//     if (a == sum[i].Category) {
//         console.log(`Name: ${sum[i].Name}`);
//         console.log(`Price: ${sum[i].Price}`);
//     }
// }


// 5.4

// mobile1.Providers = ['phukienzero','dientucc'];
// mobile2.Providers = ['tgdd','Vhstore'];
// mobile3.Providers = ['tgdd'];
// mobile4.Providers = ['tgdd'];

// for (let i = 0; i < sum.length; i++) {
//             console.log(`${sum[i].Name}`);
//             console.log(`Price: ${sum[i].Price}`);
//             console.log(`Providers: ${sum[i].Providers}`);
       
//     }
    
// // 5.5
// let a = prompt('Enter Providers');
// for (let i = 0; i < sum.length; i++) {
//     if (a == sum[i].Providers) {
//         console.log(`Name: ${sum[i].Name}`);
//         console.log(`Brand: ${sum[i].Brand}`);
//         console.log(`Price: ${sum[i].Price}`);
//         console.log(`Color: ${sum[i].Color}`);
//         console.log(`Category: ${sum[i].Category}`);
//         console.log(`Providers: ${sum[i].Providers}`);

//     }
// }

// Cau 6:
//alert(`Hi there, this is your learning tasks to front-end developer career:`);
let a1 = {
    name: ' HTML',
    complete: 'false',

};

let a2 = {
    name: 'CSS',
    complete: 'false',
};

let a3 = {
    name: 'Basic of Javascrip',
    complete: 'false',
};

let a4 = {
    name: 'Node Package Managet (npm)',
    complete: 'false',
};

let a5 = {
    name: 'Git',
    complete: 'false',
};

let arrA = [];
arrA.push(a1);
arrA.push(a2);
arrA.push(a3);
arrA.push(a4);
arrA.push(a5);

let sum = arrA;
// for ( let i =0; i< sum.length; i++ ) {
//     console.log(`${i+1}. ${sum[i].name}`);
//     console.log(`complete: ${sum[i].complete}`);
// }

// 6.2
// let a6 = {
//     name: 'ReactJS',
//     complete: 'false',
// };

// sum.push(a6);

let a = prompt('Enter your command (New, Delete, Update, Complete');

// if (a == 'new') {
//     let b = prompt('Enter new task');
//     b = sum[5].name ;
// }

// for (let i = 0; i < sum.length; i ++) { 
//     console.log(`${i+1} . ${sum[i].name}`);
//     console.log(` Complete: ${sum[i].complete}`);
// }



// // 6.3

// if ( a == 'update') {
//     let b = Number(prompt('Enter position:'));
//     b = b-1;
//     let c = prompt ('Enter new title');
//     for ( let i = 0; i < sum.length; i++) {
//         if (i == b) {
//         sum[i].name = c;

// }


//     }
// }

// for ( let i = 0; i < sum.length; i++) {
//     console.log(`${i+1}. ${sum[i].name}`);
//     console.log(`Complete:  ${sum[i].complete}`);
// }
