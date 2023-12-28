import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  // Tạo 1 ứng dụng để nhận 2 giá trị đầu vào từ dùng: tên người dùng - số điện thoại
  // const [username, setUsername] = useState("")
  // const [phoneNumber, setPhoneNumber] = useState("")

  const [information, setInformation] = useState({
    username: "",
    phoneNumber: ""
  })

  const focusInputRef = useRef()
  // document.title = `Bạn đã bấm ${count} lần`
  // const handleChangeUsername = (e) => {
  //   setInformation((information) => ({ ...information, username: e.target.value }))
  // }

  // const handleChangePhoneNumber = (e) => {
  //   setInformation((information) => ({ ...information, phoneNumber: e.target.value })  )
  // }

  const handleChangeInformation = (e) => {
    setInformation((information) => ({ ...information, [e.target.name]: e.target.value })  )
  }

  // useEffect(() => {
  //   // Code chạy 
  // })

  const [count, setCount] = useState(0)
  const ref = useRef(0)

  const handleFocus = () => {
    focusInputRef.current.style.border = 'none'
    focusInputRef.current.style.border = "1px solid red"
  }

  // const handleSubmit = () => {
  //   // Thực hiện kiểm tra tính hợp lệ của dữ liệu trước khi sử dụng 
  //   if(!username) {
  //     alert("Username must be provided")
  //   }

  //   if(!phoneNumber) {
  //     alert("Phonenumber must be provided")
  //   }

  //   // Sử dụng 
  // }

  return (
    <div className="App">
        {/* <input type="text" onChange={handleChangeUsername}/>
        
        <input type="text" onChange={handleChangePhoneNumber}/> */}

        <input ref={focusInputRef} type="text" onChange={handleChangeInformation} name="username" onClick={handleFocus}/>
        
        <input type="text" onChange={handleChangeInformation} name="phoneNumber"/>


      <button onClick={() => {
        setCount((prev) => prev = prev + 1)
      }}>Click me với state</button>

      <button onClick={() => {
        ref.current = ref.current + 1

        console.log(ref.current)
      }}>Click me với ref</button>

      <p>{count}</p>

      <p>{ref.current}</p>
        {/* <button onClick={handleSubmit}></button> */}
    </div>
  );
}

export default App;
