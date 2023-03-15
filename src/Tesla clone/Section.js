import React from 'react'

function Section(props) {
  return (
    <section style={{backgroundImage:`url(images/${props.backgroundimage})`}}>
        <div className='Model'><h1>{props.name}</h1>
        <p>{props.heading}</p>
        </div>
        <div className='Order'>
            <a>{props.leftbtn}</a>
            {props.rigthbtn && <a>{props.rigthbtn}</a>}
        </div>
        {props.downArrow && <img className ="arrow" src='images/down-arrow.svg'></img>}
      
        
    </section>
  )
}

export default Section;