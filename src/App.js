
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './layout/Navbar';
import Not from './component/Not';
import AddUsers from './users/AddUsers';
import Edit from './users/Edit';
import { BrowserRouter , Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
    
    </div>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/users/add" component={AddUsers}/>
    <Route exact path="/users/edit/:id" component={Edit}/>
    <Route component={Not}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
