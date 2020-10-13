// let person = ['Nam', 19, 'Hanoi', 25, false];
// console.log(person);


//OBJECT: doi tuong

// Object rong
// let person = {}
// console.log(person);

// let person = {
//     name : 'Nam'
// };
// console.log(person);

// let person = {
//         name: 'Nam',
//         age: 19,
// };
// console.log(person);

// Init (after 7) Khai bao bien ten 1 bo phim cos cac thuoc tinh
// title, For example: ‘The dark night rises’
// year, For example: 2012
// rate, For example: 8.4

// let movie = {
// //     tenphim : 'The dark night rises',
// //     year: 2012,
// //     rate: 8.4,
// // };
// // console.log(movie);


// // READ:

// // let person = {
// //     name: ' Nam',
// //     age: 19
// // };
// // console.log(person); 
// // console.log(person['name']); 
// // console.log(person.age); 

// //Read (after 9)
// // Doc thuoc tinh cua bo phim ra bang 2 cach:
// let movie = {
//     title : 'The dark night rises',
//     year: 2012,
//     rate: 8.4,
// };
// // // console.log(movie);

// // // //cach 1
// let a = movie.title;
// let b = movie.year;
// let c = movie.rate;
// console.log(a);
// console.log(b);
// console.log(c);

// // //cach 2
// console.log(movie['title']);

// // Doc thong tin ten, dao dien cua bo phim

// let c = prompt("What you want to know ?");
// let d = movie.title;
// alert(d);

// // neu khong co thong tin thong bao "Khong co trong co so du lieu"
// let movie = {
//         title : 'The dark night rises',
//         year: 2012,
//         rate: 8.4,
//     };
// let a = prompt(" Nhap du lieu");

// if (movie[a] == null) {
//     console.log(`${a} Khong co trong co so du kieu`);
// }
// else {
//     console.log(movie[a]);
// }



// // UPDATE:
// let person = {
//         name: ' Nam',
//         age: 19
//     };


//     // // CACH 1:
//     // person.age = 20
//     // console.log(person.age);

//     // // Cach 2:
//     // person['age'] = 20
//     // console.log(person['age']);

//     person['age']++
//     console.log(person['age']);

//Update (after 10)
// tang ti le rate len 8.7
// let movie = {
//             title : 'The dark night rises',
//             year: 2012,
//             rate: 8.4,
//         };

//         movie['rate'] = 8.7;
//         console.log(movie['rate']);

// // // cong them 0.5 vao rate
// movie['rate'] = movie['rate'] + 0.5;
// console.log(movie['rate']);

// // let a = prompt(" nhap du lieu");
// // let c = prompt(`cap nhat du lieu`);
// // movie[a] = c;
// // console.log(movie[a]);

// // // CREAT
// let movie = {
//     title : 'The dark night rises',
//     year: 2012,
//     rate: 8.4,
// };

// //cach 1:
// // movie.location = ('Hanoi');
// // console.log(movie);

// //cach 2:
// movie['location'] = ('Hanoi');
// console.log(movie);


// //Create (after 11)
// let a = prompt('what you want to update ?');
// alert(`${a} does not exist in your data, we will add new`);
// let b = prompt("Enter the new data");
// movie[a] = b;
// console.log(movie);

// //DELETE:
//  let movie = {
//         title : 'The dark night rises',
//         year: 2012,
//         rate: 8.4,
//     };


//     delete movie.year;
//     console.log(movie);


// // Array chứa Object

// let person1 ={ 
//     name: 'Nam',
//     age: 18,
// };

// let person2 ={
//     name: ' Duc',
//     age: 24,

// };

// let personArr = [];
// console.log(personArr);
// personArr.push(person1);
// personArr.push(person2);

// console.log(personArr); // day la 1 mang

// // // in ra phan tu dau tien trong mang
// console.log(personArr[0]); //se ra 1 object 

// // //boc tach object

// // //cach 1
// let p = personArr[0];
// console.log(p);
// console.log(p.name);
// console.log(p['age']);

// //cach 2:

// console.log(personArr[0].name);
// let a = personArr[0].name;
// console.log(a);

//Array of Objects (after 4)

// let movie1 = {
//     title: 'Attack on titans',
//     year: 2013,
//     rate: 8.1,
// };

// let movie2 = {
//     title: 'My boss my hero',
//     year :2006,
//     rate: 8.2,
// };

// let movie3 = {
//     title: 'Mind hunter',
//     year: 2017,
//     rate: 8.3,
// };

// let movie4 = {
//     title: 'Manhunt',
//     year : 2017,
//     rate: 8.4,

// };

// let arrMovie = [];
// arrMovie.push(movie1);
// arrMovie.push(movie2);
// arrMovie.push(movie3);
// arrMovie.push(movie4);
// console.log(arrMovie);

// // // In ra phim đầu tiên trong list phim
// console.log(arrMovie[0]);

// // // In ra tieu đề phim cuối cùng trong list phim
// console.log(arrMovie[3]);
// let a = arrMovie[3];
// console.log(a['title']);

// // // dung vong lap in ra cac phim trong list movie

// // //cach 1:
// for ( let i = 0; i < arrMovie.length; i++) {
//     let b = arrMovie[i];
//     console.log(b);

// }

// // //cach 2:

// for ( item of arrMovie) {  // for of: in ra phan tu trong mang
//     console.log(item);
// }


// // for ( index in arrMovie) {   // for in : in ra index cua mang
// //     console.log(index);
// // }

// // dung vong lap in ra cac phim trong list movie va thay doi cac gtri theo mau, tang gtri rate phim cuoi cung len 0.7

// arrMovie[3].rate =  arrMovie[3].rate + 0.7;
// for (let i = 0; i < arrMovie.length; i++){
//         console.log(arrMovie[i].title);
//         console.log(`Year : ${arrMovie[i].year}`);
//         console.log(`Rate: ${arrMovie[i].rate}`);
      
    
//     }
  
// //
// let obj = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3',
// };

// for (let prop in obj){                   
//     // console.log(prop);  // vong lap in ra thuoc tinh (prop1, prop2, prop3) cua obj
//     console.log(obj[prop]); // in ra item ( value1, value2,value3) cua obj
// }



// // Array va For

// for (let i = 0; i < personArr.length; i++) {
//     let t = personArr[i];
//     console.log(t);
//     console.log(t.name);
//     console.log(t.age);
// }


// Object chứa Array

// let person = {
//     name: 'Nam',
//     age: 18,
//     favs: ['netflix', 'cafe', 'code'],

// };  
// console.log(person);

// console.log(person.favs); //la 1 mang
// let p = (person.favs);
// console.log(p);
// console.log(p[1]);
// console.log(p[0]);

// for (let i = 0; i < p.length; i++) {
//     console.log(p[i]);

// }


// p.push ('chao');
// console.log(p);

// Tạo Obj 1 bộ phim chứa: tiêu đề, năm , rate, tên 3 diễn viên trong phim

// let movie = {
//     title: 'Attack on titans',
//     year: 2013,
//     rate: 8.8,
//     casts: ['Eren', 'Armin','Mikasa'],

// };
// console.log(movie);

// console.log(movie.title);
// console.log(` Year: ${movie.year}`);
// console.log(` Rate: ${movie.rate}`);
// let a = (movie.casts);
// console.log(...a);

// // them 1 dien vien vao mang casts:

// a.push('Levi')
// console.log(...a);

// //Object and Array mix structure

// let movie1 = {
//     title: 'Attack on titans',
//     year: 2013,
//     rate: 8.8,
//     casts : ['Eren', 'Armin', ' Mikasa'],
// };

// let movie2 = {
//     title: 'Mind hunter',
//     year: 2017,
//     rate: 8.6,
//     casts: 'Holden Bill',

// };

// let movie3 = {
//     title: 'Manhunt',
//     year: 2017,
//     rate: 8.1,
//     casts: 'Ted',
// };

// let arrMovie = [];
// arrMovie.push(movie1);
// arrMovie.push(movie2);
// arrMovie.push(movie3);
// console.log(arrMovie);
// let b = arrMovie;

// for ( let i = 0; i < b.length; i++ ) {
//     console.log(b[i].title);
//     console.log(` Year: ${b[i].year}`);
//     console.log(` Rate: ${b[i].rate}`);
//     console.log(` Cast: ${b[i].casts}`);
// }


