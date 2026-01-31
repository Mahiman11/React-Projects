import React, { useState } from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTask = [...task]
    copyTask.push({title, details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)

    setTask(copyTask)
  }


  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  

  return (
    <div className='h-screen bg-red-300 text-white lg:flex'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-col gap-5 p-10 items-start lg:w-1/2' >

          <h1 className='font-bold text-3xl uppercase'>Add Notes</h1>

          <input type="text" 
          placeholder='Notes Heading' 
          className='px-5 py-2 border-2 rounded w-full outline-none'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }} />

          <textarea placeholder='Note Details' 
          name="" 
          id=""
          value={details}
          className='px-5 py-2 border-2 rounded w-full outline-none'
          onChange={(e) => {
            setDetails(e.target.value)
          }}>
          </textarea>

          <button className='bg-pink-600 px-5 py-2 rounded w-full active:bg-pink-900'>Add Note</button>
      </form>


      <div className="cards lg:w-1/2 p-10 lg:border-l-2">

        <h1 className='text-4xl font-bold uppercase'>Recent Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-4 h-[90%] overflow-auto'>
          {task.map(function(elem, idx){

            return <div key={idx} className=' flex flex-col justify-between items-start bg-amber-100 h-52 w-40 rounded-2xl text-black py-4 px-4 relative'>

              <div>
                <h3 className='leading-tight font-bold text-xl'>{elem.title}</h3>
                <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>

              <button onClick={() => {
                deleteNote(idx)
              }} className='bg-red-500 w-full rounded text-white py-1 font-bold text-xs cursor-pointer active:scale-95'>Delete</button>

            </div>
            
          })}
        </div>

      </div>

    </div>
  )
}

export default App