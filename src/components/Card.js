import React, { Component } from "react";
import Favorites from "./Favorites";

class Cards extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.index}/{this.props.userNum - 1}
        </h1>
        <h2>
          <div className="user-name">
            <div hidden={!this.props.inputShow}>
              {this.props.userInfo.name.first} {this.props.userInfo.name.last}
            </div>
            <input
              placeholder="Enter New First Name"
              hidden={this.props.inputShow}
              onChange={event =>
                this.props.updateInfo(event.target.value, "name", "first")
              }
            />
            <input
              placeholder="Enter New Last Name"
              hidden={this.props.inputShow}
              onChange={event =>
                this.props.updateInfo(event.target.value, "name", "last")
              }
            />
            <div className="blue-line"></div>
          </div>
        </h2>
        <div className="scroll-box">
          <div className="all-info">
            <div className="info-cont">
              <h3>From: </h3>
              <p hidden={!this.props.inputShow}>
                {this.props.userInfo.city}, {this.props.userInfo.country}
              </p>
              <input
                placeholder="Enter New City"
                hidden={this.props.inputShow}
                onChange={event =>
                  this.props.updateInfo(event.target.value, "city")
                }
              />
              <input
                placeholder="Enter New Country"
                hidden={this.props.inputShow}
                onChange={event =>
                  this.props.updateInfo(event.target.value, "country")
                }
              />
            </div>
            <div className="info-cont">
              <h3>Job Title:</h3>
              <p hidden={!this.props.inputShow}>
                {" "}
                {this.props.userInfo.title}{" "}
              </p>
              <input
                placeholder="Enter New Title"
                hidden={this.props.inputShow}
                onChange={event =>
                  this.props.updateInfo(event.target.value, "title")
                }
              />
            </div>
            <div className="info-cont">
              <h3>Employer:</h3>
              <p hidden={!this.props.inputShow}>
                {this.props.userInfo.employer}
              </p>
              <input
                placeholder="Enter New Employer"
                hidden={this.props.inputShow}
                onChange={event =>
                  this.props.updateInfo(event.target.value, "employer")
                }
              />
            </div>
          </div>
          <div>
            <Favorites
              inputShow={this.props.inputShow}
              updateInfo={this.props.updateInfo}
              faveArr={this.props.userInfo.favoriteMovies}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
