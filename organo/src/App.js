import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';


function App() {
  const [estudantes, setEstudantes] = useState([])
  const newEstudante = (estudante) =>  {
    console.log(estudante)

  }
  return (
    <div className="App">
      <Banner />
      <Formulario estudanteLogin={estudante => newEstudante(estudante)}/>
      
    </div>
  );
}

export default App;
