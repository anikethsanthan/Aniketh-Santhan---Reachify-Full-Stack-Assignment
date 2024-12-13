import { useState } from "react"


const List = () => {
  const [addedTask,setAddedTask]=useState("")
  const [task,setTAsk]=useState([])

  const handleClick=(()=>{
    console.log(addedTask)
    setTAsk([...task, addedTask]);
     setAddedTask("")

   })

   const handleDelete = (indexToDelete) => {
    setTAsk(task.filter((_, index) => index !== indexToDelete)); // Remove task by index
  };
 

  return (
   

    <div>
      
    {/* input */}
      <div className=" flex justify-center">
      <input
      value={addedTask}
      onChange={(e)=>setAddedTask(e.target.value)}
       type="text"
       placeholder="Enter a task you want to add"
       className="input input-bordered input-info w-1/2  m-4" />
       <button  onClick={()=>handleClick()}className="btn btn-outline m-4">Add +</button>
      </div>



      
      {/* tasks */}

      <div>
    
<div className="chat chat-start ml-[300px]  ">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble w-auto  "> 
    {task.length > 0 && <>
      
        <ul  className="mb-2">
          {task.map((tas,index)=>(<li key={index}>{tas} 
            <button onClick={() => handleDelete(index)}
              className= " m-2  bg-black text-white p-2 rounded-lg text-sm">Delete</button>
            </li> 
            ))}
          
        </ul>
   
      </>}</div>
</div>

</div>
      </div>

      

  )
}

export default List
