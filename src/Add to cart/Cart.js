import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Cartitems({cart,setCart}) {

    const [value, setValue] = useState([])

     function handleAddToCart(e,element){
        e.preventDefault()
        setCart([...cart,element])

     }
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                console.log(response.data)
                setValue(response.data)
            })
    }, [])

    return (
        <>
            <div>
                {
                    value.map((element,index) => {
                        return (
                            <><div className='maindiv' key={index}>

                                <div className='parent1' >
                                    <img src={element.image}></img>
                                    <h1>
                                        {element.title}
                                    </h1>
                                    <a href='' onClick={(e) => handleAddToCart(e,element)}>Add to Cart</a>
                                </div>
                            </div>
                            </>)
                    })
                }
            </div>
        </>
    )
}

export default Cartitems