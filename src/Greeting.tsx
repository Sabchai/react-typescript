import React from 'react';

interface Greetingprops{
    Name: string,
    age?: number
}
const Greeting: React.FC<Greetingprops>= ({Name,age}) =>{
    return (
    <div>
      Greeting: Hello {Name} age {age}
    </div>)
  }
  
  export default Greeting;