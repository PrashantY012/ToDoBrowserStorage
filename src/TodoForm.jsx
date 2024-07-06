import React, { useState } from 'react'
import { useContext } from 'react';
import {ContextCreation} from './ContextCreation.jsx'
import TodoItemMan from './TodoItemMan.jsx';

function TodoForm() {
    let {arr,setArr}=useContext(ContextCreation)
    let [crntData,setCrntData]=useState();
    function clickFunc(e)
    {   
        e.preventDefault();
        setArr((prev)=>{
            return [...prev,{key:Date.now(),propData:crntData,isEdit:0,checked:0}]//,isEdit:1,checked:1
        })
    }

    let changeFunc=(e)=>{
        setCrntData(e.target.value);
    }

    function callItem()
    {   
        // if(arr.length==0)return;
        return arr.map((x)=>{
            // if(x===null)return;
   return<TodoItemMan todoitem={x}></TodoItemMan>
})
}
    return (
        <>
        <form  className="flex text-white" >
            <input
                type="text"
                value={crntData}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150  py-2 text-gray-900 text-xl"
                // className=' bg-black rounded-3xl'
                onChange={changeFunc}
            />
            <button type="submit"  className="rounded-r-lg px-3 py-2 bg-green-600 m-2 shrink-0 text-[#001F3F] text-xl  " 
            onClick={clickFunc}
            >
                Add 
            </button>
        </form>
        {callItem()}
        {/* <TodoItemMan todoitem={{key:12345,propData:"prashant",isEdit:1}} ></TodoItemMan> */}
        </>
    );
}

export default TodoForm;


