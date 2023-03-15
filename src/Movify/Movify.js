import React, { useEffect, useState } from 'react';
import './Movify.css';
import axios from 'axios';

function Movify() {

    let [data,setData]= useState([])
    let [input,setInputValue]=useState("")

    function handleChange(e)
    {
        setInputValue(e.target.value)
    }

    function getData(){
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=d051126ae95cb1474f7f36845db57f3c&language=en-US&query=" + input + "` &page=1&include_adult=false")
        .then(response => {
            console.log(response)
            setData(response.data.results)
        })
        .catch(error => {
            console.log(error)
        })
    }

    function submithandler(e) {
        e.preventDefault()
        getData()
    }

    return (
        <>
            <div className="moviesParent">
                <form onSubmit={submithandler}>
                    <input onChange={handleChange} className="search-input" placeholder='Enter Movie name' type="text" value={input}/>
                    <button className="submit-btn" type="submit">Submit</button>
                </form>
            </div>

            {
                data.map((element,index)=>{
                    return(
                        <div key={index}>
                            <h1>
                                {element.title}
                            </h1>
                            <img src={`https://image.tmdb.org/t/p/original${element.poster_path}`}></img>
                        </div> 
                    ) 
                })
            }
        </>
    );    
}

export default Movify;
