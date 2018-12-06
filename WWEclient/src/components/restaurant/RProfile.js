import React, { Component } from 'react';
import UserServices from '../users/UsersService';
import Ionicon from 'react-ionicons';
import Rating from 'react-rating';
import SweetAlert from 'react-bootstrap-sweetalert';

class RProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      alert: null,
      confirmAlert: null,
      exceptionAlert: null
    };
  }

  componentDidMount() {
    if (!("id" in this.props.location)) {
      this.props.history.push("/arprofile");
    } else {
      UserServices.crudById(this.props.location.id, this.onSuccess, this.onError);
    }
  }

  handleDeleteConfirmation = () => {
    const showAlert = () => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="default"
        title="Are you sure?"
        onConfirm={() => {
          this.deleteClick();
          this.hideAlert();
          const confirmAlert = () => (
            <SweetAlert
              success
              title="Success!"
              onConfirm={() => this.hideAlert()}
            >
              Profile deleted
          </SweetAlert>
          );
          this.setState({
            confirmAlert: confirmAlert()
          });
        }}
        onCancel={() => {
          this.hideAlert();
          const confirmAlert = () => (
            <SweetAlert
              danger
              title="Cancelled"
              onConfirm={() => this.hideAlert()}
            >
              Profile was not deleted
          </SweetAlert>
          );
          this.setState({
            confirmAlert: confirmAlert()
          });
        }}
      >
      </SweetAlert>
    );
    this.setState({
      alert: showAlert()
    });
  }

  hideAlert() {
    this.setState({ alert: null, confirmAlert: null, exceptionAlert: null });
  }

  onSuccess = resp => this.setState({ data: resp.data.Item })

  onError = resp => console.error(resp)

  editClick = id => this.props.history.push(`/redit/${id}`)

  deleteClick = () => UserServices.crudDelete(this.state.data.Id, this.deleteSuccess, this.onError)

  deleteSuccess = () => this.props.history.push(`/arprofile`)

  render() {
    const hi = this.state.data
    const rN = parseInt(this.state.data.Rating)
    return (
      <React.Fragment>
        {this.state.confirmAlert}
        {this.state.alert}
        {this.state.exceptionAlert}
        <div className="container-fluid flex-grow-1 container-p-y">
          <div className="card mb-4 col-md-6 offset-md-3">
            <div>
              <Ionicon
                icon="ios-undo"
                rotate={false}
                fontSize="35px"
                color="rgb(125, 176, 24)"
                onClick={() => this.deleteSuccess()}
                style={{ float: "left" }}
              />
              <Ionicon
                icon="logo-octocat"
                rotate={true}
                fontSize="35px"
                color="rgb(125, 176, 24)"
                onClick={() => this.editClick(hi.Id)}
                style={{ float: "right" }}
              />
              <Ionicon
                icon="ios-bonfire-outline"
                rotate={false}
                fontSize="35px"
                color="rgb(255,0,0)"
                onClick={() => this.handleDeleteConfirmation()}
                style={{ float: "right" }}
              />
            </div>
            <div className="card-header">
              <h1>{hi.Name}</h1>
              <div className="card-body test3">
                <img src="https://www.eu-fusions.org/images/ind_lsh_glb_ve_1103_lo.jpg" height="200px" width="200px" alt="" />
                <h5>Telephone: {hi.Phone} </h5>
                <h5>Address: {hi.Address1} {hi.Address2} {hi.City}, {hi.State} {hi.Zip}</h5>
                <h5>Categories: {hi.Categories}</h5>
                <h5>Hours: {hi.Hours}</h5>
                <h5>Delivery: {hi.Delivery}</h5>
                <h5>Website: {hi.Website}</h5>
                <h5>Price Range: {hi.Range}</h5>
                <Rating
                  initialRating={rN}
                  readonly
                />
                {/* <div>
                <button onClick={this.onClick} className="btn btn-success">More</button>
              </div> */}
              </div>
              <div className="card-footer">
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default RProfile;