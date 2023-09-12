import React, { useState } from 'react'

const MyQuestion = ({id,question, ans}) => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = ()=>setToggle(!toggle)
  return (
    <div className='bg-gray-100 rounded-md px-6 py-2'>
        <div onClick={handleToggle} className="flex cursor-pointer gap-4 items-center justify-between">
        <h2 className='text-lg'>{question}</h2>
        <p className='text-3xl'>{toggle ? "–" : "+"}</p>
        </div>
       {toggle && <p className='text-gray-700 text-justify'>{ans}</p>}
       
    </div>
  )
}

export default MyQuestion
