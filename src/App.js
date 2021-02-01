import './App.css';
import Home from "./screens/Home";
import About from "./screens/About"
import NavBar from "./components/Navbar";
import Coding from "./screens/Coding"
import Notes from "./screens/Notes" 
import { BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/Coding"><Coding /></Route>
        <Route exact path="/Notes"><Notes /></Route>
      </BrowserRouter>
  );
}

export default App;
