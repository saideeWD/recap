import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MoveCounter></MoveCounter>
      <Nayok name={'Arjjit sing'} age={23}></Nayok>
      <Nayok name={'Novel'}></Nayok>
      <Nayok name={'Tingin tisa'}></Nayok>
      
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
    </div>
  );
}
function MoveCounter(){

let [count , setCount] = useState(0);
 const handelclick= ()=> setCount(count + 1);

  return(
    <div>
      <button onClick={handelclick}>Move add</button>

      <h2>Numbers of moves :{count}</h2>
      <Numbers></Numbers>
      <MoveDisplay movies = {count}> </MoveDisplay>
      <MoveDisplay movies = {count + 10 }> </MoveDisplay>
      <MoveDisplay movies = {count}> </MoveDisplay>
      <MoveDisplay movies = {count}> </MoveDisplay>

       <MoveDisplay movies = {count +20}> </MoveDisplay>
       <MoveDisplay movies = {count}> </MoveDisplay>
       <MoveDisplay movies = {count + 25}> </MoveDisplay>

    </div>
  )
}
function Numbers(){
const [numbers , setCount] = useState([]);
 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setCount(data))


  },[])
  // const numbers = [{name :"Jasim",year:22} , {name:'Arjjit sing',year:12},{ name : 'Shakib khan', year:45}, { name:"Bnp boss", year: 24}];

  return(
    numbers.map(nk =><Nayok  name={nk.name} year={ nk.year}></Nayok>)

  )
}
function MoveDisplay(props){
  return(
  
    <h4>Movies i have acted : {props.movies}</h4>
  
  )
}



function Nayok(props){
  const NayokesStyle={
    border: " 1px solid white",
    padding: " 20px"
  }
  return(
    <div style={NayokesStyle}>
      <h2>I have old in {props.year}</h2>
      <h1> {props.name} is best singer</h1>
      <h2>I have done  5000 move {props.age || 3} years</h2>
    </div>
  )
}

export default App;
