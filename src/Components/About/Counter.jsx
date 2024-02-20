import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const counterPlus=()=> {
        setCount(count +1)
    }
    const counterMinus=()=> {
        setCount(count -1)
    }
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="inline-flex w-60 justify-between items-center rounded-lg bg-slate-50">
                    <button onClick={counterMinus} className=" bg-red-200 p-2 w-14 rounded-lg text-3xl" >-</button>
                    <h1>{count}</h1>
                    <button  onClick={counterPlus} className='bg-green-200 p-2 w-14 rounded-lg text-3xl' >+</button>
                </div>
            </div>
        </>
    );
}