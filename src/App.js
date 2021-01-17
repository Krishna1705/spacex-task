
import './App.css';
import HomePage from './pages/HomePage';
import {Navbar} from 'react-bootstrap';

function App() {
  return (
    < >
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
             SPACE-X
            </Navbar.Brand>
        </Navbar>
       <HomePage></HomePage>
    </>
  );
}

export default App;
