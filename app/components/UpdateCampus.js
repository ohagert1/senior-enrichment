import { Component } from 'react';
import { connect } from 'react-redux';
import store, { putCampusUpdate } from '../store';
import React from 'react';

export default class UpdateCampus extends Component {

  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(event) {
    this.campus.name = event.target.value;
  }

  onDescriptionChange(event) {
    this.campus.description = event.target.value;
  }

  onImageChange(event) {
    this.campus.imageUrl = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    store.dispatch(putCampusUpdate(this.campus, this.props.history));
  }

  render() {
    this.campus = this.props.campuses.find((campus) => {
      return campus.id == this.props.match.params.id;
    });
    if(this.campus) {
      return(
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Campus Name:</label>
              <input
                className="form-control"
                type="text"
                name="campusName"
                defaultValue={this.campus.name}
                onChange={this.onNameChange}
              />
          </div>
          <div className="form-group">
            <label>Campus Description:</label>
              <input
                className="form-control"
                type="text"
                name="campusDescription"
                defaultValue={this.campus.description}
                onChange={this.onDescriptionChange}
              />
          </div>
          <div>
          <img src={this.campus.imageUrl} style={{width: 25 + '%'}}/>
          </div>
          <div className="form-group">
            <label>Campus Image URL:</label>
              <input
                className="form-control"
                type="text"
                name="campusImage"
                defaultValue={this.campus.imageUrl}
                onChange={this.onImageChange}
              />
          </div>
          <button type="submit">Submit Changes</button>
        </form>
      );
    }
    return null;
  }
}
