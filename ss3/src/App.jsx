import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0)
  const [isLogin, setIsLogin] = useState(false)


  const handleSwitchLoginState = () => {
    setIsLogin(!isLogin)
  }

  const handleClick = (delta) => {
    // console.log("Tăng biến count lên 1")
    // count = count + 1

    // asynchronous
    setCount((prevCount) => prevCount + delta)
    // setCount((prevCount) => prevCount + 1)
    // setCount((prevCount) => prevCount + 1)
    // setCount((prevCount) => prevCount + 1)

    // console.log(count)
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header isLogin={isLogin} handleSmt={handleSwitchLoginState}/>

      <main style={{ flexGrow: 1, marginTop: '24px', margin: 'auto', padding: '64px' }}>
        <div style={{ width: '699px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>

          <span>Số lần bấm nút là: {count}</span> <br />
          <button onClick={() => handleClick(4)}>Increase 1</button>

          <button onClick={handleSwitchLoginState}>Switch login state</button>

          {/* <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card> */}
        </div>

      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
