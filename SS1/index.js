// Code javascript trong file mới

// Biến trong javascript
// let/var/const

// Khác biệt giữa let và const 
let str1 = "Đây là buổi học đầu tiên của CIJS01" // Kiểu dữ liệu là 1 string
let str2 = 'Đây là ví dụ 2 về khai báo string'
let str3 = `${str1} + ${str2}` // template string
// str3 = "Đây là buổi học đầu tiên của CIJS01 + Đây là ví dụ 2 về khai báo string"
let str4 = str1 + " + " + str2
let str5 = ""
let num = 5 // Kiểu dữ liệu là 1 number

let isLogin = true // boolean: true/false -> Trong câu lệnh điều kiện if...else

let example1 // undefined - Giá trị chưa được định nghĩa
let example2 = null // Mang giá trị nhưng giá trị không có gì 

// array: CRUD - Create, Read, Update, Delete

// create
let nameArr = ["Tên anh là Nguyễn Thành Long", "Tên học sinh là Đinh Tuấn Khang"]

// read: Đọc dựa trên index= 0 - nameArr.length - 1  
console.log(nameArr[1])


// update
nameArr[0] = "Không phải Nguyễn Thành Long đâu"

console.log(nameArr[0])

nameArr.push("Hôm nay trời đẹp quá") // method dùng để thêm 1 phần tử vào cuối mảng

console.log(nameArr)

nameArr.pop() // method dùng để lấy 1 giá trị ở cuối mảng ra 

console.log(nameArr)

nameArr.shift() // method dùng để lấy 1 giá trị ở đầu mảng ra  

console.log(nameArr)

nameArr.unshift("Thêm 1 phần tử mới") // method dùng để thêm 1 phần tử vào đầu mảng

console.log(nameArr)

// Thêm mới/xóa các phần tử ở vị trị khác trong mảng 
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// slice/splice


// slice sẽ tạo ra 1 mảng mới từ mảng ban đầu 
let sliceArr = numArr.slice(3, 8) // start-<end

console.log("Đây là mảng sau khi dùng slice", sliceArr)
console.log("Đây là mảng ban đầu", numArr)

// splice tác động trực tiếp vào mảng ban đầu 
// let spliceArr = numArr.splice(0, 2)

// console.log("Đây là mảng sau khi dùng splice", spliceArr)
// console.log("Đây là mảng ban đầu", numArr)

let spliceArr = numArr.splice(3, 3, 15, 16)

console.log("Đây là mảng sau khi dùng splice", spliceArr)
console.log("Đây là mảng ban đầu", numArr)

// object: CRUD
// properties
// methods

// create
let user = {
    name: "Đinh Phúc Khang",
    age: 17,
    favorites: ["Chơi game", "Học computer science"],

    register: function () {

    },
    login: function () {

    },
    printSum: function () {

    }
}

// read
console.log(user.name)
console.log(user.age)

// update
user.name = "Nguyễn Thành Long"

console.log(user)

// delete 
delete user.name

console.log(user)


// Tham chiếu/Tham trị

// Trường hợp truyền tham trị: Kiểu dữ liệu nguyên thủy number, string, boolean
// let exam1 = 5
// let exam2 = exam1

// exam1 = 10

// console.log("Đây là giá trị của exam1", exam1)
// console.log("Đây là giá trị của exam2", exam2)

// Trường hợp truyền tham chiếu: Kiểu dữ liệu là array, object
// let exam1 = [1,2,3,4]
// let exam2 = exam1

// exam2.push(5)

// console.log("Đây là giá trị của exam1", exam1)
// console.log("Đây là giá trị của exam2", exam2)

// Chuyển việc truyền tham chiếu thành tham trị khi sử dụng array/object
// let exam1 = [1,2,3,4]
// // spread operator ...
// // let exam2 = [ ...exam1 ]
// let exam2 = exam1.slice(0)

// exam1.push(5)

// console.log("Đây là giá trị của exam1", exam1)
// console.log("Đây là giá trị của exam2", exam2)

let exam1 = {
    name: "Đinh Phúc Khang",
    age: 17,
    favorites: ["Chơi game", "Học computer science"],
}

let exam2 = {
    name: "Nguyễn Thành Long",
    state: "Texas"
}

// spread operator ...
// let exam2 = { ...exam1 }
let exam3 = Object.assign({}, exam2, exam1)

console.log("Đây là exam1", exam1)
console.log("Đây là exam2", exam2)
console.log("Đây là exam3", exam3)

// exam1.newKey = "test"

// console.log("Đây là giá trị của exam1", exam1)
// console.log("Đây là giá trị của exam2", exam2)

// Câu lệnh điều kiện: if, else if, else
// if(biểu thức logic) {

// }

// Toán tử logic: <, >, >=, <=, ==,, ===, !=, &&, ||
// 5 < 5 -> false
// 5 <= 5 => true

// let inputUser = prompt("Nhập vào 1 ngày để kiểm tra là ngày nghỉ hay đi làm")

// if(inputUser > 0) {
//     console.log(`${inputUser} là số dương`)
// } else if(inputUser < 0) {
//     console.log(`${inputUser} là số âm`)
// } else if(inputUser == 0){ 
//     console.log(`${inputUser} là số 0`)
// } else { // Các trường hợp còn lại
//     console.log("Có lỗi xảy ra, kiểm tra lại")
// }

// switch(inputUser) {
//     case "Monday":
//         console.log("Hôm nay là ngày đi làm")
//         break
//     case "Tuesday": 
//         console.log("Hôm nay là ngày đi làm")
//         break
//     case "Sunday":
//         console.log("Hôm nay là ngày nghỉ")
//         break
//     default: 
//         console.log("Ngày nhập vào k hợp lệ")
//         break
// }

// Vòng lặp for  

// for(let i = 0; i< 50; i++){
//     console.log(i)
// }

// let newArr = [1,2,3,4,5,6,7,8,9,10]

// // console.log(newArr[0])
// // console.log(newArr[1])
// // console.log(newArr[2])

// for(let i = 0; i < newArr.length; i++){
//     newArr[i] = newArr[i] + 5 
// }


// 1. Khai báo 1 mảng [91,26,4,6,5,85,7,11,9,22] và in ra chỉ số (index) tại vị trí đó giá trị của nó là số chẵn 
// 2. Khai báo 1 mảng gồm 1 triệu phần tử từ 0 - 999999
// 3. Cho 1 mảng users = [ {username: "admin", password: "123456"}, {username: "user1", password: "testpassword"}, { username: "manager", password: "dinhtuankhang" } ]. Người dùng nhập vào 2 giá trị username và password, kiểm tra xem thông tin người dùng nhập vào có tồn tại trong hệ thống k. Nếu có thông báo thành công, sai thì thông báo thất bại
// 4. Làm 1 chức năng đăng ký cho phép người dùng tạo tài khoản trong hệ thống (mật khẩu ít nhất 8 ký tự)

