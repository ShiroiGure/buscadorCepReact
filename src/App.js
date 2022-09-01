import { FiSearch } from 'react-icons/fi';
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu CEP"
        />

      <button className="buttonSearch">
        <FiSearch size={26} color="#FFF"/>
      </button>
      </div> 

      <main className="main">
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
