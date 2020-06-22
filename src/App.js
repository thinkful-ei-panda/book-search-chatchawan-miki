import React from 'react';
import SearchFilterBar from './SearchFilterBar';
import BookList from './BookList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books : {
        items: [
          {
            volumeInfo: {
              id: "",
              title: "",
              authors: "",
              description: "",
              imageLinks: {
                thumbnail: ""
              }
            }
          }
        ]
      },
      error : null,
      loading: false,
      searchTerm: "henry"
    }
  }

  BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

  componentDidMount() {
    fetch(`${this.BASE_URL}${this.state.searchTerm}`)
      .then(res => {
        if(!res.ok) {
          this.setState({})
        };
        return res.json();
      })
      .then(books => {
        this.setState({
          books
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
          <SearchFilterBar />
        </header>
        <main>
          <BookList books={this.state.books}/>
        </main>
      </div>
    );
  }
}

export default App;
