import React from 'react'

const Bloglist = ({blogs,handleDelete}) => {
 
  return (
    <div>  {blogs.map((x)=>(
      
        <div className=' flex flex-col text-md font-bold hover:shadow-2xl border rounded-full w-[50%] mx-auto p-2 mb-2 mt-10' key={x.id}>
          <h2 className='text-[#ff9800] border rounded-full w-48 self-center mb-2 hover:bg-[#089bab] hover:text-white'>{x.title}</h2>
          <p>{x.body}</p>
          <p>{x.author}</p>
  <button onClick={()=>handleDelete(blogs.id)}>Delete blogs</button>
        </div>
  
       ))}</div>
  )
}

export default Bloglist