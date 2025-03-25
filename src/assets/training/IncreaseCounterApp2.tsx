import {useState} from 'react';
import '../../App.css'

export default function IncreaseCounterApp2(){
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount((count) => count + 1);

    return(
        <>
            <div>
                <button onClick={increaseCount} className='redButton'>
                    count is: {count}
                </button>
            </div>
        </>
    )
}