import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis desarrolladores favoritos son</h1>
      <Perfil 
        nombre='Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
        linkedin='https://www.linkedin.com/in/braismoure/'
        youtube='https://www.youtube.com/@mouredev'
        adicional='https://twitter.com/MoureDev'
      />
      <Perfil 
        nombre='Nicolas Schurmann'
        pais='Chile'
        imagen='nicolas'
        cargo='Ingeniero de Software'
        empresa='HolaMundo'
        perfil='Es un Youtuber Chileno, que realizar contenido en Youtube, Fundado de HolaMundo'
        linkedin='https://nz.linkedin.com/in/nicolasschurmann'
        youtube='https://www.youtube.com/@HolaMundoDev'
        adicional='https://academia.holamundo.io/'
      />
      <Perfil 
        nombre='Miguel Ángel Durán García'
        pais='España'
        imagen='angel'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un Youtuber español, influenser de programacion'
        linkedin='https://es.linkedin.com/in/midudev'
        youtube='https://www.youtube.com/@midulive'
        adicional='https://twitter.com/midudev'
      />
     </div>
    </div>
  );
}

export default App;
