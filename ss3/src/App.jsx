import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // let [count, setCount] = useState(0)
  const [isLogin, setIsLogin] = useState(false)
  const cats = [
    {
      id: uuidv4(),
      urlImage: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
      description: "Day la con meo 1"
    },
    {
      id: uuidv4(),
      urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91_zRjibBRhoFDT4iy68UwzvmOSKhIdBK9oFSOhQSpg&s",
      description: "Day la con meo 2"
    },
    {
      id: uuidv4(),
      urlImage: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
      description: "Day la con meo 3"
    }
  ]

  // const handleSwitchLoginState = () => {
  //   setIsLogin(!isLogin)
  // }

  // const handleClick = (delta) => {
  //   // console.log("Tăng biến count lên 1")
  //   // count = count + 1

  //   // asynchronous
  //   setCount((prevCount) => prevCount + delta)
  //   // setCount((prevCount) => prevCount + 1)
  //   // setCount((prevCount) => prevCount + 1)
  //   // setCount((prevCount) => prevCount + 1)

  //   // console.log(count)
  // }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* <Header isLogin={isLogin} handleSmt={handleSwitchLoginState} /> */}

      <main style={{ flexGrow: 1, marginTop: '24px', margin: 'auto', padding: '64px' }}>
        <div style={{ width: '699px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>

          {/* <span>Số lần bấm nút là: {count}</span> <br />
          <button onClick={() => handleClick(4)}>Increase 1</button>

          <button onClick={handleSwitchLoginState}>Switch login state</button> */}

          {
            // Trong day la code js
            cats.map((cat) => (
                <Card key={cat.id} urlImage={cat.urlImage} description={cat.description} />
            ))
          }
        </div>

      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
