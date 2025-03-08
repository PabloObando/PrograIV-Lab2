import { useCounter } from "../hooks/useCounter"


export default function Counter(){
    const { count, increaseCount, discreaseCount} = useCounter()
return(
    <div className="card">
        <p>{count}</p>
        <button onClick={increaseCount}>
        +
        </button>
      
        <button onClick={discreaseCount}>
        -
        </button>
       
      </div>
)
}