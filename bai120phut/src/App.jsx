import React, { Component } from 'react'
import CountWord from './components/CountWord'
export default class App extends Component {
  render() {
    return (
      <div>
        <div>Word Counter</div>
        <br />
        <CountWord></CountWord>
      </div>
    )
  }
}
