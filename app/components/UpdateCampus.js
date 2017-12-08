import { Component } from 'react';
import { connect } from 'react-redux';
import store, { postNewCampus, writeCampusName, writeCampusDescription, writeCampusImage } from '../store';
import React from 'react';

class UpdateCampus extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    if(this.props.campuses.length) {
      console.log('camp', this.props.campuses)
      let campus = this.props.campuses.find((campus) => {
        return campus.id == this.props.match.params.id;
      });
      return(
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Campus Name:</label>
              <input
                className="form-control"
                type="text"
                name="campusName"
                value={campus.name}
                onChange={this.props.onNameChange}
              />
          </div>
          <div className="form-group">
            <label>Campus Description:</label>
              <input
                className="form-control"
                type="text"
                name="campusDescription"
                value={campus.description}
                onChange={this.props.onDescriptionChange}
              />
          </div>
          <div>
          <img src={campus.imageUrl} style={{width: 25 + '%'}}/>
          </div>
          <div className="form-group">
            <label>Campus Image URL:</label>
              <input
                className="form-control"
                type="text"
                name="campusImage"
                value={campus.imageUrl}
                onChange={this.props.onImageChange}
              />
          </div>
          <button type="submit">Submit</button>
        </form>
      );
    }
    return null;
  }
}

function mapStateToProps(state, ownProps) {
  console.log('ownProps',ownProps)

  return {

    campuses: state.campuses,
    campusName: state.newCampus.name,
    campusDescription: state.newCampus.description,
    campusImage: state.newCampus.imageUrl,
    history: ownProps.history

  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: (event) => {
      event.preventDefault();
      dispatch(putCampusUpdate({
        campus: {
          name: event.target.campusName.value,
          description: event.target.campusDescription.value,
          imageUrl: event.target.campusImage.value
        }
      },
      ownProps.history
      ))
    },
    onNameChange: (event) => {
      event.preventDefault();
      dispatch(writeCampusName(event.target.value))
    },
    onDescriptionChange: (event) => {
      event.preventDefault();
      dispatch(writeCampusDescription(event.target.value))
    },
    onImageChange: (event) => {
      event.preventDefault();
      dispatch(writeCampusImage(event.target.value))
    }
  }
}

const UpdateCampusContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateCampus)

export default UpdateCampusContainer;
