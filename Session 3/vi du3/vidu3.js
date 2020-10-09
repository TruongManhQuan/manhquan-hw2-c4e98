
// cau 1 
//Khoi tao mang chua ten phim yeu thich
//               0         1           2              3           4
// let movie = ['Titanic', 'Doom', 'Walking dead', 'Tay Du Ky', 'Diep Van'];
// console.log(movie);

//cau 2:
// Them ten phim vao cuoi mảng và do người dùng nhập
// let i = prompt(' Nhap ten phim');
// movie.push (i);
// console.log(movie);

// // cau 3:
// Đọc ten phim ở vị trí bất kỳ do người dùng nhập.
// let i = Number(prompt(" Nhap so bat ky:"));
// console.log(movie[i]);

// cau 4:
// Them ten phim ở vị trí đầu tiên của mảng và tên phim do người dùng nhập
// let a = prompt(" Nhap ten phim");
// movie[0] = (a);
// console.log(movie);

// Thêm ten phim ở vị trí bất kỳ, vị trí do người dùng nhập.
// let c = prompt("Nhap ten phim");
// let b = Number(prompt(" Nhap so thu tu"));
// movie[b] = c;
// console.log(movie);

// cau 5
// Xóa 1 phim ở vị trí bat ky ở mảng phim, vị trí do người dung nhập

// let d = Number(prompt(" Nhap vị trí xóa"));
// movie.splice (d , 1);
// console.log(movie);

// Xoa nhieu phim khoi mang phim o vi tri bat ky, vi tri va so luong phim xoa do nguoi dung nhap

// let e = Number(prompt(" Nhap vi tri xoa "));
// let f = Number(prompt( "Nhap so luong phim can xoa"));
// movie.splice (e, f);
// console.log(movie);

// Cau 6
// Đọc tất cả các mục trong mảng phim và in ra
// let n = movie.length;
// for ( let i = 0 ; i < n; i++ ) {
//     console.log(movie[i]);
// }

// //hoac cach sau:
// for ( let i = 0; i < movie.length; i++) {
//     console.log(movie[i]);
// }

// // Đọc nửa đầu các mục trong mảng phim và in ra
// for ( let i = 0; i < movie.length / 2 ; i++) {
//     console.log(movie[i]);
// }


//  Đọc nửa sau các mục trong mảng phim và in ra    Math.floor: làm tròn xuống
 //                                                 Math.celi : làm tròn lên   
//  //độ dài mảng /2 : 5/2 = 2.5 
// let movie = ['Titanic', 'Doom', 'Walking dead', 'Tay Du Ky', 'Diep Van'];
// for ( let i = Math.floor(movie.length/2) ; i < movie.length; i++) {
//     console.log(movie[i]);
// }

// let movie = ['Titanic', 'Doom', 'Walking dead', 'Tay Du Ky'];
// for ( let i = movie.length/2 ; i < movie.length; i++) {
//     console.log(movie[i]);
// }


// // // // Đọc qua từng phần tử của mảng rồi in ra vị trí của nó ứng với phần tử đó
// let movie = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];

// for (let i = 0; i < movie.length; i++) {
//     console.log(`${i+1}. ${movie[i]}`);
// }

// Câu 7:
//Thay đổi các phần tử trong mảng thành chữ thường   movie[i] i là số index tương ứng với từng phần tử trong mảng

// let movie = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
// for ( let i = 0; i < movie.length; i++) {
//   movie[i] = movie[i].toLowerCase();
   
// }
// console.log(movie);


// Viết chương trình nhập tên người dùng
// Nếu tên dài quá 15 ký tự >>> Tên quá dài
// Nếu tên <= 15 ký tự >>>> Tên hợp lệ


// while (true) {
//     let a = prompt(" Nhâp tên ");
//     n = a.length;
//    if (n <= 15) {
//        console.log(" Ten hop le ");
//        break;
//    } else {
//        console.log(" Ten qua dai ");
       
//    }
// }


// Viết chương trình hiển thị câu hoi và 4 phương án trả lời

// Con nhện có bao nhiêu chân
// 1. None
// 2. 4 legs
// 3. 8 legs
// 4. 12 legs

// nếu câu trả lời người dungg nằm ngoài 4 đáp án trên thì thông báo " đáp an không hợp lệ, đáp án năm trong 4 lựa chọn 1,2,3,4"
// và yêu câu người dùng nhập lại.
// Nếu nhập sai >>>> Chúc bạn may mắn lần sau
// Nếu nhập đúng >>>> Bạn đã trẳ lời đúng


let n;
while (true){
    n = Number(prompt(` Con nhen co bao nhieu chan ?
    1. None
    2. 4 legs
    3. 8 legs
    4. 12 legs`));
    if(n) {
if ( n == 3) {
    console.log(" Ban da tra loi dung");
    break;

} else if ( n != 3) {
    console.log(" Chuc ban may man lan sau");
    break;
} 
    }

else {
    let c = alert(` Dap an khong hop le
Dap an nam trong 4 lua chon 1,2,3,4`);
    console.log(c);
}
    }


