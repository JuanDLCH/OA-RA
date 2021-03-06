import './App.css';
import {
  ModelsGrid
} from './components/ModelsGrid'
import {
  AppsGrid
} from './components/AppsGrid'
import {
  VidsGrid
} from './components/VidsGrid'

export const App = () => {
  return ( 
    <div> 
      <center>
        <h1 className='title'>Objetos de aprendizaje en realidad aumentada</h1>
      </center>
      <hr/>
      <AppsGrid/>
      <hr/>
      <ModelsGrid/> 
      <hr/>
      <VidsGrid/>
    </div>
  );
}