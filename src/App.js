import { FiSearch } from 'react-icons/fi';
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 classname="title">Buscador CEP</h1>

      <div classname="containerInput">
        <input 
        type="text"
        placeholder="Digite seu CEP"
        />

      <button classname="buttonSearch">
        <FiSearch size={26} color="#FFF"/>
      </button>
      </div> 

      <main classname="main">
        <h2>CEP: 00000-000</h2>

        <span>Rua Teste Alguma</span>
        <span>Complemento: Tome Complemento</span>
        <span>Bairro: Vila Rosa</span>
        <span>São Paulo - SP</span>

      </main>

    </div>
  );
}

export default App;
