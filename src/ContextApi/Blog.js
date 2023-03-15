import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Blog() {

  let [data,setData]=useState([])

  useEffect(()=>{

    async function getData()
      {
       let response =  await axios.get("https://jsonplaceholder.typicode.com/posts")
          console.log(response.data)
          setData(response.data)
      }
  
      getData()
    
  },[])

  return (
   <>
    {
    data.map((element, index)=>
    {
      return <div key={index}> 
        <h1 className='blogheading'>
          {element.title}
        </h1>

        <p>
          {element.body}
        </p>
      </div>
    })
    }
   </>
  )
}




export default Blog



