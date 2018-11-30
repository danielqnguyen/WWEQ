import React from 'react'
import TextInputValid from '../common/TextInputWithValidation'

const LocationInput = props => {
  return (
    <React.Fragment>
      <div className="input-group mb-3 col-xs-2 col-s-2 col-md-2 col-lg-2">
        <TextInputValid
          label="Location"
          name="location"
          value={props.location}
          onChange={props.onChange}
          isValid={true}
          hintText="Please enter a location"
        />
        <div className="input-group-append">
          <button
            className="btn btn-success"
            onClick={props.onClick}
          >
            Start Randomizer</button>
        </div>
      </div>
    </React.Fragment >
  )
}



export default LocationInput
