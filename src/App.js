import React, { Component } from "react";
import "./App.css";
import taux from "./taux.json";

class App extends Component {
  state = {
    montant: "",
    ttc: 0.0,
    tva: "0.2",
    totaltva: 0.0
  };
  handleChange = event => {
    let result1 = 0;
    let result2 = 0;

    const name = event.target.name;
    const value = event.target.value;
    const obj = {};
    obj[name] = value;

    // if (name === "montant") {
    //   obj.ttc = this.state.montant * this.state.tva;
    // }
    if (name === "montant") {
      this.setState(obj, () => {
        result1 =
          Number(this.state.montant) +
          Number(this.state.montant) * Number(this.state.tva);
        this.setState({
          ttc: result1
        });
      });
    }

    if (name === "ttc") {
      this.setState(obj, () => {
        result2 =
          Number(this.state.ttc) -
          Number(this.state.ttc) * Number(this.state.tva);
        this.setState({
          montant: result2.toFixed(2)
        });
      });
    }
    if (name === "tva") {
      this.setState(obj, () => {
        result1 =
          Number(this.state.montant) +
          Number(this.state.montant) * Number(this.state.tva);
        this.setState({
          ttc: result1.toFixed(2)
        });
      });
    }
    this.setState(obj, () => {
      console.log();
    });
  };

  render() {
    const tauxTva = Object.keys(taux).map((valueKey, index) => (
      <option key={index} value={taux[valueKey]}>
        {valueKey}
      </option>
    ));

    return (
      <div className="App">
        <header className="contenair">
          <div>
            <text>Saisissez ci-dessous un montant hors taxes ou TTC :</text>
          </div>
          <section>
            <div>
              <p> Montant HT</p>
              <input
                placeholder="Exemple:50"
                type="text"
                name="montant"
                id="montant"
                value={this.state.montant}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <p> Montant TTC</p>
              <input
                placeholder="Exemple:50"
                type="text"
                name="ttc"
                id="ttc"
                value={this.state.ttc}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <p> Taux de TVA</p>
              <select
                placeholder="Exemple:50"
                type="text"
                name="tva"
                id="tva"
                value={this.state.tva}
                onChange={this.handleChange}
              >
                {tauxTva}
              </select>
            </div>
            <p> Montant de la TVA</p>
            <div>
              <input
                placeholder="Exemple:50"
                type="text"
                name="totaltva"
                id="totaltva"
                value={(this.state.ttc - this.state.montant).toFixed(2)}
                onChange={this.handleChange}
              />
            </div>
          </section>
        </header>
      </div>
    );
  }
}

export default App;
