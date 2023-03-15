import React, { useEffect, useState } from 'react';
import axios from 'axios';
function FetchAxios() {
    
    let [data,setData] =useState([]);
   


    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((response)=>{
            console.log(response)
            console.log("sanjay")
            setData(response.data.products)
        })
    },[])



    
    return (
        <div>
            {
                data.map((element,index)=>{
                    return <div>
                        <img src={element.thumbnail}></img>
                        <h1>
                        {element.title}
                        </h1>
                    </div>
                })            
            }
        </div>
      )

    }


export default FetchAxios