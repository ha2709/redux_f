
import React,{Component}  from 'react';
 import SearchForm from './SearchForm';
import './App.css';
import SearchResult from './SearchResult';

  class App extends Component {
      render() {
      return(
        <div className="App">
          <SearchForm />
          <SearchResult />
        </div>
        );
  }
}

  export default App;