import React from 'react'

const Bloglist = ({blogs,handleDelete}) => {
 
  return (
    <div>  {blogs.map((x)=>(
        <div className=' flex flex-col text-md font-bold hover:shadow-2xl border rounded-full w-[50%] mx-auto p-2 mb-2' key={x.id}>
          <h2>{x.title}</h2>
          <p>{x.body}</p>
          <p>{x.author}</p>
  <button onClick={()=>handleDelete(blogs.id)}>Delete blogs</button>
        </div>
  
       ))}</div>
  )
}

export default Bloglist