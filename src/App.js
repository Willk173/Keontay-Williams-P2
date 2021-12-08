import './App.css';
import React, { Component } from 'react';
import ShowRow from './ShowRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("arcane")
  }

  performSearch(searchTerm) {
    console.log("Perform search using showdb")
    const urlString = "https://api.themoviedb.org/3/search/tv?api_key=26604e0cf06343901d227db072fe1858&query="  + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Data fetched sucessfully")
        const results = searchResults.results

        var showRows = []

        results.forEach((show) => {
          show.poster_src = "https://image.tmdb.org/t/p/w185" + show.poster_path
          const showRow = <ShowRow key={show.id} show={show}/>
          showRows.push(showRow)
        })

        this.setState({rows: showRows})
      },
      error: (xhr, status, err) => {
        console.error("Data fetch failed")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
  return (
    <div> 
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <h1>
                <img src="tvicon2.ico" alt="app icon" width="50"/> 
                <span className="colorOne">ShowDB</span> <span className="colorTwo">Hub</span>
                </h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          color: "#282828 ",
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter the name of a show"/>

        {this.state.rows}

    </div>
    );
  }
}

export default App;
