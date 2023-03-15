import { useState } from "react"


export function Todo()
{
let [input,setInputValue] = useState("");
let [listitem, setListItem] = useState([]);


function handlerChange(e)
{
  setInputValue(e.target.value)
  
}

function handlerSubmit(e)
{
  e.preventDefault()
  if(input.length>0){
    setListItem([...listitem,input])
  }
 

  
}

console.log(listitem)





return(
  <>

  <form onSubmit={handlerSubmit}>
  <input type="text" placeholder="Enter your task"  value={input} onChange ={handlerChange}>
  </input>
  <button type ="submit">
    submit
  </button>
  </form>

  <ul>
    {
      listitem.map((element )=>
      {
        return <li>
          {
            element
          }
        </li>
      })
    }
  </ul>
 
  </>
)
}






