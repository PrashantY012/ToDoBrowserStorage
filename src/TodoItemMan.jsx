import React, { useContext, useEffect, useState } from "react";
import { ContextCreation } from "./ContextCreation";
import { ContainerWithChildren } from "postcss/lib/container";
function TodoItemMan({todoitem}) {
    console.log(todoitem);
    let {arr,setArr}=useContext(ContextCreation);
    let [isEditCrnt,setisEdit]=useState(todoitem.isEdit);
    let [checkedCrnt,setChecked]=useState(todoitem.checked);
    let [crntData,setCrntData]=useState(todoitem.propData);


    function deleteFunc()
    {   
        let temp=arr.filter((x)=>{
            return x.key!==todoitem.key
        })
        setArr((prev)=>temp);
    }
    function changeFunc(e)
    {
        setCrntData(e.target.value);
    }
    useEffect(()=>{
        let temp=arr.filter((x)=>{
            return x.key!==todoitem.key
        })
        setArr([...temp,{key:todoitem.key,propData:crntData,isEdit:isEditCrnt,checked:checkedCrnt}]);
    },[checkedCrnt,isEditCrnt])
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-white m-3 "
            }`}
        >
            <input
                type="checkbox"
                className={`cursor-pointer    `}
                checked={checkedCrnt}
                onClick={()=>{
                    setChecked((prev)=>!prev)
                }}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg  px-2   ${!checkedCrnt? "text-decoration-line: none" : "text-decoration-line: line-through"} `}
                value={crntData}
                disabled={!isEditCrnt}
                onChange={changeFunc}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
               onClick={()=>{
                setisEdit((prev)=>!prev)
               }}
            >
                {!isEditCrnt ?  "✏️":"📁"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={deleteFunc} 
            >
                ❌
            </button>
            <div className="text-yellow-400 text-decoration-line: underline; "></div>
        </div>
    );
}

export default TodoItemMan;
