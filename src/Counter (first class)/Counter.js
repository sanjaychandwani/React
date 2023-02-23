import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export function Counter()
{
    let [count,setcount] = useState(0);
    return(
        <>
        <button onClick={()=>setcount(count + 1)}><AddIcon /></button> 
        <p>{count}</p>
        <button onClick={()=>setcount(count - 1)}><RemoveIcon/></button> 




        </>
    )
}


