import './App.scss';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import beers from './data/beers';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Main className="main" beers={beers} />
    </div>
  );
}

export default App;
