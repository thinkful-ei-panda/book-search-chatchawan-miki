import React from 'react';
import SearchFilterBar from './SearchFilterBar';
import BookList from './BookList'

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
      <div>
        <header>
          <h1>Google Book Search</h1>
          <SearchFilterBar />
        </header>
        <main>
          <BookList />
        </main>
      </div>
    );
  }
}

export default App;
