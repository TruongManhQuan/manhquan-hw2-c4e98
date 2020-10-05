//Ex1
// cho nguoi dung nhap tuoi
// check tuoi nguoi dung
// neu tuoi < 18 => console.log( " You cannot enter ")
// neu tuoi 18 < age < 21 => (" You can enter but cannot drink")
// neu tuoi > 21 => ("You are free to drink")

// let a = Number(prompt(" Nhap tuoi"));

// if (a < 18 ) {
//     console.log(" You cannot enter");
// } else if ( 18 < a && a < 21) {
//     console.log(" You can enter but cannot drink");
// } else if ( a > 21 ) {
//     console.log("You are free to drink");
// }

// Ex2
// nguoi dung nhap vao can nang (kg) + chieu cao (cm)
// // viet ung dung check chi so BMI


// let weight = Number(prompt(" Nhap can nang"));
// let height = Number(prompt(" Nhâp chieu cao"));
// let height2 = height/100;
// let BMI = weight / ( height2 * height2);

// if (BMI < 16 ) {
//     console.log( ` ${BMI}  Thieu can nang ` );
// } else if ( BMI >= 16 && BMI < 18.5) {
//     console.log(` ${BMI} Thieu can `);
// } else if ( BMI >= 18.5 && BMI < 25 ) {
//     console.log(` ${BMI} Binh thuong `);
// } else if (BMI >= 25 && BMI <30 ) {
//     console.log(` ${BMI} Thua can `);
// } else {
//     console.log(` ${BMI} Beo phi`);
// }

// Danh  gia AQI (chat luong khong khi)

// let a = parseInt(prompt(" Nhap gia tri AQI"));
// if (a >= 0 && a <= 50) {
//     console.log(" Chat luong khong khi tot");
// }else if (a >= 51 && a <= 100) {
//     console.log("Chat luong khong khi trung binh");
// }else if (a >= 151 && a <= 200) {
//     console.log(" Chat luong khong khi xau");
// }else if (a >= 201 && a <= 300) {
//     console.log("Chat luong khong khi rat xau");
// }else {
//     console.log("Chat luong khong khi nguy hai");
// }






// // Tinh giai thua cua 1 so 

// count sẽ lấy giá trị count trc nhân với số lần lặp của i
// i = 1 >>> count = 1 * 1 = 1   ( count= 1 và i= 1 )
// i = 2 >>> count = 1 * 2 = 2   ( count= 1 và i= 2 )
// i = 3 >>> count = 2 * 3 = 6   ( count= 2 và i= 3 )
// i = 4 >>> count = 6 * 4 = 24  ( count= 6 và i= 4 )

let n = Number(prompt("Nhap n"));
let count = 1 ;
for(let i = 1; i <= n; i = i + 1 ) {
    count = count * i
    console.log(i);
}
console.log(` Giai thua = ${count} `);




// Cho nguoi dung nhap 3 so. Tim max

// let a = parseInt(prompt(" Nhap so a "));
// let b = parseInt(prompt(" Nhap so b "));
// let c = parseInt(prompt(" Nhap so c "));

// if (a > b && a > c ) {
//     console.log(` Max cua 3 so la ${a} `);
// } else if (b > a && b > c) {
//     console.log(` Max cua 3 so la ${b} `);
// }else {
//     console.log(` Max cua 3 so la ${c} `);
// }



//Ex 4 cho nguoi dung nhap vao thang
// in ra mua

// let thang = parseInt(prompt(" Nhap thang"));

// switch (thang) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Mua xuan");   
//         break;

//     case 4:
//     case 5:
//     case 6:
//         console.log("Mua ha");
//         break;

//     case 7:
//     case 8:
//     case 9:
//         console.log("Mua thu");
//         break;

//      case 10:
//      case 11:
//      case 12:     

//         console.log("Mua dong");
//         break;

//         default:
//         console.log("Khong phai thang trong nam");

// }


// Ex5:
// in ra cac so cach nhau 3 don vi tu 0 = 20
// in ra cac so tu 5 => 50 cach nhau 10 don vi

// for ( i =0; i < 20; i = i +3) {
//     console.log(i);
// }

// for (i = 5; i <= 50; i= i + 10) {
//     console.log(i);
// }

// EX 6:
//cho nguoi dung nhap vao so a
// su dung vong lap for tu 0-a, kiem tra so i
// neu i la so chan => in ra "so chan"
// neu i la so le => in ra "so le"

// let a = parseInt(prompt(" Nhap vao so a"));

// for (i = 1; i <= a; i = i + 1 ) {
//     console.log(i);
//     if (i % 2 == 0) {
//         console.log( ` ${i} la so chan `);
//     } else if ( i % 2 == 1) {

//         console.log(` ${i} la so le `);
//     } 
        
// }

//Viết chương trình cho người dùng nhập vào một số, kiểm tra số đó là số chẵn hay số lẻ.

// let a = parseInt(prompt(" nhap so vao "));


// switch (a % 2) {
//     case 0:
//         console.log(` ${a} la so chan `);
//         break;
//     case 1:
//         console.log(` ${a} la so le `);
//         break;

//         default:
//             console.log(` ${a} khong phai la so`);
// }
