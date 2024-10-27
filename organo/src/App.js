import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Estudantes from './components/estudantes/Index';



function App() {

  const estudante_of = [{
    nome: 'Estudantes do CEUB',
    corPrimaria: '',
    corSecundaria: ''
  },{
    nome: 'Estudantes da Católica',
    corPrimaria: '',
    corSecundaria: ''
  },{
    nome: 'Estudantes da Unieuro',
    corPrimaria: '',
    corSecundaria: ''
  },{
    nome: 'Estudantes da Projeção',
    corPrimaria: '',
    corSecundaria: ''
  },{
    nome: 'Estudantes do IESB',
    corPrimaria: '',
    corSecundaria: ''
  }]

  const [estudantes, setEstudantes] = useState([])
  const newEstudante = (estudante) =>  {
    console.log(estudante)
    setEstudantes([...estudantes, estudante])

  }
  return (
    <div className="App">
      <Banner />
      <Formulario estudanteLogin={estudante => newEstudante(estudante)}/>
      <Estudantes nome="hf"/>
      <Estudantes nome="Grupo para os estudantes de Ciência da computação"/>
      <Estudantes nome="Grupo para os estudantes de Engenharia de Software"/>
      
    </div>
  );
}

export default App;
