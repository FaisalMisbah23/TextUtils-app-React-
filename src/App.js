import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
// import About from './Components/about';
import { useState } from'react';
//  import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   }  from "react-router-dom";

function App() {
  const [mode,setmode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type: type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 500);
  }

  
  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor='#343a40' 
      document.body.style.color='white'
      document.title="TextUtlis dark"
  }
  else{
    setmode("light");
    document.body.style.backgroundColor='white'
    document.body.style.color='black'
    document.title="TextUtlis light"
  }}
  return (
    <>
   {/* <Router> */}
    <Navbar title="TextUtlis" mode={mode} togglemode={togglemode} />  
    <Alert alert={alert} />
    <div>
    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About/> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <Text showAlert={showAlert} heading="Enter Your Text"/>
          {/* </Route> */}
        {/* </Switch> */}
        </div>
        {/* </Router> */}
    </>
  );
}

export default App;
