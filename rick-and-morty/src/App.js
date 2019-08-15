import React from 'react';

import Loading from './components/shared/Loading'

import './App.css';

import logo from './images/logo.png';


function CharacterCard(props) {
  const { character } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
    </div>
  );
}

class App extends React.Component {

  state = {
    nextPage: 1,
    loading: true,
    error: false,
    data: {
      results: []
    }
  }

  componentDidMount() {
    this.fetchCharactersAwait()
  }

  fetchCharactersAwait = async () => {
    this.setState({ loading: true, error: false })
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`)
      const data = await response.json()
  
      this.setState({
        data: {
          info: data.info,
          results: this.state.data.results.concat(data.results)
        },
        loading: false,
        nextPage: this.state.nextPage + 1
      })
    }catch(error) {
      this.setState({ loading: false, error: true })
    }
    
  }

  render(){
    if (this.state.error) {
      return <p>Error!</p>;
    }

    return (
      <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="Rick y Morty" />

          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>

          {this.state.loading && (
            <Loading />
          )}

          {!this.state.loading && this.state.data.info.next && (
            <button onClick={() => this.fetchCharactersAwait()}>Load more</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
