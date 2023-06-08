import './App.css';
//Importamos el componente
//Si lo tenemos abierto en otra pestaña VSCode nos ayuda a completarlo

import Title from "./componentes/title";


function App() {
  //JSX
  return (
    <div className="App">
      {/* Lo usamos */}
      <Title nombre="Mili!"/>
          Hola, como va? Esto es React!

    </div>

    );
  }
      
export default App;
