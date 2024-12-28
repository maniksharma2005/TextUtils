
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route
// }from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")

    }
  }
  return (
    <>
    {/* <Router> */}
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route */}
              {/* exact path="/" */}
              <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />
            {/* /> */}
            {/* <Route */}
             {/* exact path="/about" */}
              {/* element={<About />} // Use the element prop to render components */}
            {/* /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}

   
    
    </>
    
  );
}

export default App;
