import logo from './logo.svg';
import React , {useState} from "react"
import './App.css';
import data from './france.json'
function App() {
  const [city , setCity] = useState("");
  const handleClick = () => {
   setCity(data[Math.floor(Math.random() * data.length)].Nom_commune);



  }

  return (
    <div style={{display: 'flex' , flexDirection:'column' , justifyContent:"center" , paddingTop: "3Rem"}}>
    <div style={{display: 'flex' , flexDirection:'row' , justifyContent:"center" , alignItems:"center"}}>
      <div style={{display: 'flex' , flexDirection:'column' , justifyContent:"center"}}>
      <button style={{ width: 300, borderRadius: 4, borderStyle: "none", height: "auto", outline: "none" , cursor : "pointer" , backgroundColor : "#8432d1" , color: "white" }} onClick={() => handleClick()} > <p>Generate</p></button>
      {city? <p>{city}</p> : <></>}
      </div>
    </div>
    </div>
  );
}

export default App;
