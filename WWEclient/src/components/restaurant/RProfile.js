import React, { Component } from 'react'
import UserServices from '../users/UsersService'
import Ionicon from 'react-ionicons'

class RProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    if (!("id" in this.props.location)) {
      this.props.history.push("/arprofile")
    } else {
      console.log(this.props.location.id)
      UserServices.crudById(this.props.location.id, this.onSuccess, this.onError)
    }
  }

  onSuccess = resp => this.setState({ data: resp.data.Item })

  onError = resp => console.error(resp)

  onClick = () => console.log(this.state)

  editClick = id => this.props.history.push(`/redit/${id}`)

  render() {
    const hi = this.state.data
    return (
      <div className="container-fluid flex-grow-1 container-p-y">
        <div className="card mb-4 col-md-6 offset-md-3">
          <div>
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
              color="rgb(125, 176, 24)"
              onClick={() => this.editClick(hi.Id)}
              style={{ float: "right" }}
            />
          </div>
          <div className="card-header">
            <h1>{hi.Name}</h1>
            <div className="card-body">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" height="200px" width="200px" alt="" />
              <h4>Telephone: {hi.Phone} </h4>
              <h4>Address: {hi.Address1} {hi.Address2} {hi.City} {hi.State} {hi.Zip}</h4>
              <h4>Website:</h4>
              <div>
                <button onClick={this.onClick} className="btn btn-success">More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default RProfile