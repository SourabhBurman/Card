import React, { useRef, useState } from 'react'
import Card from './Card';

const Foreground = () => {
    const [arr,setArr] = useState([{sentiment:"Positive",category:"Work",summary:"it is"},{sentiment:"Positive",category:"Work",summary:"it is"}]);
    // const [obj,setObj] = useState({sentiment:"Positive",category:"Work",summary:"it is"})
    const ref = useRef(null);

    const handleSubmit = () => {
        setArr([...arr,obj]);
     }

  return (
    <div ref={ref} className="absolute top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5">
    {/* <div className='w-full h-1/3 flex justify-center items-center gap-10'>
        <input type="text" className='w-1/3 bg-zinc-800 border-b-2 rounded-se text-center text-zinc-200 focus:outline-none' placeholder='Enter Something'/>
        <button className='bg-zinc-300 px-3 py-1 rounded' onClick={handleSubmit}>Submit</button>
    </div> */}
    {/* <div className='grid grid-cols-5 gap-10 p-7'> */}
      {arr.map((item,index)=> <Card key={index} obj={item} reference={ref}/>)}
    {/* </div> */}
   
</div>
  )
}

export default Foreground