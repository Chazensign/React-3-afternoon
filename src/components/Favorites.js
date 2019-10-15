import React, { Component } from "react";

class Favorites extends Component {
  render() {
    const favList = this.props.faveArr.map((movie, i) => {
      return (
        <>
          <li hidden={!this.props.inputShow} key={i}>
            {movie}
          </li>
          <input
            value={this.props.faveArr[i]}
            placeholder="Enter New Movie"
            hidden={this.props.inputShow}
            onChange={event =>
              this.props.updateInfo(
                event.target.value,
                "favoriteMovies",
                null,
                i
              )
            }
          />
        </>
      );
    });
    return (
      <div>
        <h3 className="movie-title">Faviorite Movies:</h3>
        <ol className="fave-list">{favList}</ol>
      </div>
    );
  }
}

export default Favorites;
