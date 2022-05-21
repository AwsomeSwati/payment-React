import logo from './logo.svg';
import './App.css';
import data from "../src/data.json"
import Card from './components/Card'

function App() {

  console.log(data)

  
  return (
    <div className="App">
    
     
     {data.data1.map((cardData)=>(  
    <Card {...cardData} cardData={cardData}  /> 
   ))}
   
    </div>
  );
}

export default App;
