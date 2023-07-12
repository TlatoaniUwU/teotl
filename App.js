import './App.css';
import { Cuerpo1 } from './Componentes/Cuerpo1';
import { Inicio } from './Componentes/Inicio';
import { Navbar } from './Componentes/Navbar';
import 'materialize-css/dist/css/materialize.min.css'
import { Opciones } from './Componentes/Opciones';
import { Zombie } from './Componentes/Zombie';
import { TeotlWarrior } from './Componentes/TeotlWarrior';
import { Video1 } from './Componentes/Video1';
import { Footer } from './Componentes/Footer';

function App() {
  return (
    <div className='black'>
      <Navbar></Navbar>
      <div className='black'>
        <Video1></Video1>
        <Opciones></Opciones>
        <Zombie></Zombie>
        <TeotlWarrior></TeotlWarrior>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
