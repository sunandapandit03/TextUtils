import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About";
import React,{useState} from 'react'; 
import Alert from "./components/Alert";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import './App.css';
let name="sunanda";
function App() {
  const [mode,setMode]=useState('dark');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode=()=>{
    if (mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='#042743';
      showAlert("light mode has been enabled","success") ;
      document.title='TextUtile-light mode'
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success") 
      document.title='TextUtile-dark mode'
    }
  }
  return (
    <>
  <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert} /> 
   <div className="container">
    <Switch>
      <Route exact path="/about">
      <About/>
      </Route>

      <Route exact path="/">
        <TextForm heading="enter text to analyse" mode={mode} showAlert={showAlert}/> 
      </Route>
    </Switch>
    </div>
  </Router>
   </>
  );
} 

export default App;
