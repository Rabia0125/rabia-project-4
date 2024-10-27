import React from 'react'

const Props = ({name,age,rollno,day}:{name:string, age:number, rollno:number, day:string}) => {
  return (
    <div className='flex flex-grow flex items-center justify-center p-6'>
    <div className="bg-slate-200 p-10 rounded-lg shadow-lg max-w-2xl w-100 border-2 border-blue-300">
         <h1 className='text-2xl text-blue-400'>Student ID Card</h1><br />
        <h1 className='text-xl'>Name: {name}</h1>
        <h1 className='text-xl'> Age: {age}</h1>
        <h1 className='text-xl'>Roll no: {rollno}</h1>
        <h1 className='text-xl'>Day: {day}</h1>
    </div>
    </div>
  )
}

export default Props