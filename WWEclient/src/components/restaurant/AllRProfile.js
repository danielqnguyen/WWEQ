import React, { Component } from 'react'
import UserServices from '../users/UsersService'
import Ionicon from 'react-ionicons'


class AllRProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      name: ''
    }
  }

  componentDidMount() {
    UserServices.crudAll(this.onSuccess, this.onError)
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val }
    );
  }

  onSuccess = response => this.setState({ profiles: response.data.Items })

  onError = response => console.log(response)

  viewProfile = id => this.props.history.push({
    pathname: "/rprofile",
    id: id
  })

  onNameSuccess = resp => this.props.history.push({
    pathname: "/rprofile",
    id: resp.data.Item.Id
  })

  render() {
    const list = this.state.profiles.map(item => {
      return <tr key={item.Id}
        className="col-s-6 col-md-6 col-lg-6">
        <td>{item.Name}</td>
        <td style={{ float: "right" }}><Ionicon icon="ios-eye-outline" rotate={false} fontSize="35px" color="rgb(125, 176, 24)" onClick={() => this.viewProfile(item.Id)} /></td>
      </tr >
    })
    return (
      <React.Fragment>
        <div className="container-fluid flex-grow-1 container-p-y">
          <div className="card mb-4 fixed-table-container">
            <h6 className="card-header">Restaurant List</h6>
            <div className="card-body">
              <div className="input-group">
                <div className="input-group">
                  <input
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.onChange}
                    className="form-control"
                  />
                  <span className="input-group-append">
                    <button className="btn btn-success btn-sm"
                      onClick={() => {
                        UserServices.crudSelectByName(
                          this.state.name,
                          this.onNameSuccess,
                          this.onError)
                      }}
                    >
                      Search for Restaurant</button>
                  </span>
                </div>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Restaurant Name</th>
                    <th style={{ float: "right" }} scope="col">actions</th>
                  </tr>
                </thead>
                <tbody>
                  {list}
                </tbody>
              </table>
              <div style={{ textAlign: "right" }}>
                <Ionicon icon="md-arrow-round-back" rotate={false} fontSize="35px" color="rgb(125, 176, 24)" onClick={() => console.log('hi')} />
                <Ionicon icon="md-arrow-round-forward" rotate={false} fontSize="35px" color="rgb(125, 176, 24)" onClick={() => console.log('hi')} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    )
  }
}

export default AllRProfile;