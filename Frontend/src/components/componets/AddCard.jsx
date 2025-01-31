import React, { useState } from 'react'

const AddCard = () => {
    const[add,setAdd] = useState(true);
    const addHandle = ()=>{
        setAdd(!add);
    }
  return (
    <div onClick={()=>(addHandle())} >
        <div className='bg-white rounded-[4px] cursor-pointer border-black border h-7 w-14 flex border-opacity-30 justify-center items-center '>
                <h1 className='font-mono text-sm opacity-96'>{add ? "Add + " : "Add - "}</h1>
        </div>
    </div>
  )
}

export default AddCard