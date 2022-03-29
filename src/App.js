import './App.css';
import {
  ModelsGrid
} from './components/ModelsGrid'

export const App = () => {
  return ( 
    <div> 
      <center>
        <h1 className='title'>Objetos de aprendizaje en realidad aumentada</h1>
      </center>
      <ModelsGrid/> 
    </div>
  );
}