import React from "react";
import Search from './Search'
import PrintTypeFilter from './PrintTypeFilter'
import BookTypeFilter from './BookTypeFilter'


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

  componentDidMount() {
    fetch(this.BASE_URL,)
  }

  render() {
    return (
      <header>
        <h1>Google Book Search</h1>
        <Search />
        <div>
          <PrintTypeFilter />
          <BookTypeFilter />
        </div>
      </header>
    );
  }
}

export default App;
