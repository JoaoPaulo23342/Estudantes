import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Estudantes from './components/estudantes/Index';



function App() {
  const [estudantes, setEstudantes] = useState([])
  const newEstudante = (estudante) =>  {
    console.log(estudante)
    setEstudantes([...estudantes, estudante])

  }
  return (
    <div className="App">
      <Banner />
      <Formulario estudanteLogin={estudante => newEstudante(estudante)}/>
      <Estudantes nome="Grupo para os estudantes de ADS"/>
      <Estudantes nome="Grupo para os estudantes de Ciência da computação"/>
      <Estudantes nome="Grupo para os estudantes de Engenharia de Software"/>
      
    </div>
  );
}

export default App;
