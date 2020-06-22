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
      searchTerm: "MIT Press",
    }
  }

get = (...args) => {
  fetch(...args)
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
        console.log(this.state)
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
    this.get(`${this.BASE_URL}${this.state.searchTerm}`);
  }

  handlePrintTypeButton = (printType) => {
    this.get(`${this.BASE_URL}${this.state.searchTerm}&printType=${printType}`);
  }

  handleFilterButton = (filter) => {
    this.get(`${this.BASE_URL}${this.state.searchTerm}&filter=${filter}`);
  }
  
  componentDidMount() {
    this.get(`${this.BASE_URL}${this.state.searchTerm}`);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
          <SearchFilterBar handleSearchButton={this.handleSearchButton} handleFilterButton={this.handleFilterButton} handlePrintTypeButton={this.handlePrintTypeButton}/>
        </header>
        <main>
          <BookList books={this.state.items}/>
        </main>
      </div>
    );
  }
}

export default App;
