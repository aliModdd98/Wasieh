import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navigator } from './router/Navigator';
function App() {

  return (
    <Router>
 <Navigator/>
   </Router>
  )
}

export default App
