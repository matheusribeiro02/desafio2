import { useState } from "react";
import axios from "axios";


function App() {

  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);


  const getDataCountry = async () => {

    await axios.get('https://amazon-api.sellead.com/country')
      .then((res) => {
        setCountry(res.data);
      });
  };

  const getDataCity = async () => {

    await axios.get('https://amazon-api.sellead.com/city')
      .then((res) => {
        setCity(res.data);
      });
  };

  getDataCountry();
  getDataCity();

  return (
    <div>
      <div className="app">
        <div className="form-group">
          <h1>Dados Pessoais</h1>
          <label for="nome">Nome</label>
          <input type="text" name="nome" value="" className="form-input"></input>
          <label for="email">Email</label>
          <input type="text" name="email" value="" className="form-input"></input>
          <label for="celular">Celular</label>
          <input type="text" name="celular" value="" className="form-input"></input>
          <label for="cpf">CPF</label>
          <input type="text" name="cpf" value="" className="form-input"></input>
        </div>
        <div className="form-group">
          <h1>Destinos de interesse</h1>
          <select name="country" className="form-control">
            {country.map((e) => (
              <option key={e.code} value={e.code}>{e.name_ptbr}</option>
            ))}
          </select>
          <select name="city" className="form-control">
            {city.map((e) => (
              <option key={e.id} value={e.id}>{e.name_ptbr}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="button">
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default App;
