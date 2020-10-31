import React from 'react'

const Filter =(props) =>{
    return(
    <div>
        Search for countries:<input value={props.search} onChange={props.searchHandleChange}/>
    </div>
    )
}

export default Filter;