import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    return (<>
        <div> 클릭 횟수 (+) : {count} </div>
        <div> 클릭 횟수 (-) : {count2} </div>
        <button onClick={() => setCount(count+1)}>
            + 버튼</button> 
            
        <button onClick={() => setCount2(count2-1)}>
            - 버튼</button> 
    </>)
}

export default Counter