import React from 'react';

class ShowRow extends React.Component {
  viewShow() {
    const url = "https://www.themoviedb.org/tv/" + this.props.show.id
    window.location.href = url
  }

    render() {
        return <table key={this.props.show.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src={this.props.show.poster_src}/>
            </td>
            <td>
            <h3>{this.props.show.title}</h3>
            <p>{this.props.show.overview}</p>
            <input type="button" onClick={this.viewShow.bind(this)} value="View"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default ShowRow;