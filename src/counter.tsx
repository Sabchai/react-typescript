
import React, { useState } from 'react';


      const counter: React.FC= ({}) =>{

       const [count, setCount] = useState<number>(0);

       const Increment= ()=>{

        setCount (count+1);
       };

       const Decrement = ()=>{
        if (count > 0)
        { setCount(count-1);}
       
       }

        return (
        <div>
             <h1>Counter: {count}</h1>
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Increment</button>
        
        </div>)
      }
      
      export default counter;