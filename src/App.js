import React from 'react';
import SearchFilterBar from './SearchFilterBar';
import BookList from './BookList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        items: [
          // {
          //   id: "",
          //   volumeInfo: {
          //     title: "",
          //     authors: [],
          //     description: "",
          //     imageLinks: {
          //       thumbnail: ""
          //     }
          //   }
          // }
        ],
      error : null,
      loading: false,
      searchTerm: "MIT Press"
    }
  }

get = () => {
  fetch(`${this.BASE_URL}${this.state.searchTerm}`)
      .then(res => {
        if(!res.ok) {
          this.setState({})
        };
        return res.json();
      })
      .then(data => {
        const items = data.items
        this.setState({
          items
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
}

  BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

  handleSearchButton = (searchTerm) => {
    this.setState({
      searchTerm
    })
    this.get();
  }
  
  componentDidMount() {
    this.get();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
          <SearchFilterBar handleSearchButton={this.handleSearchButton}/>
        </header>
        <main>
          <BookList books={this.state.items}/>
        </main>
      </div>
    );
  }
}

export default App;
