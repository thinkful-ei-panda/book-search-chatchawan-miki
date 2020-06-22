import React from "react";
import SearchFilterBar from './SearchFilterBar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books : {},
      error : null,
      loading: false
    }
  }

  BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

  // componentDidMount() {
  //   fetch(this.BASE_URL)
  // }

  render() {
    return (
      <header>
        <h1>Google Book Search</h1>
        <SearchFilterBar />
      </header>
    );
  }
}

export default App;
