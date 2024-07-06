import { useState ,useEffect} from 'react'
import TodoForm from './TodoForm'
import { ContextCreation } from './ContextCreation'

function App() {
  let [arr,setArr]=useState(()=>{
    return JSON.parse(localStorage.getItem("storedData")) || [];
  });
  // useEffect(() => {
  //   let retrivedData=localStorage.getItem("storedData");
  //   setArr( JSON.parse(retrivedData));
  //   // console.log(retrivedData)
  //   // console.log("ran")
  // },[])
  
  useEffect(() => {
    localStorage.setItem("storedData",JSON.stringify(arr));
    // let retrivedData=localStorage.getItem("storedData");
    // console.log(retrivedData)
  }, [arr])
 

  return (
    <ContextCreation.Provider
     value={{arr,setArr}}
     >
    <div className="bg-[#172842] min-h-screen py-8 ">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 ">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            <TodoForm></TodoForm>
        </div>
        {/* <div className="flex flex-wrap gap-y-3">
            <TodoItemMan></TodoItemMan>
        </div> */}
    </div>
</div>
</ContextCreation.Provider>
  )
}
export default App
