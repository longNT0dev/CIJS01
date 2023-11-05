// DOM: document object model  
// DOM: Làm cho web động, dữ liệu có thể thay đổi theo thời gian hoặc là theo tương tác của người dùng. Thay đổi style css động 
console.dir(document)

// Có 3 cách để tìm 1 thẻ trong html 
// Cách 1: Lấy thông qua id 
const content = document.getElementById('content')
const username = document.getElementById('username')
console.log(content)

// Thay đổi nội dung của thẻ 

// Thay đổi text bên trong
// content.innerText = "Đây là buổi học thứ 2"

// Thay đổi html bên trong thẻ
// content.innerHTML = "<a href='https://www.youtube.com/'>Bấm để chuyển sang youtube</a>"

// Thay đổi style css
content.style.color = "blue" 
content.style.backgroundColor = "red" 

// Các sự kiện: Xảy ra khi người dùng thực hiện tương tác trên trang web 
// Nó xảy ra ở đâu, khi xảy ra sự kiện thì cần làm gì? 
function handleClick() {
    console.log("Bạn mới bấm thẻ này")
}

function handleChange() {
    console.log("Thẻ HTML mới bị thay đổi")
}

function handleKeydown() {
    console.log("Người dùng mới gõ phím")
}

// content.addEventListener("click", handleClick)

content.addEventListener("click", (e) => {
    console.log(e)
})

username.addEventListener("change", (e) => {
    // e.target.name dùng để lấy ra giá trị từ thẻ input
    console.log(e.target.value)
})


// username.addEventListener("keydown", handleKeydown)

// username.addEventListener("keydown", (event) => {
//     console.log(event)
// })

// Callback function: Hàm tham số 1 hàm khác 
// keydown chạy -> return object (Chứa các thông tin của sự kiện đó)


// Lấy thẻ thông qua className
// Luôn trả về 1 mảng 
// let tagEl = document.getElementsByClassName("get-by-class")


// for(let i = 0; i< tagEl.length; i++) {
//     tagEl[i].addEventListener("click", function () {
//         console.log(tagEl[i].innerText)
//     })
// }
// console.log(tagEl)


// 1. Tạo ra 4 thẻ input cho phép người dùng nhập username, password, fullname, email
// 2. Lấy ra các giá trị được nhập vào bởi người dùng theo 2 cách 
        // 2.1. Khi người dùng bấm nút trên html 
        // 2.2. Khi người dùng gõ enter 
// 3. Sau khi lấy ra được giá trị thì thực hiện kiểm tra với các yêu cầu sau
        // 3.1. Các thông tin không được để trống
        // 3.2. Password > 6, < 20 
        // 3.3. Email có chứa dấu @ 
    // Nếu như người dùng vi phạm cần thông lỗi cho người dùng biết

const submitBtn = document.getElementById('submit-data');
const submitForm = document.getElementById('form-submit');

submitBtn.addEventListener('click', () => {
    // TODO: Lấy ra dữ liệu trong các thẻ input
})

submitForm.addEventListener('keydown',(e) => {
    e.preventDefault();
    e.stopPropagation()
    console.log("Bấm nè")
})

alert("Lỗi nhập dữ liệu ")