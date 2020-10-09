// // If - else if - else ( cau dieu kien re nhanh )
// if (condition 1) {
//     // do something
// } else if (condition 2) {
//     // do something 1
// } else if (condition 3) {
//     // do something 2
// } else  {
//     // do something else
// }


// Boolean (true/false)

// let stage = true;
// let single = false;

// Menh de so sanh
// == (bang), != (khac)
// === (hoac), !== ( so sanh gia tri vA KIEU GIA TRI)
// >, <, >=, <=

// console.log(1 !=1); false
// console.log(1 == "1"); true

// && (and), || (or)

// console.log(1 !=1 && 2 > 3); false

// console.log(3 ==='3' || 1 !== "1" ); //true
// console.log(3 ==='3'); //false

//Ex1
// cho nguoi dung nhap tuoi
// check tuoi nguoi dung
// neu tuoi < 18 => console.log( " You cannot enter ")
// neu tuoi 10 < age < 21 => (" You can enter but cannot drink")
// neu tuoi > 21 => ("You are free to drink")

// let a = Number(prompt(" Nhap tuoi"));
// if (a < 18) {
//     console.log ("You cannot enter")
// } else if (a > 10 && a < 21) {
//     console.log (" You can enter but cannot drink")
// } else if ( a > 21) {
//     console.log ( " You are free to drink")
// }

// Ex2
// nguoi dung nhap vao chieu cao (m) + can nang (kg)
// // viet ung dung check chi so BMI

// let b = Number(prompt(" Nhap chieu cao (m)"));
// let c = Number(prompt(" Nhap can nang (kg)"));
// let BMI = c / (b * b);

// if (BMI < 18.5) {
//     console.log(" Gay do 3");
// } else if (BMI >= 25) {
//     console.log(" Thua can");
// } else if ( BMI >= 40) {
//     console.log(" Beo phi");

// }

// cho nguoi dung nhap vao 3 so, Tim max

// let a = Number(prompt(" Enter a:"));
// let b = Number(prompt(" Enter b:"));
// let c = Number(prompt(" Enter c:"));

// let max;

// if (a>b) {
//    if(a>c) {
//        max = a;
//    } else {
//        max = c;
//    }
// } else {
//     if(b>c) {
//         max = b;
//     } else {
//         max = c;
//     }
// }
// console.log(` max cua 3 so la ${max}`);


// switch (key) {
//     case value: ( truong hop gia tri)
//     // do something
//     break;
//     case value2:
//      // do something
//      break;
//      default:
//      break;
// }

//Ex 4 cho nguoi dung nhap vao thang
// in ra mua

// let a = Number(prompt("nhap thang"));
// switch (a) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("mua xuan");

//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("mua ha");

//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log("mua thu");
//         break;

//     default:
//         console.log("mua dong");

// }



// Loops ( vong lap)
// While, For

// While :nếu điều kiện của vòng lặp luôn luôn đúng thì vòng lặp sẽ không bao giờ kết thúc và nó khiến chương trình bị lỗi

// while (condition) {
// do something

// }

// lap voi so lan biet truoc

// let i = 0;
// while (i < 5) {
//     console.log("Hello world");
//     i = i + 1;     // 0,  0+1, 1+1, 2+1 , 3 +1 ....... 

// }

// trong do i= i+1  Câu lệnh này giúp cho điều kiện dần trở thành bị SAI de vong lap dung lai

// Cho người dùng nhập :
// Nếu là số thì báo Đây là số
// Nếu không phải số báo Đây không phải là số

// let n = Number(prompt(" Nhập số "));
// console.log(n);

// if (n) {
//     console.log(" Day la so");
// } else {
//     console.log(" Day khong phai la so");
// }


//Cho nguoi dung nhap lai neu nhu nhap sai

// while (true) {
//     let n = Number(prompt(" Nhap so"));
//     if (n) {
//     console.log(n);
//         break;
//     }
// }


//Muon su dung duoc n cho cac muc dich khac thi fai keo n ra khoi vong lap
// let n;
// while (true) {
//      n = Number(prompt(" Nhap so"));
//     if (n) {
//         break;
//     }
// }
//    console.log(n);



// // EX 4

// neu user doan so nho hon kqua => too low
// neu user doan so lon hon kqua => too high
// neu user doan dung Bingo

// let result = 10;

// let loop = true;
// while (loop) {
//     let a = Number(prompt("nhap so"));
//     if (a < result) {
//         console.log("Too low");
//     } else if (a > result) {
//         console.log("Too high");
        
//     } else {
//         console.log("BINGO ");
//         loop = false; //cach 1
//         // break; //cach 2
//     }

// }


// co 3 cach viet i=i + 1 :
// i = i + 1;
// i += 1;
// i ++;

// for ([initialization];[condition];[final-expression])
// // for ( khoi tao; dieu kien; bieu thuc cuoi cung )
//  hello world se in ra 10 lan : 0, 0+1, 1+1 , 2+1.......

// for (let i = 0; i < 10; i++) {
// console.log("Hello World");
// } 

// Ex5:
// in ra cac so cach nhau 3 don vi tu 0 = 20
// in ra cac so tu 5 => 25 cach nhau 5 don vi


// for (let i = 0; i < 20; i = i + 3) {
//     console.log(i);
// }

// for (let i = 5; i <= 25; i = i + 5 ) {
//     console.log(i);
// }


// EX 6:
//cho nguoi dung nhap vao so n
// su dung vong lap for tu 0-n, kiem tra so i
// neu i la so chan => in ra "so chan"
// neu i la so le => in ra "so le"

// let n = Number(prompt(" nhap vao so n"));
// for (let i = 0 ; i <= n; i = i + 1){
//     console.log(i);
//     if(i % 2 == 0) {
//         console.log(` ${i}  so chan `);
//     }
//     else {
//         console.log(` ${i}  so le `);
//     }
// }


