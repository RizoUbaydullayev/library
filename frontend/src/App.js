import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import AuthorList from './components/Author';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'authors': []
    }
  }
  componentDidMount() {
    // const authors = [
    //   {
    //     'first_name': 'ФЕрдор',
    //     'last_name': 'Фр',
    //     'birthday_year': '1332',
    //   },
    //   {
    //     'first_name': 'ФЕрdadдор',
    //     'last_name': 'Фр',
    //     'birthday_year': '13988',
    //   },
    // ]

    axios.get('http://127.0.0.1:8000/api/authors/').then(response => {
      this.setState(
        {
          'authors': response.data
        }
      )
    }).catch(error => console.log(error))
  }


  render() {
    return (
      <div>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }

}

export default App;
