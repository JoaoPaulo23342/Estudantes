import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Estudantes from './components/estudantes/Index';



function App() {

  const estudante_List = [{
    nome: 'Estudantes do CEUB',
    corPrimaria: '#AC208E',
    corSecundaria: '#360151'
  },{
    nome: 'Estudantes da Católica',
    corPrimaria: '#27348b',
    corSecundaria: '#27348B'
  },{
    nome: 'Estudantes da Unieuro',
    corPrimaria: '#0d4b81',
    corSecundaria: '#ffffff'
  },{
    nome: 'Estudantes da Projeção',
    corPrimaria: '#AE292E',
    corSecundaria: '#3C3957'
  },{
    nome: 'Estudantes do IESB',
    corPrimaria: '#D92F35',
    corSecundaria: '#FFF'
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
