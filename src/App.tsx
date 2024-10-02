import React, { useState } from 'react';
// UseState: Un hook de React qui permet d'ajouter un état à un composant fonctionnel.
import Greeting from "./Greeting";
import Counter from './counter';

const App: React.FC = () => {
  //The way to declare a functional component in TypeScript.
  const [show, setShow] = useState<boolean>(true);
  
/*setShow est une fonction utilisée pour mettre à jour la valeur de show.
show est un état qui détermine si un contenu est visible ou non.
*/
  return (
    <div className="App">
      <Greeting Name="Sabrine" age={32} />
      <>
        {show ? (
          <>
            <h1>Contenido oculto</h1>
            <button onClick={() => setShow(false)}>Hide</button>
          </>
        ) : (
          <button onClick={() => setShow(true)}>Show</button>
        )}
      </>
      <h1>My Counter App</h1>
      <Counter />
      
    </div>
  );
}

export default App;
