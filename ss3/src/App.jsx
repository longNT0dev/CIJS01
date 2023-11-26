import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header></Header>

      <main style={{ flexGrow: 1, marginTop: '24px', margin: 'auto', padding: '64px' }}>
        <div style={{ width: '699px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>

      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
