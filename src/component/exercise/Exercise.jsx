import { useState } from "react"

const Exercise=()=>{
let [counter,setCounter]=useState(5);
function increas(){
    setCounter(oldcountervalue=>oldcountervalue+5);

}

function decreas(){
    setCounter(oldcountervalue=>oldcountervalue-1);

}
  return(
    <div>
        <h1> Counter:{counter}</h1>
        <button onClick={increas}>increas</button>
        <button onClick={decreas}>decreas</button>
    </div>
  )  
}

export default Exercise