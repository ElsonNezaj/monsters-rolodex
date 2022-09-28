import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component.jsx'
// import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    this.setState({ monsters: data })
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App
