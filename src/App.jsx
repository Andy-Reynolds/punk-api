import './App.scss';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Main className="main" />
    </div>
  );
}

export default App;
