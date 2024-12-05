import './App.css';
import Todos from './Todos';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Todos />
    </div>
  );
}

export default App;
