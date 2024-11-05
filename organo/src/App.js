import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './Formulario';

import Estudantes from './components/index.js';
import rodape from './components/Footer';
import Footer from './components/Footer';




function App() {

  const estudanteList = [{
    nome: 'Estudantes do CEUB',
    corPrimaria: '#AC208E',
    corSecundaria: '#360151'
  },{
    nome: 'Estudantes da Católica',
    corPrimaria: '#ffffff',
    corSecundaria: '#27348B'
  },{
    nome: 'Estudantes da Unieuro',
    corPrimaria: '#0d4b81',
    corSecundaria: '#ffffff'
  },{
    nome: 'Estudantes da Projeção',
    corPrimaria: '#AE292E',
    corSecundaria: '#072D52'
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
      <Formulario estudantes={estudanteList.map(estudante => estudante.nome)} estudanteLogin={estudante => newEstudante(estudante)}/>
      
      {estudanteList.map(estudante => <Estudantes key={estudante.nome} nome={estudante.nome} primaryColor={estudante.corPrimaria} secondaryColor={estudante.corSecundaria} estudantes={estudantes.filter(item => item.estudantes === estudante.nome)}/>)}
      
      <Footer />
     // Form 

</div>

  );
}

export default App;
